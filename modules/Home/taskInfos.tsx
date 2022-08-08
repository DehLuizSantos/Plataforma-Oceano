import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ComentsProps, TaskProps } from "./interface";

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
  onClickComents?: () => void;
};

const TaskInfos = ({ task, onClickComents }: TaskPropsInfos) => {
  return (
    <div>
      <Row>
        <Col>
          <h2>{task.Titulo}</h2>
          <div>
            <span>Consultor: </span>
            <p>{task.Consultor}</p>
          </div>
          <div>
            <span>Squad: </span>
            <p>{task.Squad}</p>
          </div>
          <div>
            <span>Filial: </span>
            <p>{task.Filial}</p>
          </div>
          <div>
            <span>BRM: </span>
            <p>{task.BRM}</p>
          </div>
        </Col>

        <Col>
          <h2>Estimativas</h2>
          <div>
            <span>Previsao: </span>
            <p>{task.Previsao}</p>
          </div>
          <div>
            <span>Status: </span>
            <p>{task.Status}</p>
          </div>
          <div>
            <span>Tempo Consumido: </span>
            <p>{task.TempoConsumido}</p>
          </div>
          <div>
            <span>Tempo Restante: </span>
            <p>{task.TempoRestante}</p>
          </div>
        </Col>
        <Col>
          <div>
            <span>Custos: </span>
            <p>{task.Custos}</p>
          </div>
          <Button variant="secondary" size="sm" onClick={onClickComents}>
            Ver comentarios
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default TaskInfos;
