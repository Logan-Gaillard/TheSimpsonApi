import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HeroUIProvider } from "@heroui/react";
import { BrowserRouter } from "react-router";
import { Navbar } from "./layouts/Navbar.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<HeroUIProvider>
				<Navbar />
				<App />
			</HeroUIProvider>
		</BrowserRouter>
	</StrictMode>,
);
