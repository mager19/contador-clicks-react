import "./App.css";
import freeLogo from "./img/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";

function App() {
	const [numClics, setNumClics] = useState(0);

	const manejarClick = () => {
		setNumClics(numClics + 1);
	};

	const reiniciarContador = () => {
		setNumClics(0);
	};

	return (
		<div className="App">
			<div className="freecode-logo-container">
				<img className="frecode-logo" src={freeLogo} alt="logo" />
			</div>

			<div className="clicks__container">
				<Contador numClicks={numClics} />
				<div className="buttons">
					<Boton
						texto="Click"
						isClick={true}
						manejarClick={manejarClick}
					/>
					<Boton
						texto="Reset"
						isClick={false}
						manejarClick={reiniciarContador}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
