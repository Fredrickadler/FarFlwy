export default function handler(req, res) {
  console.log("Webhook data:", req.body);
  res.status(200).json({ ok: true });
}