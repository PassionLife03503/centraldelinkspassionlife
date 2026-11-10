export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const endpoint = process.env.LIVE_BLACK_CLICK_ENDPOINT ||
    'https://script.google.com/macros/s/AKfycbw7qwFKXdT75KRazqY3b1nPMoZ2ZcXiIn19IH3KIJtelJiCn-QCmnWTd4R8HhBnT4GK/exec';
  if (!endpoint) {
    return res.status(500).json({ ok: false, error: 'LIVE_BLACK_CLICK_ENDPOINT is not configured' });
  }

  try {
    let payload = req.body || {};
    if (typeof payload === 'string') payload = JSON.parse(payload);

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    return res.status(200).json({ ok: response.ok });
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'Click forwarding failed' });
  }
}
