import React from "react";
import styled from "@emotion/styled";
import { useStore } from "../../store/useStore";
import { PLANETS_DATA } from "../../datas/planetsData";
import { keyframes } from "@emotion/react";
import Image from "next/image";
import Sun from "./Sun";

type AnimationProps = {
	openModal: boolean;
};

function Heliocentric() {
	const { setSelectedPlanet, openModal, setOpenModal } = useStore();

	return (
		<HeliocentricGlobal openModal={openModal}>
			<div className="visualization">
				<div className="space">
					<div className="galaxy">
						<div className="solar-system">
							{PLANETS_DATA.map((item) => (
								<div
									key={item.id}
									className="planet-orbit"
									style={{
										width: `${item.orbit}em`,
										height: `${item.orbit}em`,
										margin: `-${item.orbit / 2}em 0 0 -${item.orbit / 2}em`,
										animationDuration: `${item.revolution}s`,
										zIndex: `${item.zIndex}`,
									}}
								>
									<div
										className="origin"
										style={{
											top: `${item.originTop}%`,
											left: `${item.originLeft}%`,
											width: `${item.radius}%`,
											height: `${item.radius}%`,
											margin: `-${item.radius / 2}% 0 0 -${item.radius / 2}%`,
											animationDuration: `${item.revolution}s`,
										}}
										onClick={() => {
											setSelectedPlanet(item.name);
											setOpenModal(true);
										}}
									>
										<div
											className="planet"
											style={{
												fontSize: `${item.radius}em`,
											}}
										>
											<Image
												className="planet-image"
												src={item.image}
												alt={item.name}
											/>
										</div>
									</div>
								</div>
							))}
							<Sun />
						</div>
					</div>
				</div>
			</div>
		</HeliocentricGlobal>
	);
}

export default Heliocentric;

const orbit = keyframes`
0% {
	transform: rotateZ(0deg);
}

100% {
	transform: rotateZ(-360deg);
}
`;

const orbitCorrection = keyframes`
0% {
	transform: rotateX(-90deg) rotateY(360deg) rotateZ(0deg);
}

100% {
	transform: rotateX(-90deg) rotateY(0deg) rotateZ(0deg);
}
`;

const HeliocentricGlobal = styled.div<AnimationProps>`
	font-size: 0.58rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	z-index: 98;

	@media screen and (max-width: 1200px) {
		flex-direction: column;
	}

	.visualization {
		width: ${(props) => (props.openModal ? "70%" : "100%")};
		height: 100%;
		background-color: blue;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;

		@media screen and (max-width: 1200px) {
			width: 100%;
		}

		.space {
			z-index: 1;
			position: absolute;
			overflow: hidden;
			width: 100%;
			height: 100%;
			background-position: center 40%;
			background-repeat: no-repeat;
			background-size: cover;
			background-color: black;

			@media (max-width: 1700px) {
				font-size: 90%;
			}

			@media (max-width: 1500px) {
				font-size: 80%;
			}

			@media (max-width: 1400px) {
				font-size: 76%;
			}

			@media (max-width: 1300px) {
				font-size: 70%;
			}

			@media (max-width: 1200px) {
				font-size: 50%;
			}

			@media (max-width: 620px) {
				font-size: 40%;
			}

			@media (max-width: 510px) {
				font-size: 30%;
			}

			@media (max-width: 390px) {
				font-size: 24%;
			}

			@media (max-width: 330px) {
				font-size: 22%;
			}

			.galaxy {
				position: relative;
				width: 100%;
				height: 100%;

				.solar-system {
					position: absolute;
					width: 100%;
					height: 100%;
					font-size: 60%;
					transform: rotateX(72deg);
					transform-style: preserve-3d;

					.planet-orbit {
						position: absolute;
						top: 50%;
						left: 50%;
						border: 1px solid rgba(255, 255, 255, 0.2);
						border-radius: 50%;
						transform-style: preserve-3d;
						animation: ${orbit} linear infinite;
						box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
						pointer-events: none;

						.origin {
							position: relative;
							top: 50%;
							animation: ${orbitCorrection} infinite linear;
							border-radius: 50%;
							pointer-events: auto;

							&:hover {
								cursor: pointer;
							}

							.planet {
								position: absolute;
								top: 50%;
								left: 50%;
								width: 1em;
								height: 1em;
								margin-top: -0.5em;
								margin-left: -0.5em;
								border-radius: 50%;
								transform-style: preserve-3d;
								background-repeat: no-repeat;
								background-size: cover;
								transform: rotateX(0deg);

								.planet-image {
									position: absolute;
									top: 50%;
									left: 50%;
									width: 100%;
									height: 100%;
									margin-top: -0.5em;
									margin-left: -0.5em;
									border-radius: 50%;
									transform-style: preserve-3d;
									background-repeat: no-repeat;
									background-size: cover;
									transform: rotateX(0deg);
								}
							}
						}
					}

					.sun {
						position: absolute;
						top: 50%;
						left: 50%;
						width: 0.8em;
						height: 0.8em;
						margin-top: -0.4em;
						margin-left: -0.4em;
						border-radius: 50%;
						transform-style: preserve-3d;
						background-color: white;
						background-repeat: no-repeat;
						background-size: cover;
						box-shadow: 0 0 8px black, inset 0 0 8px #fff, 0 0 80px 8px yellow,
							inset 0 0 16px #f78913, 0 0 20px yellow, inset 0 0 50px gold;
						transform: rotateX(-90deg);
						font-size: 24em;

						.star {
							position: absolute;
							background-color: white;
							z-index: 0;
							transform-style: preserve-3d;
							box-shadow: 0 0 8px black, inset 0 0 8px #fff, 0 0 80px 20px white;
						}
					}
				}
			}
		}
	}
`;
