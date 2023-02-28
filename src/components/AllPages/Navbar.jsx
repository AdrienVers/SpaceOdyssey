import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import { PLANETS_DATA } from "../../datas/planetsData";
import { useStore } from "../../store/useStore";
import Link from "next/link";

function Navbar() {
	const [planets, setPlanets] = useState([]);
	const [showFire, setShowFire] = useState(false);
	const [correctPlanet, setCorrectPlanet] = useState(false);

	const { setSelectedPlanet, setOpenModal } = useStore();

	const searchInputRef = useRef(null);

	const handleInputChange = (event) => {
		const searchValue = event.target.value.toLowerCase();

		const filteredWithFirstLetters = PLANETS_DATA.filter((item) => {
			return item.name.toLowerCase().startsWith(searchValue);
		});

		const exactMatch = PLANETS_DATA.find(
			(planet) => planet.name.toLowerCase() === searchValue,
		);

		if (searchValue === "") {
			setPlanets([]);
			setShowFire(false);
		} else if (filteredWithFirstLetters) {
			setPlanets(filteredWithFirstLetters);
			setShowFire(
				filteredWithFirstLetters.some(
					(planet) => planet.name.toLowerCase() === searchValue,
				),
			);
		} else {
			setPlanets([]);
			setShowFire(false);
		}

		if (exactMatch) {
			setCorrectPlanet(true);
			setPlanets([]);
			setOpenModal(true);
			setSelectedPlanet(exactMatch.name);
		} else {
			setCorrectPlanet(false);
		}
	};

	const handleSelectedPlanet = (planetName) => {
		setPlanets([]);
		setSelectedPlanet(planetName);
		searchInputRef.current.value = planetName;
		setOpenModal(true);
		setShowFire(true);
		setCorrectPlanet(true);
	};

	return (
		<NavbarGlobal>
			<div className="left">
				<span>Space Odyssey</span>
				<Image className="logo" src={Logo} alt="Logo" />
			</div>
			<div className="center">
				<input
					ref={searchInputRef}
					type="text"
					placeholder="Rechercher"
					onChange={handleInputChange}
					style={{
						fontWeight: correctPlanet ? "600" : "400",
						textTransform: "capitalize",
					}}
				/>
				<i id="rocket" className="fa-solid fa-rocket" />
				{showFire ? <i id="fire" className="fa-solid fa-fire" /> : null}
				<div className="search-options">
					{planets.map((item) => (
						<p key={item.id} onClick={() => handleSelectedPlanet(item.nameId)}>
							{item.name.charAt(0).toUpperCase() + item.name.slice(1)}
						</p>
					))}
				</div>
			</div>
			<div className="right">
				<LinkItem href="/">
					<span>Système solaire</span>
				</LinkItem>
				<LinkItem href="/satellites">
					<span>Satellites</span>
				</LinkItem>
				<LinkItem
					href="https://github.com/AdrienVers"
					target="_blank"
					title="https://github.com/AdrienVers"
				>
					<span>Contact</span>
				</LinkItem>
			</div>
			<div className="hamburger-menu">
				<i className="fa-solid fa-bars" />
			</div>
		</NavbarGlobal>
	);
}

export default Navbar;

const NavbarGlobal = styled.div`
	background-color: white;
	color: black;
	height: 65px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 1.4rem;
	position: fixed;
	z-index: 100;

	.left {
		width: 20%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		@media (max-width: 1250px) {
			width: 35%;
		}

		@media (max-width: 900px) {
			width: 40%;
		}

		@media (max-width: 600px) {
			width: 35%;
			padding: 0 10px;
		}

		.logo {
			display: none;
			width: 100%;
			max-height: 50px;

			padding: 0px 5px 0px 10px;

			@media (max-width: 530px) {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			@media (max-width: 400px) {
				max-height: 50px;
			}

			@media (max-width: 350px) {
				max-height: 40px;
			}
		}

		span {
			padding-bottom: 5px;

			@media (max-width: 1250px) {
				font-size: 1.35rem;
			}

			@media (max-width: 900px) {
				font-size: 1.2rem;
				text-align: center;
				line-height: 1.2;
			}

			@media (max-width: 530px) {
				display: none;
			}

			&:hover {
				cursor: pointer;
			}
		}
	}

	.center {
		width: 35%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		flex-direction: column;

		@media (max-width: 1250px) {
			width: 35%;
		}

		@media (max-width: 900px) {
			width: 30%;
		}

		@media (max-width: 600px) {
			width: 45%;
		}

		input {
			width: 100%;
			height: 38px;
			border-radius: 5px;
			border: none;
			box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
			padding: 0 10px;
			font-size: 1.15rem;

			@media (max-width: 600px) {
				font-size: 1rem;
			}
		}

		#rocket {
			position: absolute;
			right: 15px;
			color: rgb(80, 80, 80);
			transform: rotate(45deg);
			z-index: 12;

			@media (max-width: 600px) {
				font-size: 1.2rem;
			}

			&:hover {
				color: rgb(205, 151, 89);
				cursor: pointer;
			}
		}

		#fire {
			position: absolute;
			right: 29px;
			color: rgb(205, 151, 89);
			transform: rotate(270deg);
			font-size: 0.88rem;
			z-index: 9;

			@media (max-width: 600px) {
				font-size: 0.88rem;
				right: 26px;
			}
		}

		.search-options {
			position: absolute;
			top: 52px;
			width: 100%;
			left: 0;
			box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.2);
			background-color: white;

			p {
				padding: 0px 10px;
				margin: 5px 0;
				font-size: 1.2rem;

				@media (max-width: 600px) {
					font-size: 1rem;
				}

				&:hover {
					cursor: pointer;
					color: rgb(205, 151, 89);
				}
			}
		}
	}

	.right {
		width: 45%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		@media (max-width: 1300px) {
			display: none;
		}

		@media (max-width: 600px) {
			display: none;
		}

		span {
			&:hover {
				color: rgb(205, 151, 89);
				cursor: pointer;
			}
		}
	}

	.hamburger-menu {
		display: none;

		@media (max-width: 1300px) {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 20%;
		}

		@media (max-width: 1250px) {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30%;
		}

		@media (max-width: 900px) {
			width: 30%;
		}

		@media (max-width: 600px) {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 20%;
			font-size: 1.3rem;
		}
	}
`;

const LinkItem = styled(Link)`
	padding-bottom: 5px;
`;
