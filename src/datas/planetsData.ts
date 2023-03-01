import Mercure from "../assets/Mercure.png";
import Venus from "../assets/Venus.png";
import Terre from "../assets/Terre.png";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturne from "../assets/Saturne.png";
import Uranus from "../assets/Uranus.png";
import Neptune from "../assets/Neptune.png";
import Image from "../assets/image.png";
import { StaticImageData } from "next/image";

interface PlanetsData {
	id: number;
	nameId: string;
	name: string;
	revolution: number;
	color: string;
	radius: number;
	orbit: number;
	originTop: number;
	originLeft: number;
	zIndex: number;
	image: StaticImageData;
}

export const PLANETS_DATA: PlanetsData[] = [
	{
		id: 1001,
		nameId: "mercure",
		name: "mercure",
		revolution: 10,
		color: "rgb(172, 99, 76)",
		radius: 1.5,
		orbit: 30,
		originTop: 50,
		originLeft: 0,
		zIndex: 2,
		image: Mercure,
	},
	{
		id: 1002,
		nameId: "venus",
		name: "venus",
		revolution: 20,
		color: "rgb(175, 83, 22)",
		radius: 3,
		orbit: 45,
		originTop: 50,
		originLeft: 0,
		zIndex: 3,
		image: Venus,
	},
	{
		id: 1003,
		nameId: "terre",
		name: "terre",
		revolution: 50,
		color: "rgb(61,106,175)",
		radius: 3.2,
		orbit: 60,
		originTop: 60,
		originLeft: 0,
		zIndex: 4,
		image: Terre,
	},
	{
		id: 1004,
		nameId: "mars",
		name: "mars",
		revolution: 90,
		color: "#d6904a",
		radius: 2.2,
		orbit: 80,
		originTop: 100,
		originLeft: 50,
		zIndex: 4,
		image: Mars,
	},
	{
		id: 1005,
		nameId: "jupiter",
		name: "jupiter",
		revolution: 100,
		color: "rgb(247, 214, 173)",
		radius: 10,
		orbit: 118,
		originTop: 99,
		originLeft: 60,
		zIndex: 5,
		image: Jupiter,
	},
	{
		id: 1006,
		nameId: "saturne",
		name: "saturne",
		revolution: 170,
		color: "rgb(149, 124, 99)",
		radius: 15,
		orbit: 150,
		originTop: 50,
		originLeft: 0,
		zIndex: 5,
		image: Saturne,
	},
	{
		id: 1007,
		nameId: "uranus",
		name: "uranus",
		revolution: 290,
		color: "lightblue",
		radius: 5,
		orbit: 175,
		originTop: 60,
		originLeft: 99,
		zIndex: 6,
		image: Uranus,
	},
	{
		id: 1008,
		nameId: "neptune",
		name: "neptune",
		revolution: 330,
		color: "lightblue",
		radius: 4.6,
		orbit: 200,
		originTop: 100,
		originLeft: 50,
		zIndex: 7,
		image: Neptune,
	},
	{
		id: 1009,
		nameId: "lune",
		name: "lune",
		revolution: 0,
		color: "white",
		radius: 0,
		orbit: 0,
		originTop: 0,
		originLeft: 0,
		zIndex: 2,
		image: Image,
	},
	{
		id: 1010,
		nameId: "iss",
		name: "iss",
		revolution: 0,
		color: "white",
		radius: 0,
		orbit: 0,
		originTop: 0,
		originLeft: 0,
		zIndex: 2,
		image: Image,
	},
	{
		id: 1011,
		nameId: "tess",
		name: "tess",
		revolution: 0,
		color: "white",
		radius: 0,
		orbit: 0,
		originTop: 0,
		originLeft: 0,
		zIndex: 2,
		image: Image,
	},
	{
		id: 1012,
		nameId: "jwst",
		name: "jwst",
		revolution: 0,
		color: "white",
		radius: 0,
		orbit: 0,
		originTop: 0,
		originLeft: 0,
		zIndex: 2,
		image: Image,
	},
];

/*
  Kepler à la Terre : 150 000 000 km
  James webb à la Terre : 1 500 000 km
  Lune à la Terre : 380 000 km
  ISS à la Terre : 400 km
*/
