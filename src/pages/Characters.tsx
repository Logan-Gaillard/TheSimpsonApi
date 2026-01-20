import React from "react";
import { Button, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface ICharacter {
	id: number;
	name: string;
	portrait_path: string;
}

export const HeartIcon = ({fill = "currentColor", filled, size, height, width, ...props} : {fill: string, filled?: boolean, size?: number, height?: number, width?: number}) => {
  return (
	<svg
	  fill={filled ? fill : "none"}
	  height={size || height || 24}
	  viewBox="0 0 24 24"
	  width={size || width || 24}
	  xmlns="http://www.w3.org/2000/svg"
	  {...props}
	>
	  <title>Heart icon</title>
	  <path
        d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Characters = () => {
	const [favorites, setFavorites] = useState(localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")!) : []);
	const [persos, setPersos] = useState<ICharacter[]>([]);
	const [nextPageURL, setNextPageURL] = useState<string>("");

	useEffect(() => {
		axios.get("https://thesimpsonsapi.com/api/characters?page=1")
			.then(response => {
				console.log("Data fetched:", response.data);
				setPersos(response.data.results);
				setNextPageURL(response.data.next)
			})
			.catch(error => {
				console.error("Error fetching data:", error);
			});
	}, []);

	const fetchMorePersos = () => {
		axios.get(`${nextPageURL}`)
			.then(response => {
				setPersos([...persos, ...response.data.results]);
				setNextPageURL(response.data.next)
			})
	}

	const toggleFavorite = (character: ICharacter) => {
		const favorites = localStorage.getItem("favorites");
		const favoritesArray: ICharacter[] = favorites ? JSON.parse(favorites) : [];
		const index = favoritesArray.findIndex(fav => fav.id === character.id);
		if (index !== -1) {
			favoritesArray.splice(index, 1);
		} else {
			favoritesArray.push(character);
		}
		localStorage.setItem("favorites", JSON.stringify(favoritesArray));
		setFavorites(favoritesArray);
	}

	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold mb-4">Voici la page des personnages :</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 6xl:grid-cols-6 gap-4">
				{persos.length > 0 && persos.map((perso: ICharacter) => {
					const isFavorite = favorites.some((fav: ICharacter) => fav.id === perso.id);
					return (
					<div key={perso.id} className="border rounded-lg p-4 flex justify-evenly items-center relative">
						<Button
							isIconOnly 
							color={isFavorite ? "danger" : "primary"}
							className="absolute top-2 right-2"
							onPress={() => toggleFavorite(perso)}
						>
							{isFavorite ? <HeartIcon filled fill="white" /> : <HeartIcon fill="white"/>}
						</Button>
						<Image src={`https://cdn.thesimpsonsapi.com/500${perso.portrait_path}`} alt={perso.name} isBlurred height={150} width={150}/>
						<h2 className="text-2xl font-semibold mb-2">{perso.name}</h2>
					</div>
				)})}
			</div>
			<Button color="secondary" className="w-full mt-8" onPress={() => {fetchMorePersos()}}>
				Charger plus de personnages
			</Button>
		</div>
	);
};
