'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabase';

interface UseSupabaseFormOptions {
  table: string;
  emailType?: 'contact' | 'review' | 'newsletter';
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useSupabaseForm = ({
  table,
  emailType,
  onSuccess,
  onError,
}: UseSupabaseFormOptions) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data: unknown) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Insert data into Supabase
      const { error: insertError } = await supabase.from(table).insert([data]);

      if (insertError) {
        throw new Error(insertError.message);
      }

      // Send email notifications if emailType is provided
      if (emailType) {
        try {
          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: emailType,
              data,
            }),
          });

          if (!response.ok) {
            console.warn(
              'Email notification failed, but form was submitted successfully'
            );
          }
        } catch (emailError) {
          console.warn('Email notification error:', emailError);
          // Don't fail the form submission if email fails
        }
      }

      setSuccess(true);
      onSuccess?.();
      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    submitForm,
    isSubmitting,
    error,
    success,
    resetForm,
  };
};
