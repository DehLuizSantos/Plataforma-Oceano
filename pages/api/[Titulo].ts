import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const GetByTitleTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { Titulo }  = req.query


  if(!Titulo){
    res.status(200).json({status: "Você precisa digitar um Titulo"})
  }

  const { db } = await connectToDatabase()
  const collection = await db.collection("tasks")
  //TODO: Pesquisar como fazer esse find funcionar (performance)
  const taskInfos = await collection.find(Titulo).toArray()
  const taskFilter = taskInfos.filter((task: any) => task.Titulo === Titulo)


  res.status(200).json(taskFilter)

};

export default GetByTitleTask;
