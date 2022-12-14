import React, { useState } from "react";
import * as S from "./styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { Col, Row } from "react-bootstrap";
import NextApi from "../../services/NextApi";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";

const nextApi = new NextApi();

const RegisterTask = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      const body = {
        ...data,
      };
      if (!data.Titulo) {
        toast.warn("O Titulo da task é obrigatório");
        setLoading(false);
        return;
      }
      const result = await nextApi.postTask(body);
      if (!result.error) {
        toast.success("Task cadastrada com sucesso!");
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao cadastrar task");
      setLoading(false);
    }
  };
  return (
    <S.ContainerRegister>
      <S.RegisterWrapper>
        <h1>Cadastre sua task</h1>
        {loading ? (
          <div className="image-loading">
            <Image
              width={30}
              height={30}
              src="/icons/loading-buffering.gif"
              alt="Carregando..."
            />
          </div>
        ) : (
          <Form onSubmit={handleSubmit(onSubmit)} className="form-register">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col sm={12}>
                  <Form.Label>Titulo da Task</Form.Label>
                  <Form.Control
                    {...register("Titulo")}
                    type="input"
                    placeholder="Titulo da Task"
                  />
                </Col>
              </Row>
              <Row>
                <Col xm={12}>
                  <Form.Label>Filial da Task</Form.Label>
                  <Form.Control
                    {...register("Filial")}
                    type="input"
                    placeholder="Filial da Task"
                  />
                </Col>
                <Col xm={12}>
                  <Form.Label>Consultor</Form.Label>
                  <Form.Control
                    {...register("Consultor")}
                    type="input"
                    placeholder="Consultor da Task"
                  />
                </Col>
              </Row>
              <Row>
                <Col xm={6}>
                  <Form.Label>Squad</Form.Label>
                  <Form.Control
                    {...register("Squad")}
                    type="input"
                    placeholder="Squad da Task"
                  />
                </Col>
                <Col xm={6}>
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    {...register("Status")}
                    type="input"
                    placeholder="Status da Task"
                  />
                </Col>
                <Col sm={12} md={5} lg={5}>
                  <Form.Label>Custos</Form.Label>
                  <Form.Control
                    {...register("Custos")}
                    type="input"
                    placeholder="Custos da Task"
                  />
                </Col>
              </Row>
              <Row>
                <Col xm={6}>
                  <Form.Label>Demanda</Form.Label>
                  <Form.Control
                    {...register("NumDemanda")}
                    type="input"
                    placeholder="Número da demanda"
                  />
                </Col>
                <Col xm={6}>
                  <Form.Label>Estimativa</Form.Label>
                  <Form.Control
                    {...register("Estimativa")}
                    type="input"
                    placeholder="Estimativa da Task"
                  />
                </Col>
                <Col sm={12} md={4}>
                  <Form.Label>Previsao</Form.Label>
                  <Form.Control
                    {...register("Previsao")}
                    type="input"
                    placeholder="Previsao da Task"
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={4}>
                  <Form.Label>Data de Início</Form.Label>
                  <Form.Control
                    {...register("DataInicio")}
                    type="input"
                    placeholder="Data de Início"
                  />
                </Col>
                <Col sm={12} md={4}>
                  <Form.Label>Tempo Consumido</Form.Label>
                  <Form.Control
                    {...register("TempoConsumido")}
                    type="input"
                    placeholder="Tempo Consumido"
                  />
                </Col>
                <Col sm={12} md={4}>
                  <Form.Label>Tempo Restante</Form.Label>
                  <Form.Control
                    {...register("TempoRestante")}
                    type="input"
                    placeholder="Tempo Restante"
                  />
                </Col>
              </Row>
            </Form.Group>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <div
                style={{
                  margin: "10px",
                  textAlign: "start",
                }}
              >
                <Button
                  size="lg"
                  variant="outline-primary"
                  type="button"
                  onClick={() => router.push({ pathname: "/" })}
                >
                  Voltar
                </Button>
              </div>
              <div
                style={{
                  margin: "10px",
                  textAlign: "end",
                }}
              >
                <Button size="lg" variant="primary" type="submit">
                  Enviar
                </Button>
              </div>
            </div>
          </Form>
        )}
      </S.RegisterWrapper>
    </S.ContainerRegister>
  );
};

export default RegisterTask;
