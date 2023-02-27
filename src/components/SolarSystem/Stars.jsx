import React from "react";
import { STARS_DATA } from "../../datas/starsData";
import styled from "@emotion/styled";

function Stars() {
	return (
		<StarsGlobal>
			{STARS_DATA.map((item) => {
				return (
					<div
						key={item.id}
						className="star"
						style={{
							width: `${item.radius}`,
							height: `${item.radius}`,
							borderRadius: `${item.radius}`,
							top: `${item.top}`,
							left: `${item.left}`,
							boxShadow: `${item.boxShadow}`,
						}}
					/>
				);
			})}
		</StarsGlobal>
	);
}

export default Stars;

const StarsGlobal = styled.div`
	.star {
		position: absolute;
		background-color: white;
		z-index: -1;
		box-shadow: 0 0 8px black, inset 0 0 0.2em #fff, 0 0 0.2em 0.02em white;
	}
`;
