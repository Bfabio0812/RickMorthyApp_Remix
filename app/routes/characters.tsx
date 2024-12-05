import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import styles from "~/styles/characters.css";

// Vincula el archivo CSS al componente
export const links = () => [
  { rel: "stylesheet", href: styles }
];

// Loader para cargar datos de la API
export async function loader() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  return json(data.results);
}

// Componente principal
export default function Characters() {
const characters: any[] = useLoaderData();

return (
    <div className="container">
        <h1>Personajes de Rick y Morty</h1>
        <ul className="character-list">
            {characters.slice(0, 20).map((character: any) => (
                <li key={character.id} className="character-card">
                    <img src={character.image} alt={character.name} />
                    <p>{character.name}</p>
                </li>
            ))}
        </ul>
    </div>
);
}