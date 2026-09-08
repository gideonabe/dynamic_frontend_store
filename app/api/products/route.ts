import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      headers: {
        // Spoof a standard browser header to bypass cloud IP blocking
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `FakeStoreAPI wrapper returned status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API proxy fetch failed:", error);
    return NextResponse.json(
      { error: 'Internal Server Error fetching from FakeStoreAPI' }, 
      { status: 500 }
    );
  }
}
