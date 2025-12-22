import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Forward to Netlify Forms
    const netlifyFormData = new URLSearchParams();
    
    // Add form-name for Netlify
    netlifyFormData.append('form-name', 'damage-report');
    
    // Convert FormData to URLSearchParams
    formData.forEach((value, key) => {
      netlifyFormData.append(key, value.toString());
    });

    // Submit to Netlify Forms
    const response = await fetch(`${process.env.URL || 'https://www.smidigflytt365.se'}/__forms.html`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: netlifyFormData.toString(),
    });

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
