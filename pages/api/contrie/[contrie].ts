import { NextApiRequest, NextApiResponse } from 'next';
import { Tasks } from '../../../services/tasksMock';

const GetAllByContrie = (req: NextApiRequest, res: NextApiResponse) => {
  const {contrie} = req.query

  const contriesFilter = Tasks.filter((contrieFilter) => contrieFilter.Filial === contrie)

  return res.status(200).json(contriesFilter);
};

export default GetAllByContrie;
