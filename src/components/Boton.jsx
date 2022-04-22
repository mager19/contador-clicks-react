import React from "react";
import "../css/buttons.css";

function Boton({ texto, isClick, manejarClick }) {
	return (
		<button
			className={isClick ? "btn--click" : "btn--reset"}
			onClick={manejarClick}
		>
			{texto}
		</button>
	);
}

export default Boton;
