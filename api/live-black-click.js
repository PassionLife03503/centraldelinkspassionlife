export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const endpoint = process.env.LIVE_BLACK_CLICK_ENDPOINT;
  if (!endpoint) {
    return res.status(500).json({ ok: false, error: 'LIVE_BLACK_CLICK_ENDPOINT is not configured' });
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(req.body || {})
    });

    return res.status(200).json({ ok: response.ok });
  } catch (error) {
    return res.status(502).json({ ok: false, error: 'Click forwarding failed' });
  }
}
