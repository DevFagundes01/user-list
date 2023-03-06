import React, { useState, useRef } from "react";
import axios from "axios";

import people from './assets/people.svg'
import arrow from './assets/arrow.svg'
import trash from './assets/trash.svg'

import {
  Container,
  Image,
  Container2,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const data = await axios.post("http://localhost:3001/users", { 
      name: inputName.current.value, 
      age: inputAge.current.value, 
    });

    console.log(data)

    /*setUsers([
      ...users, {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ])*/
}
  
  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)
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

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={trash} alt="lata-de-lixo"></img>
              </button>
            </User>
          ))}
        </ul>
      </Container2>
    </Container>
  )
}

export default App