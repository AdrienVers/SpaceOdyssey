import React, { useState } from "react";
import { STARS_DATA } from "../../datas/starsData";
import styled from "@emotion/styled";
import Image from "next/image";
import { keyframes } from "@emotion/react";

function Stars() {
	const [star, setStar] = useState<boolean>(false);

	return (
		<StarsGlobal>
			{STARS_DATA.map((item) => {
				return (
					<div
						key={item.id}
						className="stars"
						style={{
							width: `${item.radius}`,
							height: `${item.radius}`,
							borderRadius: `${item.radius}`,
							top: `${item.top}`,
							left: `${item.left}`,
							boxShadow: `${item.boxShadow}`,
						}}
					>
						{item.id === 10016 ? (
							<div
								className="star"
								onPointerOver={() => setStar(true)}
								onPointerOut={() => setStar(false)}
							>
								{star ? (
									<Image
										src="https://i.imgur.com/3FRfNVu.png"
										alt="ET"
										className="ET"
										width={100}
										height={100}
									/>
								) : null}
							</div>
						) : null}
					</div>
				);
			})}
		</StarsGlobal>
	);
}

export default Stars;

const spiral = keyframes`
0% {
	width: 0.1em;
	height: 0.1em;
	transform: translateX(-900px);
}
100% {
	width: 0.5em;
	height: 0.5em;
	transform: translateX(-50%);
}
`;

const StarsGlobal = styled.div`
	.stars {
		position: absolute;
		background-color: white;
		z-index: -1;

		.star {
			width: 100%;
			height: 100%;
			&:hover {
				cursor: pointer;
				box-shadow: 0 0 2px black, inset 0 0 1em green, 0 0 3em 1em green;
			}
			z-index: 90;

			.ET {
				position: absolute;
				bottom: 10px;
				left: 50%;
				width: 0.5em;
				height: 0.5em;
				transform: translate(-50%, -50%);
				filter: drop-shadow(0 0.6rem 0.2rem green);
				animation: ${spiral} 2s ease-in-out;
				transform-style: preserve-3d;
				z-index: 998;
			}
		}
	}
`;
