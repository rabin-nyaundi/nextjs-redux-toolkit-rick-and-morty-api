import Image from "next/image";
import React from "react";
import imageLoader from "./ImageLoader";
import { Character } from "./types";

export default function CharacterDetail({ character }: { character: any }) {
  console.log("====================================");
  console.log("Character details", character);
  console.log("====================================");
  return (
    <div>
      <div className="flex">
        <div className="flex h-24 w-auto  p-4">
          <Image
            loader={imageLoader}
            unoptimized
            src={character?.image}
            width={300}
            height={200}
            alt={character?.name}
            priority
            placeholder="blur"
            blurDataURL="/images/placeholder.png"
          />
        </div>
        <div className="flex p-4">
          <ul className="list-none text-2xl">
            <li className="p-2">Name: {character.name}</li>
            <li className="p-2">Type: {character.type}</li>
            <li className="p-2">Gender: {character.gender}</li>
            <li className="p-2">Location: {character.location.name}</li>
            <li className="p-2">Origin: {character.origin.name}</li>
            <li className="p-2">Species: {character.species}</li>
            <li className="p-2">Episodes: {character.episode.length}</li>
            <li className="p-2">Status: {character.status}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
