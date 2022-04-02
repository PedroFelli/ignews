import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log("evento recebido");

  res.status(200).json({ ok: true });
};
