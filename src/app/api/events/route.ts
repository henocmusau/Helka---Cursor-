import { NextResponse } from 'next/server';
import { subscribe } from '@/lib/sse-bus';

export const GET = async () => {
  const stream = new ReadableStream({
    start(controller) {
      const send = (data) => controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
      const unsub = subscribe(send);
      const ping = setInterval(() => controller.enqueue(`: ping\n\n`), 15000);
      controller.enqueue(`retry: 2000\n\n`);
      return () => { clearInterval(ping); unsub(); };
    }
  });
  return new NextResponse(stream, { headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache", Connection: "keep-alive" } });
};
