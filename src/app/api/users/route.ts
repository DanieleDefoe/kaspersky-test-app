import { BASE_URL } from '@/lib/constants';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const results = new URL(request.nextUrl).searchParams.get('results');
  const response = await fetch(`${BASE_URL}?results=${results}`, {
    method: 'GET',
  });

  const { results: users } = await response.json();

  return NextResponse.json({ users });
}
