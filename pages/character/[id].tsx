import { GetServerSideProps } from "next";
import Image from "next/image";
import { Character } from "../../types";
import imageLoader from "../../ImageLoader";
import Layout from "../../components/Layout";

export default function CharacterPage({ character }: { character: Character }) {
  return (
    <div className="flex  items-center bg-slate-200">
      <Image
        loader={imageLoader}
        unoptimized
        src={character.image}
        height={100}
        width={100}
      />
      <div>
        <p className="">{character.name}</p>
      </div>
    </div>
  );
}

CharacterPage.getLayout = function getLayout(page: typeof CharacterPage) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${context.query.id}`
  );

  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};
