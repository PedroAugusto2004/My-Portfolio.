import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/send-contact-email';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing required fields.' }, { status: 400 });
    }
    const result = await sendContactEmail({ name, email, message });
    if (result.success) {
      return NextResponse.json(result, { status: 200 });
    } else {
      return NextResponse.json(result, { status: 500 });
    }
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message || 'Server error.' }, { status: 500 });
  }
}
