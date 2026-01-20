import { Route, Routes } from "react-router";
import "./App.css";
import { Accueil } from "./pages/Accueil";
import { Characters } from "./pages/Characters";

function App() {
	return (
		<Routes>
			<Route path="/persos" element={<Characters />} />
			<Route path="*" element={<Accueil />} />
		</Routes>
	);
}

export default App;
