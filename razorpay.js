import Razorpay from 'razorpay'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  })

  const options = { amount: req.body.amount * 100, currency: 'INR', receipt: 'order_rcptid_11' }

  try {
    const order = await razorpay.orders.create(options)
    res.json(order)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}