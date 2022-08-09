import axios, { AxiosInstance, AxiosResponse } from 'axios'

type PostBody = {
    BRM: string,
    Consultor: string,
    Custos: string,
    DataInicio: string,
    Estimativa: string,
    NumDemanda: string,
    Previsao: string,
    Status: string,
    TempoConsumido: string,
    TempoRestante: string,
    Titulo: string,
    Filial: string,
    Squad: string,
}

export default class NextApi {
  private http: AxiosInstance
  constructor() {
    this.http = axios.create({
      baseURL: /* 'https://task-manager-iota-wheat.vercel.app/api' */'http://localhost:3000/api/'
    })
  }

  public async getAllTask(task: string) {
    try {
      const response: AxiosResponse = await this.http.get(`${task}`)
      return { data: response.data, error: false }
    } catch (error: import('axios').AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true }
      }
      return { error: true }
    }
  }
  public async getAllContries(contrie: string) {
    try {
      const response: AxiosResponse = await this.http.get(`contrie/${contrie}`)
      return { data: response.data, error: false }
    } catch (error: import('axios').AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true }
      }
      return { error: true }
    }
  }
    public async postTask(body: PostBody) {
    try {
      const response: AxiosResponse = await this.http.post(`post`, body)
      return { data: response.data, error: false }
    } catch (error: import('axios').AxiosError | any) {
      if (error.response) {
        return { statusCode: error.response.status, error: true }
      }
      return { error: true }
    }
  }

}
