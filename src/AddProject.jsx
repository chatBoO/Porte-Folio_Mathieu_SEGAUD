import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AddProject = () => {
	const [projects, setProjects] = useState([]);

	const [mail, setMail] = useState();
	const [password, setPassword] = useState();

	let projectsTitlesArray = [];

	// const signup = () => {
	// 	const auth = getAuth();
	// 	createUserWithEmailAndPassword(auth, mail, password)
	// 		.then((userCredential) => {
	// 			// Signed in
	// 			const user = userCredential.user;
	// 			alert("Utilisateur crée !");
	// 		})
	// 		.catch((error) => {
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			// ..
	// 		});
	// }

	const login = () => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, mail, password)
			.then((userCredential) => {
				const user = userCredential.user;
				alert("Vous êtes bien connecté !");
				setMail("");
				setPassword("");
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};

	// const logout = () => {
	// 	const auth = getAuth();
	// 	signOut(auth)
	// 		.then(() => {
	// 			alert("Vous avez bien été déconnecté !");
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };

	const projectsTitles = () => {
		for (const project of projects) {
			projectsTitlesArray.push(project.title.split("-")[0]);
		}
	};
	projectsTitles();

	const addNewProject = async (e) => {
		e.preventDefault();

		try {
			const docRef = await addDoc(collection(db, "projets"), {
				id: 7,
				title: "",
				text: "",
				cover: "",
				pictures: [""],
				languages: [
					{
						nom: "",
						logo: "",
					},
				],
				site: "",
				code: "",
			});

			console.log("Nouveau document créé avec l'id: ", docRef.id);
		} catch (e) {
			console.error("Erreur dans la création du nouveau document: ", e);
		}
	};

	const fetchAllProjects = async () => {
		await getDocs(collection(db, "projets")).then((querySnapshot) => {
			const newData = querySnapshot.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			setProjects(newData);
		});
	};

	useEffect(() => {
		fetchAllProjects();
	}, []);

	return (
		<section>
			<div className="login">
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
				<button type="submit" onClick={login}>
					Valider
				</button>

				{/* <button type="submit" onClick={signup}>
					S'inscrire
				</button> */}

				{/* <button type="submit" onClick={logout}>
					Se déconnecter
				</button> */}
			</div>
			<div className="projectsList-container">
				<article className="projectsList">
					<h2>Liste des projets existants</h2>
					{projectsTitlesArray.sort().map((projet, i) => (
						<h3 key={i}>{projet}</h3>
					))}
				</article>
				<button type="submit" onClick={addNewProject}>
					Ajouter un projet
				</button>
			</div>
		</section>
	);
};

export default AddProject;
