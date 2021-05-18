import { articles } from "../../../data"; // get from database. and a json object in this case

export default function handler(req, res) {
  const filtered = articles.filter((article) => article.id === req.query.id);
  if (filtered.length) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `article with the id of ${req.query.id} is not found` });
  }
}
