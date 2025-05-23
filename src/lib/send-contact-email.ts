import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendContactEmail({ name, email, message }: { name: string; email: string; message: string }) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['pedro.augsuto07.dev@gmail.com'],
      subject: `New Contact Message from ${name}`,
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
    });
    if (error) throw new Error(error.message);
    return { success: true, message: 'Your message has been sent successfully!' };
  } catch (err: any) {
    return { success: false, message: err.message || 'Failed to send message.' };
  }
}
