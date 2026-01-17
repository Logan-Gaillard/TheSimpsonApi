import { Button, Card, CardBody, CardHeader, Image } from "@heroui/react";
import { useNavigate } from "react-router";

export const Accueil = () => {
	const navigate = useNavigate();
	return (
		<div>
			<Image
				src="/simpsons.png"
				alt="The Simpsons Logo"
				className="w-64 mx-auto mb-8"
			/>
			<p className="text-4xl font-bold mb-4">
				Bienvenue sur mon site des Simpsons
			</p>
			<p className="text-lg">
				Explorez les personnages, épisodes et bien plus encore!
			</p>

			<div className="flex p-8 gap-8 justify-evenly flex-wrap">
				<Card className="mt-8 p-4">
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<h4 className="font-bold text-large">Explorer les personnages</h4>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<Image
							src="/characters.png"
							alt="Characters"
							className="object-cover rounded-xl"
							width={270}
						/>
						<Button className="mt-4" onPress={() => navigate("/characters")}>
							Accéder
						</Button>
					</CardBody>
				</Card>
				<Card className="mt-8 p-4">
					<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
						<h4 className="font-bold text-large">Mes personnages préférés</h4>
					</CardHeader>
					<CardBody className="overflow-visible py-2">
						<Image
							src="/episodes.png"
							alt="Episodes"
							className="object-cover rounded-xl"
							width={270}
						/>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
