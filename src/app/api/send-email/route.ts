import { NextRequest, NextResponse } from 'next/server';
import {
  sendContactNotifications,
  sendReviewNotifications,
  sendNewsletterConfirmation,
} from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json();

    let result;
    switch (type) {
      case 'contact':
        result = await sendContactNotifications(data);
        break;
      case 'review':
        result = await sendReviewNotifications(data);
        break;
      case 'newsletter':
        result = await sendNewsletterConfirmation(data);
        break;
      default:
        return NextResponse.json(
          { success: false, error: 'Invalid email type' },
          { status: 400 }
        );
    }

    return NextResponse.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('Email API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
