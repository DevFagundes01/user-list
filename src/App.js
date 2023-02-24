import React from "react";

import {
  Container,
  Image, 
  Container2,
  H1,
  InputLabel,
  Input,
  Button
} from "./styles";

const App=() => {

  return (
    <Container>
      <Image></Image>
      <Container2>
      <H1>Olá</H1>

      <InputLabel>Nome</InputLabel>
      <Input placeholder="Nome"></Input>

      <InputLabel>Idade</InputLabel>
      <Input placeholder="Idade"></Input>

      <Button>Cadastrar</Button>
      </Container2>
    </Container>
  )
}

export default App