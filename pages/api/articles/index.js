import { articles } from "../../../data"; // get from database. and a json object in this case

export default function handler(req, res) {
  res.status(200).json(articles);
}
