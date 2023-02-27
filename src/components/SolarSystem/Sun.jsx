import React from "react";
import styled from "@emotion/styled";
import Stars from "./Stars";

function Sun() {
	return (
		<SunGlobal>
			<Stars />
		</SunGlobal>
	);
}

export default Sun;

const SunGlobal = styled.div`
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
`;
