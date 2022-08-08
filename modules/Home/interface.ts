export type TaskProps = {
  Custos: string
  NumDemanda: string
  Status: string
  Titulo: string
  Consultor: string
  BRM: string
  DataInicio: string
  Estimativa: string
  TempoConsumido: string
  TempoRestante: string
  Previsao: string
  Filial: string
  Squad: string
}

export type ComentsProps = {
  Comentarios: Array<ComentProps>
}

type ComentProps = {
  Comentario: string
  DataComentario: string
}

