import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AddProject = () => {
	const auth = getAuth();

	const [projects, setProjects] = useState([]);

	const [mail, setMail] = useState();
	const [password, setPassword] = useState();
	const [connected, setConnected] = useState(auth.currentUser);

	const [id, setId] = useState();
	const [title, setTitle] = useState();
	const [text, setText] = useState();
	const [cover, setCover] = useState();
	const [pictures, setPictures] = useState();
	const [languages, setLanguages] = useState();
	const [site, setSite] = useState();
	const [code, setCode] = useState();

	// ----------------------------LOGIN--------------------------------------

	const login = (e) => {
		e.preventDefault();
		const auth = getAuth();
		signInWithEmailAndPassword(auth, mail, password)
			.then((userCredential) => {
				const user = userCredential.user;
				setConnected(user);
				alert(`Vous êtes bien connecté ${user.displayName} !`);
				setMail("");
				setPassword("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode + " : " + errorMessage);
			});
	};

	// const setToLocalStorage = (user) =>
	// 	localStorage.setItem("firestore", JSON.stringify(user));

	// const getFromLocalStorage = () => {
	// 	const userConnected = localStorage.getItem("firestore");
	// 	  if (userConnected == null) {
	// 			return null;
	// 		} else {
	// 			return JSON.parse(userConnected);
	// 		}
	// };

	//--------------------------LOGOUT-------------------------------------

	const logout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				alert("Vous avez bien été déconnecté !");
			})
			.then(() => setConnected(auth.currentUser))
			.catch((error) => {
				console.log(error);
			});
	};

	//--------------------------GET ALL PROJECTS-------------------------------------

	const fetchAllProjects = async () => {
		await getDocs(collection(db, "projets")).then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				// id: doc.id,
			}));
			setProjects(newData);
		});
	};

	//--------------------------ADD NEW PROJECT-------------------------------------

	const addNewProject = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "projets"), {
				id: id,
				title: title,
				text: text,
				cover: cover,
				pictures: pictures.split("\n"),
				languages: [
					{
						nom: "test",
						logo: "tes.fr",
					},
				],
				site: site,
				code: code,
			});

			console.log("Nouveau document créé avec l'id: ", docRef.id);
		} catch (e) {
			console.error("Erreur dans la création du nouveau document: ", e);
		}
	};

	//-----------------------------useEffect---------------------------------------

	useEffect(() => {
		fetchAllProjects();
	}, []);

	useEffect(() => {
		setConnected(auth.currentUser);
	}, []);

	//---------------------------------------------------------------------------------

	return (
		<section className="addProject">
			<div className="addProject__login">
				<h2>Se connecter</h2>
				{connected === null ? (
					<form onSubmit={login}>
						<input
							type="text"
							name="mail"
							id="mail"
							placeholder="mail"
							value={mail}
							onChange={(e) => setMail(e.target.value)}
						/>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<button type="submit">Se connecter</button>
					</form>
				) : (
					<div>
						<p>Bonjour {connected.displayName}</p>
						<button onClick={logout}>Se déconnecter</button>
					</div>
				)}
			</div>

			<div className="projectsList-container">
				<article className="projectsList">
					<h2>Liste des projets existants</h2>
					{projects.map((projet, i) => (
						<h3 key={i}>{projet.title.split("-")[0]}</h3>
					))}
				</article>

				<h2 className="newProject">Ajouter un nouveau projet</h2>

				<form onSubmit={addNewProject}>
					<label htmlFor="id">id</label>
					<input
						type="text"
						value={id}
						name="id"
						id="id"
						onChange={(e) => setId(e.target.value)}
					/>

					<label htmlFor="title">title</label>
					<input
						type="text"
						value={title}
						name="title"
						id="title"
						onChange={(e) => setTitle(e.target.value)}
					/>

					<label htmlFor="text">text</label>
					<textarea
						value={text}
						name="text"
						id="text"
						onChange={(e) => setText(e.target.value)}
					></textarea>

					<label htmlFor="cover">cover</label>
					<input
						type="text"
						value={cover}
						name="cover"
						id="cover"
						onChange={(e) => setCover(e.target.value)}
					/>

					<label htmlFor="pictures">
						pictures (un lien par ligne)
					</label>
					<textarea
						value={pictures}
						name="pictures"
						id="pictures"
						onChange={(e) => setPictures(e.target.value)}
					></textarea>

					<label htmlFor="languages">languages</label>
					<input
						type="text"
						value={languages}
						name="languages"
						id="languages"
						onChange={(e) => setLanguages(e.target.value)}
					/>

					<label htmlFor="site">site</label>
					<input
						type="text"
						value={site}
						name="site"
						id="site"
						onChange={(e) => setSite(e.target.value)}
					/>

					<label htmlFor="code">code</label>
					<input
						type="text"
						value={code}
						name="code"
						id="code"
						onChange={(e) => setCode(e.target.value)}
					/>

					<button type="submit">Ajouter un projet</button>
				</form>
			</div>
		</section>
	);
};

export default AddProject;
