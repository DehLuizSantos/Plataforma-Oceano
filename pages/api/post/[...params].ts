import { NextApiRequest, NextApiResponse } from 'next';

const GetByTask = (req: NextApiRequest, res: NextApiResponse) => {
  const {...params} = req.body

  return res.status(200).json({...req});
};

export default GetByTask;
