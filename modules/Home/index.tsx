import React, { useState } from "react";
import * as S from "./styles";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TaskProps, ComentsProps } from "./interface";
import TaskInfos from "./taskInfos";
import ComentsInfos from "./comentsInfos";
import NextApi from "../../services/NextApi";

const nextApi = new NextApi();

const Home: React.FC = () => {
  const [task, setTask] = useState<TaskProps>();
  const [coments, setComents] = useState<ComentsProps>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const body = {
        BRM: "exemplo",
        Consultor: "exemplo",
        Custos: "exemplo",
        DataInicio: "exemplo",
        Estimativa: "exemplo",
        NumDemanda: "exemplo",
        Previsao: "exemplo",
        Status: "exemplo",
        TempoConsumido: "exemplo",
        TempoRestante: "exemplo",
        Titulo: "exemplo",
        Filial: "exemplo",
        Squad: "exemplo",
      };
      const result = await nextApi.postTask(body);
      console.log(result);
      setTask(result.data[0]);
    } catch (err) {
      console.log(err);
    }
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
        <S.FormGroupStyled controlId="form">
          <Form.Control
            type="text"
            placeholder="Digite o código da task"
            {...register("task")}
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
