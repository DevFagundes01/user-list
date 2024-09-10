import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import people from '../../assets/people.svg'
import arrow from '../../assets/arrow.svg'

import Title from "../../components/Title";
import Button from "../../components/Button";

import {
  Container,
  Image,
  Form,
  InputLabel,
  Input,
  ContainerInput,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();
  const baseUrl = "https://code-club-first-project-node.vercel.app"

  async function addNewUser() {
    const { data } = await axios.post(`${baseUrl}/users`, {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers(...users, data)
    navigate("/usuarios")
  }

  return (
    <Container>
      <Image alt="logo-img" src={people}></Image>
      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInput>
          <div>
            <InputLabel>Nome</InputLabel>
            <Input type='text' ref={inputName}></Input>
          </div>

          <div>
            <InputLabel>Idade</InputLabel>
            <Input type='number' ref={inputAge}></Input>
          </div>
        </ContainerInput>
        <div style={{width: '100%'}}>
          <InputLabel>Email</InputLabel>
          <Input type='email' ref={inputAge}></Input>
        </div>

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={arrow} /></Button>
      </Form>
    </Container>
  )
}

export default App
