import React, { useState, useEffect, useRef, useMemo } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";
import { PLANETS_DATA } from "../../datas/planetsData";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import Image from "next/image";

function Sphere(props) {
	const { imageURL } = useStore();

	const colorMap = useTexture(imageURL);
	const ref = useRef();
	useFrame((state) => {
		ref.current.rotation.y = state.clock.getElapsedTime() / 8;
	});
	return (
		<mesh ref={ref} {...props}>
			<sphereGeometry args={[1.1, 35, 35]} />
			<meshStandardMaterial map={colorMap} />
		</mesh>
	);
}

function SphereWithRings(props) {
	const { imageURL } = useStore();
	const colorMap = useTexture(imageURL);
	const colorRings = useTexture("./Rings.png");
	const ref = useRef();

	useFrame((state) => {
		ref.current.rotation.y = state.clock.getElapsedTime() / 8;
	});

	return (
		<group {...props}>
			<mesh position={[0, 0, 0]} ref={ref}>
				<sphereGeometry args={[1.1, 35, 35]} />
				<meshStandardMaterial map={colorMap} />
			</mesh>
			<mesh scale={0.5} position={[0, 0.05, 0.8]} rotation={[1.7, 0.1, 0]}>
				<torusGeometry args={[1.8, 0.1, 12, 50]} />
				<meshStandardMaterial map={colorRings} />
			</mesh>
		</group>
	);
}

function Presentation() {
	const {
		selectedPlanet,
		openModal,
		setOpenModal,
		nameId,
		setNameId,
		name,
		setName,
		type,
		setType,
		flight,
		setFlight,
		distance,
		setDistance,
		imageURL,
		setImageURL,
		gravity,
		setGravity,
		revolution,
		setRevolution,
		diameter,
		setDiameter,
		description,
		setDescription,
	} = useStore();

	const [isError, setIsError] = useState(true);

	useEffect(() => {
		fetch(`https://space-odyssey-api.vercel.app/bodies/${selectedPlanet}`)
			.then((response) => response.json())
			.then((data) => {
				setNameId(data.id);
				setName(data.name);
				setImageURL(data.map);
				setType(data.type);
				setFlight(data.flight);
				setDistance(data.distance);
				setGravity(data.gravity);
				setRevolution(Math.round(data.sideralOrbit));
				setDiameter(Math.round(data.meanRadius * 2));
				setDescription(data.description);
				setIsError(false);
			})
			.catch((error) => {
				console.error(error);
				setIsError(true);
			});
	}, [selectedPlanet]);

	const planetaryData = PLANETS_DATA.filter((item) => item.name === nameId);

	if (isError) {
		return (
			<PresentationGlobal openModal={openModal}>
				<div
					className="presentation"
					style={{ color: "white", padding: "0 25px" }}
				>
					Les données sont en cours de chargement..
				</div>
			</PresentationGlobal>
		);
	}

	return (
		<PresentationGlobal openModal={openModal}>
			{!(
				selectedPlanet === "iss" ||
				selectedPlanet === "tess" ||
				selectedPlanet === "jwst"
			)
				? planetaryData.map((item) => {
						return (
							<div className="presentation" key={item.id}>
								<i
									style={{ color: "white" }}
									className="fa-regular fa-rectangle-xmark"
									onClick={() => setOpenModal(false)}
								/>
								<div className="title">
									{name ? (
										<h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
									) : (
										<h1>Chargement...</h1>
									)}
									<div className="title-image">
										{selectedPlanet !== "saturne" ? (
											<Canvas className="canvas">
												<ambientLight intensity={0.8} />
												<Sphere position={[0, 0, 3]} />
											</Canvas>
										) : (
											<Canvas className="canvas">
												<ambientLight intensity={0.8} />
												<SphereWithRings position={[0, 0, 3]} />
											</Canvas>
										)}
									</div>
								</div>
								<br />
								<div className="information">
									<h2>Type :</h2>
									<span>{type}</span>
								</div>
								<div className="information">
									<h2 title="Temps qu'il faudrait mettre pour aller jusqu'à la planète.">
										Trajet : <span>{flight}</span>
									</h2>
								</div>
								<div className="information">
									{revolution ? (
										<h2>
											Révolution :{" "}
											<span>
												{revolution.toLocaleString("fr-FR", {
													useGrouping: true,
												})}{" "}
												jours
											</span>
										</h2>
									) : (
										<span>Chargement...</span>
									)}
								</div>
								<div className="information">
									{gravity ? (
										<h2>
											Gravité : <span>{gravity} m/s²</span>
										</h2>
									) : (
										<span>Chargement...</span>
									)}
								</div>
								<div className="information">
									{diameter ? (
										<h2>
											Diamètre :{" "}
											<span>
												{diameter.toLocaleString("fr-FR", {
													useGrouping: true,
												})}{" "}
												km
											</span>
										</h2>
									) : (
										<span>Chargement..</span>
									)}
								</div>
							</div>
						);
				  })
				: planetaryData.map((item) => {
						return (
							<div className="presentation" key={item.id}>
								<i
									style={{ color: "white" }}
									className="fa-regular fa-rectangle-xmark"
									onClick={() => setOpenModal(false)}
								/>
								<div className="title">
									{name ? (
										<h1>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
									) : (
										<h1>Chargement...</h1>
									)}
									<div className="title-image">
										<Image
											className="image"
											src={imageURL}
											alt={selectedPlanet}
											width={100}
											height={100}
										/>
									</div>
								</div>
								<br />
								<div className="information">
									{type ? (
										<h2>
											Type : <span>{type}</span>
										</h2>
									) : (
										<span>Chargement..</span>
									)}
								</div>
								<div className="information">
									{distance ? (
										<h2 title="Distance entre le satellite et la Terre.">
											Distance : <span>{distance}</span>
										</h2>
									) : (
										<span>Chargement..</span>
									)}
								</div>
								<div className="information">
									{description ? (
										<h2 id="description">
											Description : <span>{description}</span>
										</h2>
									) : (
										<span>Chargement..</span>
									)}
								</div>
							</div>
						);
				  })}
		</PresentationGlobal>
	);
}

export default Presentation;

const PresentationGlobal = styled.div`
	.presentation {
		width: 30%;
		height: 100%;
		background-color: rgb(25, 25, 25);
		display: ${(props) => (props.openModal ? "flex" : "none")};
		position: absolute;
		left: 70%;
		font-size: 1.4rem;
		flex-direction: column;
		border-left: 1px solid white;
		text-align: center;
		align-items: center;
		justify-content: center;
		z-index: 1;

		@media (max-width: 1200px) {
			width: 100%;
			display: ${(props) => (props.openModal ? "block" : "none")};
			height: 100vh;
			left: 0;
			top: 0;
			flex-direction: row;
			align-items: center;
			justify-content: space-evenly;
			border-left: 0px solid white;
		}

		@media (max-width: 750px) {
			flex-direction: column;
		}

		i {
			position: absolute;
			top: 90px;
			right: 20px;

			&:hover {
				cursor: pointer;
			}
		}

		.title {
			@media (max-width: 1200px) {
				margin-top: 130px;
			}

			h1 {
				color: white;
				letter-spacing: 2.8px;

				@media (max-width: 1400px) {
					font-size: 2.2rem;
				}

				@media (max-width: 830px) {
					font-size: 1.75rem;
				}
			}

			.title-image {
				max-width: 300px;

				@media (max-width: 1200px) {
					max-width: 100%;
				}

				.canvas {
				}

				.image {
					width: 200px;
					height: auto;
				}
			}
		}

		.information {
			letter-spacing: 1.5px;
			padding: 0 2px;
			display: flex;
			align-items: center;

			@media (max-width: 1200px) {
				justify-content: center;
			}

			h2 {
				color: rgb(205, 151, 89);
				margin: 0.7rem 0;
				font-size: 1.5rem;
				padding: 0 0.5rem;
				font-weight: 400;

				@media (max-width: 1400px) {
					font-size: 1.4rem;
				}

				@media (max-width: 1300px) {
					font-size: 1.2rem;
				}
			}

			span {
				color: white;
				font-size: 1.5rem;

				@media (max-width: 1400px) {
					font-size: 1.2rem;
				}

				@media (max-width: 830px) {
					font-size: 1rem;
				}
			}
		}

		#description {
			@media (max-width: 1400px) {
				width: 300px;
			}

			h2 {
				padding: 0 25px;
			}
		}
	}
`;
