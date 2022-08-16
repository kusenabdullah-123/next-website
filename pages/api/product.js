// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "GET") {
    res.status(200).json({ name: "Macbook Pro 16", price: "$50" });
  }
  if (req.method == "POST") {
    res.status(200).json({ mehod: "post", body: req.body });
  }
}
