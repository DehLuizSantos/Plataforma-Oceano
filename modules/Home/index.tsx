import React, { useState } from "react";
import * as S from "./styles";
import Form from "react-bootstrap/Form";
import { Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TaskProps, ComentsProps } from "./interface";
import TaskInfos from "./taskInfos";
import NextApi from "../../services/NextApi";
import { toast } from "react-toastify";
import Image from "next/image";

const nextApi = new NextApi();

const Home: React.FC = () => {
  const [task, setTask] = useState<TaskProps>();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      if (!data.Titulo) {
        toast.warn("Você precisa digitar o Titulo da task");
        setLoading(false);
        return;
      }
      const result = await nextApi.getTaskByTitle(data.Titulo);
      if (!result.data.length) {
        toast.error("Nenhuma task com esse Titulo");
        setTask(undefined);
        setLoading(false);
        return;
      }
      setTask(result.data[0]);
      toast.success("Task encontrada com sucesso!");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao buscar task");
      setTask(undefined);
    }
    setLoading(false);
  };

  return (
    <S.ContainerHome>
      <h1>Pesquise a task</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <S.FormGroupStyled controlId="Titulo">
          <Form.Control
            type="text"
            placeholder="Digite o titulo da task"
            {...register("Titulo")}
          />
          <Button variant="primary" type="submit">
            {loading ? "Carregando" : "Enviar"}
          </Button>
        </S.FormGroupStyled>
      </Form>
      <S.TaskInformationWrapper>
        {loading ? (
          <div className="image-loading">
            <Image
              width={30}
              height={30}
              src="/icons/loading-buffering.gif"
              alt="Carregando..."
            />
          </div>
        ) : task ? (
          <TaskInfos task={task} />
        ) : (
          <p>Nenhuma task filtrada</p>
        )}
      </S.TaskInformationWrapper>
    </S.ContainerHome>
  );
};

export default Home;
