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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await nextApi.getTaskByTitle(data.Titulo);
      setTask(result.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.ContainerHome>
      <h1>Pesquise a task</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormGroupStyled controlId="Titulo">
          <Form.Control
            type="text"
            placeholder="Digite o código da task"
            {...register("Titulo")}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </S.FormGroupStyled>
      </Form>
      <S.TaskInformationWrapper>
        {task ? <TaskInfos task={task} /> : <p>Nenhuma task selecionada</p>}
      </S.TaskInformationWrapper>
    </S.ContainerHome>
  );
};

export default Home;
