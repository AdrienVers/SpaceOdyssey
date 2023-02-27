import React from "react";
import styled from "@emotion/styled";
import Presentation from "../components/AllPages/Presentation";
import Geocentric from "../components/Satellites/Geocentric";
import Head from "next/head";

function Satellites() {

	return (
		<SatellitesGlobal>
			<Head>
				<title>
					{"Space Odyssey - Agence d'exploration spatiale | Système solaire"}
				</title>
				<meta
					name="Satellites"
					content="Space Odyssey est une agence d'exploration spatiale dédiée à l'exploration spatiale."
				/>
				<link rel="icon" href="/icon.png" />
			</Head>
			<Geocentric />
			<Presentation />
		</SatellitesGlobal>
	);
}

export default Satellites;

const SatellitesGlobal = styled.div``;
