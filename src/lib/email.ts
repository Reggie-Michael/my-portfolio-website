import nodemailer from 'nodemailer';

// Email service configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports like 587
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify connection configuration
transporter.verify(function (error) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Email interfaces
interface BaseEmailData {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  submissionId?: string;
}

interface ReviewEmailData {
  name: string;
  email: string;
  rating: number;
  project: string;
  review: string;
  submissionId?: string;
}

interface NewsletterEmailData {
  email: string;
  subscriptionId?: string;
}

// Core email sending function
export async function sendEmail(data: BaseEmailData): Promise<boolean> {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.BUSINESS_NAME || 'Michael E.'}" <${
        process.env.GMAIL_USER
      }>`,
      to: data.to,
      subject: data.subject,
      html: data.html,
      replyTo: data.replyTo,
    });

    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    return false;
  }
}

// Contact form notification emails
export async function sendContactNotifications(
  data: ContactEmailData
): Promise<{ customer: boolean; business: boolean }> {
  // Customer confirmation email
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting us!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #4F46E5; color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .message-box { background: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; background: #f8fafc; color: #666; font-size: 14px; }
        .social-links { margin: 15px 0; }
        .social-links a { color: #4F46E5; text-decoration: none; margin: 0 10px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for reaching out!</h1>
        </div>
        <div class="content">
          <p>Hi ${data.name},</p>
          <p>Thank you for contacting us through our website. I've received your message about <strong>"${
            data.subject
          }"</strong> and will get back to you within 24 hours.</p>

          <div class="message-box">
            <h3>Your Message:</h3>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
          </div>

          <p>In the meantime, feel free to check out our latest projects and insights.</p>
          <p>Best regards,<br><strong>${
            process.env.BUSINESS_NAME || 'Your Business Team'
          }</strong></p>
        </div>
        <div class="footer">
          <p>This email was sent from ${
            process.env.WEBSITE_URL || 'our website'
          }</p>
          ${
            data.submissionId ? `<p>Reference ID: ${data.submissionId}</p>` : ''
          }
        </div>
      </div>
    </body>
    </html>
  `;

  // Business notification email
  const businessEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #DC2626; color: white; padding: 20px; text-align: center; }
        .alert { background: #FEF2F2; color: #DC2626; padding: 15px; text-align: center; font-weight: bold; border: 1px solid #FECACA; }
        .content { padding: 20px; }
        .submission-details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; display: inline-block; min-width: 80px; }
        .value { color: #111827; }
        .message-content { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px; }
        .quick-actions { background: #DC2626; color: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .action-button { display: inline-block; background: white; color: #DC2626; padding: 10px 20px; border-radius: 6px; text-decoration: none; margin: 0 10px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="alert">
          New inquiry received - Response recommended within 24 hours
        </div>
        <div class="content">
          <div class="submission-details">
            <h3>Contact Information</h3>
            <div class="field">
              <span class="label">Name:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${data.email}">${
                data.email
              }</a></span>
            </div>
            <div class="field">
              <span class="label">Subject:</span>
              <span class="value">${data.subject}</span>
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <div class="message-content">${data.message.replace(
                /\n/g,
                '<br>'
              )}</div>
            </div>
          </div>

          <div class="quick-actions">
            <h3>Quick Actions</h3>
            <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(
              data.subject
            )}" class="action-button">Reply to ${data.name}</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const customerEmailSent = await sendEmail({
    to: data.email,
    subject: 'Thank you for contacting us!',
    html: customerEmailHtml,
  });

  const businessEmailSent = await sendEmail({
    to: process.env.BUSINESS_EMAIL!,
    subject: `New Contact: ${data.subject} - ${data.name}`,
    html: businessEmailHtml,
    replyTo: data.email,
  });

  return {
    customer: customerEmailSent,
    business: businessEmailSent,
  };
}

// Review notification emails
export async function sendReviewNotifications(
  data: ReviewEmailData
): Promise<{ customer: boolean; business: boolean }> {
  const starRating = '⭐'.repeat(data.rating) + '☆'.repeat(5 - data.rating);

  // Customer confirmation email
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for your review!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #059669; color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .rating-display { text-align: center; font-size: 24px; margin: 20px 0; }
        .review-box { background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; background: #f8fafc; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank you for your review!</h1>
        </div>
        <div class="content">
          <p>Hi ${data.name},</p>
          <p>Thank you for taking the time to share your experience with the <strong>${
            data.project
          }</strong> project!</p>

          <div class="rating-display">
            ${starRating}
            <br><span style="font-size: 16px;">${data.rating}/5 stars</span>
          </div>

          <div class="review-box">
            <h3>Your Review:</h3>
            <p><em>"${data.review}"</em></p>
          </div>

          <p>Your feedback helps us improve and helps others understand the value we can bring to their projects.</p>
          <p>We look forward to potential future collaborations!</p>

          <p>Best regards,<br><strong>${
            process.env.BUSINESS_NAME || 'Your Business Team'
          }</strong></p>
        </div>
        <div class="footer">
          <p>Thank you for choosing our services!</p>
          ${
            data.submissionId ? `<p>Reference ID: ${data.submissionId}</p>` : ''
          }
        </div>
      </div>
    </body>
    </html>
  `;

  // Business notification email
  const businessEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Review Received</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .review-details { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .rating-display { text-align: center; font-size: 20px; margin: 15px 0; background: white; padding: 15px; border-radius: 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; display: inline-block; min-width: 80px; }
        .value { color: #111827; }
        .review-content { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; margin-top: 10px; font-style: italic; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>⭐ New Review Received</h1>
        </div>
        <div class="content">
          <div class="review-details">
            <h3>Review Details</h3>
            <div class="rating-display">
              ${starRating}
              <br><span style="font-size: 14px;">${
                data.rating
              } out of 5 stars</span>
            </div>
            <div class="field">
              <span class="label">Reviewer:</span>
              <span class="value">${data.name}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value"><a href="mailto:${data.email}">${
                data.email
              }</a></span>
            </div>
            <div class="field">
              <span class="label">Project:</span>
              <span class="value">${data.project}</span>
            </div>
            <div class="field">
              <span class="label">Review:</span>
              <div class="review-content">${data.review.replace(
                /\n/g,
                '<br>'
              )}</div>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const customerEmailSent = await sendEmail({
    to: data.email,
    subject: `Thank you for your ${data.rating}-star review!`,
    html: customerEmailHtml,
  });

  const businessEmailSent = await sendEmail({
    to: process.env.BUSINESS_EMAIL!,
    subject: `New ${data.rating}⭐ Review: ${data.project} - ${data.name}`,
    html: businessEmailHtml,
    replyTo: data.email,
  });

  return {
    customer: customerEmailSent,
    business: businessEmailSent,
  };
}

// Newsletter subscription confirmation
export async function sendNewsletterConfirmation(
  data: NewsletterEmailData
): Promise<{ customer: boolean; business: boolean }> {
  // Customer confirmation email
  const customerEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Welcome to our newsletter!</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #7C3AED; color: white; padding: 30px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; }
        .benefits { background: #F5F3FF; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .benefits ul { margin: 10px 0; padding-left: 20px; }
        .benefits li { margin-bottom: 8px; }
        .footer { text-align: center; padding: 20px; background: #f8fafc; color: #666; font-size: 14px; }
        .unsubscribe { color: #7C3AED; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to our project updates! 📧</h1>
        </div>
        <div class="content">
          <p>Thank you for subscribing to our newsletter!</p>

          <div class="benefits">
            <h3>You'll be the first to know about:</h3>
            <ul>
              <li>New project launches and case studies</li>
              <li>Technical insights and development stories</li>
              <li>Collaboration opportunities</li>
              <li>Behind-the-scenes content and updates</li>
              <li>Industry trends and best practices</li>
            </ul>
          </div>

          <p>We respect your inbox and will only send valuable content. No spam, just quality updates when we have something worth sharing.</p>

          <p>Best regards,<br><strong>${
            process.env.BUSINESS_NAME || 'Your Business Team'
          }</strong></p>
        </div>
        <div class="footer">
          <p>You can unsubscribe at any time by replying to any newsletter email.</p>
          ${
            data.subscriptionId
              ? `<p>Subscription ID: ${data.subscriptionId}</p>`
              : ''
          }
        </div>
      </div>
    </body>
    </html>
  `;

  // Business notification email
  const businessEmailHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Newsletter Subscription</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
        .header { background: #7C3AED; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .subscriber-info { background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 New Newsletter Subscription</h1>
        </div>
        <div class="content">
          <div class="subscriber-info">
            <h3>New Subscriber</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Subscribed:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>A new subscriber has joined your newsletter!</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const customerEmailSent = await sendEmail({
    to: data.email,
    subject: 'Welcome to our newsletter! 📧',
    html: customerEmailHtml,
  });

  const businessEmailSent = await sendEmail({
    to: process.env.BUSINESS_EMAIL!,
    subject: 'New newsletter subscription',
    html: businessEmailHtml,
  });

  return {
    customer: customerEmailSent,
    business: businessEmailSent,
  };
}
