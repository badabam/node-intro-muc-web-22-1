export default async function handler(req, res) {
  res.json(`${req.method} ${req.url}`);
}
