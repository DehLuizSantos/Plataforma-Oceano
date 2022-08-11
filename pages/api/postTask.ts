import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const PostTask = async (req: NextApiRequest, res: NextApiResponse) => {
  const { BRM,
          Consultor,
          Custos,
          DataInicio,
          Estimativa,
          NumDemanda,
          Previsao,
          Status,
          TempoConsumido,
          TempoRestante,
          Titulo,
          Filial,
          Squad  } = req.body

  const { db } = await connectToDatabase()
  const collection = db.collection("tasks")

  const collectionToInsert = {
      BRM,
      Consultor,
      Custos,
      DataInicio,
      Estimativa,
      NumDemanda,
      Previsao,
      Status,
      TempoConsumido,
      TempoRestante,
      Titulo,
      Filial,
      Squad,
  }
  await collection.insertOne(collectionToInsert)


  res.status(200).json({status: "ok"})


};

export default PostTask;
