import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const users = [
    { id: 1, name: "Pedro" },
    { id: 2, name: "Pedro 2" },
    { id: 3, name: "Pedro 3" },
  ];

  return res.json(users);
};
