import { Button } from "@heroui/react";
import React from "react";
import { useNavigate } from "react-router";

export const Navbar = () => {
    const navigator = useNavigate();
    return (
        <div className="w-full p-2 flex justify-center bg-yellow-400 shadow-md mb-8 gap-4">
            <Button href="/" className="text-2xl font-bold" onPress={() => navigator("/")   }>
                Accueil
            </Button>
            <Button href="/persos" className="text-2xl font-bold" onPress={() => navigator("/persos")   }>
                Personnages
            </Button>
        </div>
    )
};