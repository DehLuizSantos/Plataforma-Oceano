import { connectToDatabase } from '../../config/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { Tasks } from '../../services/tasksMock';

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
  await collection.insertOne({
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
  })


  res.status(200).json({status: "ok"})


};

export default PostTask;
