export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // e.g., use nodemailer to send an email
    return res.status(200).json({ success: true });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
