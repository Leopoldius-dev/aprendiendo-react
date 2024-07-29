import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [isLogoLarge, setIsLogoLarge] = useState(false);

	const handleLogoClick = () => {
		setIsLogoLarge(prevState => !prevState);
	  };
	
	return (
		<div className="App">
			<div>
				<img src={reactLogo}
					className={`logo react ${isLogoLarge ? "large" : ""}`}
					alt="React logo"
					onClick={handleLogoClick}
				/>
			</div>
			<h1>Rspack + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
		</div>
	);
}

export default App;
