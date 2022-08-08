import React, { useState } from "react";
import * as S from "./styles";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TaskProps, ComentsProps } from "./interface";
import TaskInfos from "./taskInfos";
import ComentsInfos from "./comentsInfos";

const Home: React.FC = () => {
  const [task, setTask] = useState<TaskProps>();
  const [coments, setComents] = useState<ComentsProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    setTask({
      BRM: "exemplo",
      Consultor: "andré",
      Custos: "R$: 1250",
      DataInicio: "16/02/2020",
      Estimativa: "22/02/2022",
      NumDemanda: "123456",
      Previsao: "25/02/2022",
      Status: "22%",
      TempoConsumido: "2 horas",
      TempoRestante: "4 horas",
      Titulo: "demanda 1",
      Filial: "São Paulo",
      Squad: "Monsters",
    });
  };
  const onSearchComents = () => {
    const comentsMock = [
      { Comentario: "Aberto", DataComentario: "16/12/2022" },
      { Comentario: "Aberto", DataComentario: "16/12/2022" },
      { Comentario: "Aberto", DataComentario: "16/12/2022" },
      { Comentario: "Aberto", DataComentario: "16/12/2022" },
      { Comentario: "Aberto", DataComentario: "16/12/2022" },
    ];

    setComents({ Comentarios: comentsMock });
  };

  return (
    <S.ContainerHome>
      <h1>Pesquise a task</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormGroupStyled controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Digite o código da task"
            {...register("example")}
            defaultValue="test"
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </S.FormGroupStyled>
      </Form>
      <S.TaskInformationWrapper>
        {task ? (
          <TaskInfos task={task} onClickComents={() => onSearchComents} />
        ) : (
          <p>Nenhuma task selecionada</p>
        )}
      </S.TaskInformationWrapper>

      <S.TaskInformationWrapper>
        {coments?.Comentarios ? <>nada</> : <ComentsInfos />}
      </S.TaskInformationWrapper>
    </S.ContainerHome>
  );
};

export default Home;
