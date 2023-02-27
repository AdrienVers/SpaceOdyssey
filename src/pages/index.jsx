import React from "react";
import styled from "@emotion/styled";
import Presentation from "../components/AllPages/Presentation";
import Heliocentric from "../components/SolarSystem/Heliocentric";
import Head from "next/head";

function Home() {
	return (
		<HomeGlobal>
			<Head>
				<title>
					{"Space Odyssey - Agence d'exploration spatiale | Système solaire"}
				</title>
				<meta
					name="Accueil"
					content="Space Odyssey est une agence d'exploration spatiale dédiée à l'exploration spatiale."
				/>
				<link rel="icon" href="/icon.png" />
			</Head>
			<Heliocentric />
			<Presentation />
		</HomeGlobal>
	);
}

export default Home;

const HomeGlobal = styled.div``;
