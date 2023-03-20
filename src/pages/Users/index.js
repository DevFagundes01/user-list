import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import avatar from '../../assets/avatar.svg'
import trash from '../../assets/trash.svg'
import arrow from '../../assets/arrow.svg'

import H1 from '../../components/Title'
import Container2 from "../../components/Container2";
import Button from "../../components/Button";

import {
  Container,
  Image,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function fetcUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetcUsers()
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId)

    setUsers(newUsers)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt="logo-img" src={avatar}></Image>

      <Container2 isBlur={true}>
        <H1>Usuarios</H1>

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
        <Button isTransparent={true} onClick={goBackPage}>
          <img alt='seta' src={arrow} />Voltar
        </Button>

      </Container2>
    </Container>
  )
}

export default Users