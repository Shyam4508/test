export default function handler(req, res) {
  res.json({ status: 'ok', rates: [{ service: 'Standard', price: 50 }] })
}