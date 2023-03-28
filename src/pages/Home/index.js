import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import people from '../../assets/people.svg'
import arrow from '../../assets/arrow.svg'

import  H1  from "../../components/Title";
import Container2 from "../../components/Container2";
import Button from "../../components/Button";

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()
  const inputName = useRef();
  const inputAge = useRef();
  const baseUrl = "https://code-club-first-project-node.vercel.app"

  async function addNewUser() {
    const {data} = await axios.post(`${baseUrl}/users`, { 
      name: inputName.current.value, 
      age: inputAge.current.value, 
    });

    setUsers(...users, data)
    
    navigate("/usuarios")
  }

  return (
    <Container>
      <Image alt="logo-img" src={people}></Image>
      <Container2>
        <H1>Olá</H1>

        <InputLabel>Nomee</InputLabel>
        <Input ref={inputName} placeholder="Nomee"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>Cadastrar <img alt='seta' src={arrow} /></Button>

      </Container2>
    </Container>
  )
}

export default App