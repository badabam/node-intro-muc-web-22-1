export default function handler(req, res) {
  res.json(`${req.url}, ${req.method}`)
}