import React from "react";
import { Row, Col } from "react-bootstrap";
import * as S from "./styles";

type TaskPropsInfos = {
  task: {
    Custos: string;
    NumDemanda: string;
    Status: string;
    Titulo: string;
    Consultor: string;
    BRM: string;
    DataInicio: string;
    Estimativa: string;
    TempoConsumido: string;
    TempoRestante: string;
    Previsao: string;
    Filial: string;
    Squad: string;
  };
};

const TaskInfos = ({ task }: TaskPropsInfos) => {
  return (
    <S.TaskInfosTable>
      <Col>
        <div className="card-task">
          <span>Custos: </span>
          <p>{task.Custos}</p>
        </div>
      </Col>
      <Row>
        <Col>
          <h2>{task.Titulo}</h2>
          <div className="card-task">
            <span>Consultor: </span>
            <p>{task.Consultor}</p>
          </div>
          <div className="card-task">
            <span>Squad: </span>
            <p>{task.Squad}</p>
          </div>
          <div className="card-task">
            <span>Filial: </span>
            <p>{task.Filial}</p>
          </div>
          <div className="card-task">
            <span>BRM: </span>
            <p>{task.BRM}</p>
          </div>
        </Col>
        <Col>
          <h2>Estimativas</h2>
          <div className="card-task">
            <span>Previsao: </span>
            <p>{task.Previsao}</p>
          </div>
          <div className="card-task">
            <span>Status: </span>
            <p>{task.Status}</p>
          </div>
          <div className="card-task">
            <span>Tempo Consumido: </span>
            <p>{task.TempoConsumido}</p>
          </div>
          <div className="card-task">
            <span>Tempo Restante: </span>
            <p>{task.TempoRestante}</p>
          </div>
        </Col>
      </Row>
    </S.TaskInfosTable>
  );
};

export default TaskInfos;
