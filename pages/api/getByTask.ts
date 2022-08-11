import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const GetByTitleTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { Titulo }  = req.query


  if(!Titulo){
    res.status(200).json({status: "Você precisa digitar um Titulo"})
  }

  const { db } = await connectToDatabase()
  const collection = await db.collection("tasks")
  const taskInfos = await collection.find(Titulo).toArray()

  if(taskInfos.length === 0){
    res.status(200).json("Nenhuma Task com esse titulo foi encontrada")
  }



  res.status(200).json(taskInfos)

};

export default GetByTitleTask;
