import React, { useRef, useMemo } from "react";
import styled from "@emotion/styled";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, useTexture } from "@react-three/drei";
import { EllipseCurve } from "three";
import { useStore } from "../../store/useStore";

const handlePointerOver = () => {
	document.body.style.cursor = "pointer";
};

const handlePointerOut = () => {
	document.body.style.cursor = "default";
};

function Terre({ ...props }) {
	const { setSelectedPlanet, setOpenModal } = useStore();
	const textureMap = useTexture("terre-plan.png");
	const ref = useRef();

	useFrame((state) => {
		ref.current.rotation.y = state.clock.getElapsedTime() / 4;
	});

	return (
		<group {...props}>
			<mesh
				ref={ref}
				onClick={() => {
					setSelectedPlanet("terre");
					setOpenModal(true);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<sphereGeometry args={[props.radius]} />
				<meshStandardMaterial map={textureMap} />
			</mesh>
		</group>
	);
}

function ISS({ ...props }) {
	const { setSelectedPlanet, setOpenModal } = useStore();
	const textureMap = useTexture("https://i.imgur.com/ZPTOKbA.png");
	const ref = useRef();
	const curve = useMemo(
		() => new EllipseCurve(0, 0, 2.55, 0.98, 0, 2 * Math.PI, false, 0),
		[],
	);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * props.speed;
		const point = curve.getPoint(t);
		ref.current.position.set(point.x, point.y, 0);
	});
	return (
		<group {...props}>
			<mesh
				ref={ref}
				onClick={() => {
					setSelectedPlanet("iss");
					setOpenModal(true);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<planeGeometry args={[3 * props.radius]} />
				<meshStandardMaterial map={textureMap} transparent={true} />
			</mesh>
		</group>
	);
}

function Lune({ ...props }) {
	const { setSelectedPlanet, setOpenModal } = useStore();
	const textureMap = useTexture("lune-plan.png");
	const ref = useRef();
	const curve = useMemo(
		() => new EllipseCurve(0, 0, 4.05, 1.55, 0, 2 * Math.PI, false, 0),
		[],
	);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * props.speed;
		const point = curve.getPoint(t);
		ref.current.position.set(point.x, point.y, 0);
		ref.current.rotation.y = state.clock.getElapsedTime() / 4;
	});

	return (
		<group {...props}>
			<mesh
				ref={ref}
				onClick={() => {
					setSelectedPlanet("lune");
					setOpenModal(true);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<sphereGeometry args={[1 * props.radius]} />
				<meshStandardMaterial map={textureMap} />
			</mesh>
		</group>
	);
}

function TESS({ ...props }) {
	const { setSelectedPlanet, setOpenModal } = useStore();
	const ref = useRef();
	const textureMap = useTexture("https://i.imgur.com/wuz8Xav.png");
	const curve = useMemo(
		() => new EllipseCurve(0, 0, 4.5, 1.725, 0, 2 * Math.PI, false, 0),
		[],
	);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * props.speed;
		const point = curve.getPoint(t);
		ref.current.position.set(point.x, point.y, 0);
	});
	return (
		<group {...props}>
			<mesh
				scale={0.5}
				ref={ref}
				onClick={() => {
					setSelectedPlanet("tess");
					setOpenModal(true);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<planeGeometry args={[15 * props.radius]} />
				<meshStandardMaterial map={textureMap} transparent={true} />
			</mesh>
		</group>
	);
}

function JamesWebb({ ...props }) {
	const { setSelectedPlanet, setOpenModal } = useStore();
	const ref = useRef();
	const textureMap = useTexture("https://i.imgur.com/LJC5TCE.png");
	const curve = useMemo(
		() => new EllipseCurve(0, 0, 5.4, 2.07, 0, 2 * Math.PI, false, 0),
		[],
	);
	useFrame((state) => {
		const t = state.clock.getElapsedTime() * props.speed;
		const point = curve.getPoint(t);
		ref.current.position.set(point.x, point.y, 0);
	});
	return (
		<group {...props}>
			<mesh
				scale={0.6}
				ref={ref}
				onClick={() => {
					setSelectedPlanet("jwst");
					setOpenModal(true);
				}}
				onPointerOver={handlePointerOver}
				onPointerOut={handlePointerOut}
			>
				<planeGeometry args={[25 * props.radius]} />
				<meshStandardMaterial map={textureMap} transparent={true} />
			</mesh>
		</group>
	);
}

function GeoSystem(props) {
	const curvePoints = useMemo(
		() =>
			new EllipseCurve(0, 0, 3, 1.16, 0, 2 * Math.PI, false, 0).getPoints(50),
		[],
	);

	return (
		<group {...props}>
			<Line
				scale={0.85}
				dashed={true}
				gapSize={0.05}
				dashSize={0.05}
				worldUnits
				points={curvePoints}
				color="white"
				lineWidth={0.02}
			/>
			<Line
				scale={1.35}
				worldUnits
				points={curvePoints}
				color="white"
				lineWidth={0.03}
			/>
			<Line
				scale={1.5}
				dashed={true}
				gapSize={0.05}
				dashSize={0.05}
				worldUnits
				points={curvePoints}
				color="white"
				lineWidth={0.02}
				rotation={[0, 0, 1]}
			/>
			<Line
				scale={1.8}
				worldUnits
				points={curvePoints}
				color="white"
				lineWidth={0.02}
				rotation={[0, 0, -1]}
			/>
			<ISS radius={0.4} speed={0.05} />
			<Lune radius={0.4} speed={0.01} />
			<Terre radius={0.9} speed={0.01} />
			<TESS radius={0.1} speed={0.008} rotation={[0, 0, Math.PI / 3.141]} />
			<JamesWebb
				radius={0.1}
				speed={0.006}
				rotation={[0, 0, -Math.PI / 3.141]}
			/>
			<sphereGeometry args={[0.8, 35, 35]} />
		</group>
	);
}

function Geocentric() {
	const { openModal } = useStore();

	return (
		<GeocentricGlobal openModal={openModal}>
			<Canvas camera={{ position: [0, 0, 10] }}>
				<ambientLight intensity={0.8} />
				<GeoSystem />
			</Canvas>
		</GeocentricGlobal>
	);
}

export default Geocentric;

const GeocentricGlobal = styled.div`
	background-color: black;
	position: absolute;
	width: ${(props) => (props.openModal ? "70%" : "100%")};
	height: 100%;
	top: 50%;
	left: ${(props) => (props.openModal ? "35%" : "50%")};
	transform: translate(-50%, -50%);
`;
