import { NextApiRequest, NextApiResponse } from 'next';
import { Tasks } from '../../services/tasksMock';

const GetByTask = (req: NextApiRequest, res: NextApiResponse) => {
  const {task} = req.query

  const TasksFilter = Tasks.filter((taskFilter) => taskFilter.Titulo === task)

  return res.status(200).json(TasksFilter);
};

export default GetByTask;
