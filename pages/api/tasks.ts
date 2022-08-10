import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { Tasks } from '../../services/tasksMock';

const GetByTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { param } = req.query
  const { db } = await connectToDatabase()
  const collection = await db.collection("tasks")
  const tasks = await collection.find({}).toArray()


  res.status(200).json(tasks)


};

export default GetByTask;
