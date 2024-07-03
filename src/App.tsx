import { Route, Routes } from "react-router";
import { Home } from "./compoment/home";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
