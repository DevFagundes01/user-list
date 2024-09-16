import { useRef } from "react";
import api from "../../services/api";

import { Container, ContainerInputs, Form, Input, InputLabel } from "./styles";

import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Title from "../../components/Title";
import TopBackground from "../../components/TopBackground";

function Home() {
	const inputName = useRef();
	const inputAge = useRef();
	const inputEmail = useRef();

	const navigate = useNavigate();

	async function registerNewUser() {
		return await api.post("/users", {
			email: inputEmail.current.value,
			name: inputName.current.value,
			age: Number.parseInt(inputAge.current.value),
		});
	}

	async function registerUserAndClearInputs() {
		try {
			await registerNewUser();

			inputEmail.current.value = "";
			inputName.current.value = "";
			inputAge.current.value = "";

			alert("Usuário registrado com sucesso");
		} catch (error) {
			if (error.code === "ERR_BAD_REQUEST") {
				return alert(
					"Este e-mail já está em uso. Por favor, use um e-mail diferente.",
				);
			}

			alert("Error ao registrar novo usuário");
			console.error("Error:", error);
		}
	}

	return (
		<Container>
			<TopBackground />

			<Form>
				<Title>Cadastrar Usuário</Title>

				<ContainerInputs>
					<div>
						<InputLabel>Nome</InputLabel>
						<Input type="text" placeholder="Nome do usuário" ref={inputName} />
					</div>
					<div>
						<InputLabel>Idade</InputLabel>
						<Input
							type="number"
							placeholder="Idade do usuário"
							ref={inputAge}
						/>
					</div>
				</ContainerInputs>
				<div style={{ width: "100%" }}>
					<InputLabel>E-mail</InputLabel>
					<Input
						type="email"
						placeholder="E-mail do usuário"
						ref={inputEmail}
					/>
				</div>
				<Button
					type="button"
					onClick={registerUserAndClearInputs}
					theme="primary"
				>
					Cadastrar
				</Button>
			</Form>

			<Button type="button" onClick={() => navigate("/lista-de-usuarios")}>
				Ver Lista de Usuários
			</Button>
		</Container>
	);
}

export default Home;
