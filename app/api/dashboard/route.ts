import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const htmlPath = join(process.cwd(), 'public', 'index.html');
    const html = await readFile(htmlPath, 'utf-8');

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    return new Response('Dashboard not found', { status: 404 });
  }
}
