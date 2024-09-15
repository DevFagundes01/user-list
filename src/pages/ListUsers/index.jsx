import { useEffect, useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import Button from "../../components/Button";
import Title from "../../components/Title";
import TopBackground from "../../components/TopBackground";
import api from "../../services/api";
import {
	AvatarUser,
	CardUsers,
	Container,
	DivUpdate,
	Icon,
	SimpleUserBar,
} from "./styles";

import { useNavigate } from "react-router-dom";
import Edit from "../../assets/edit-svg-icon-25.jpg";
import Trash from "../../assets/trash.svg";

function ListUsers() {
	const [users, setUsers] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function getUsers() {
			const { data } = await api.get("/users");
			setUsers(data);
		}

		getUsers();
	}, []);

	async function deleteUser(id) {
		await api.delete(`/users/${id}`);

		const updatedUsers = users.filter((user) => user.id !== id);
		setUsers(updatedUsers);
	}

	const divUpdateInput = document.querySelector("#update-div");
	const input = document.querySelector("#update-input");
	let inputValue = null;
	let key = null;
	function changeEmail(id) {
		const user = users.find((user) => user.id === id);
		input.value = user.email;

		divUpdateInput.style.display = "block";
		key = id;
	}

	async function updateEmail() {
		inputValue = input.value;

		if (!inputValue) return console.log("O e-mail não pode estar vazio");

		try {
			const updatedUser = await api.put(`/users/${key}`, {
				email: inputValue,
			});

			const updatedUsers = users.map((user) =>
				user.id === key ? { ...user, email: inputValue } : user,
			);
			setUsers(updatedUsers);

			divUpdateInput.style.display = "none";
			alert("Usuário atualizado com sucesso", updatedUser);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<Container>
			<TopBackground />

			<Title>Listagem de Usuários</Title>

			<SimpleUserBar>
				{users.map((user) => (
					<CardUsers key={user.id}>
						<AvatarUser
							src={`https://avatar.iran.liara.run/public/boy?username=${user.id}`}
						/>
						<div>
							<h3>{user.name}</h3>
							<p>{user.age}</p>
							<p>{user.email}</p>
						</div>
						<div style={{ display: "flex" }}>
							<Icon
								src={Edit}
								alt="icone-lapis"
								onClick={() => changeEmail(user.id)}
							/>
							<Icon
								src={Trash}
								alt="icone-lixo"
								onClick={() => deleteUser(user.id)}
							/>
						</div>
					</CardUsers>
				))}
			</SimpleUserBar>
			<DivUpdate id="update-div">
				<input type="email" placeholder="Novo e-mail" id="update-input" />
				<Button type="button" onClick={updateEmail} theme="primary">
					Atualizar
				</Button>
			</DivUpdate>

			<Button onClick={() => navigate("/")}>Voltar</Button>
		</Container>
	);
}

export default ListUsers;
