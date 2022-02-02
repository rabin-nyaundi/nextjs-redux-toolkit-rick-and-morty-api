import { GetServerSideProps } from "next";
import Image from "next/image";
import { Character } from "../../types";
import imageLoader from "../../ImageLoader";
import Layout from "../../components/Layout";
import CharacterDetail from "../../ListDetail";
import { useGetCharactersByIdQuery } from "../../redux/slices/characterSlice";
import { useRouter } from "next/router";


type id = Number | string | undefined | string[]
export default function CharacterPage() {
  const router = useRouter();
  const characterId: id = router.query.id;
  console.log(router.query.id);

  const { data, error, isLoading } = useGetCharactersByIdQuery(characterId);
  console.log("Character detail data", data);

  if (error) {
    return (
      <>
        <p>Ooops! an error occurred</p>
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <p className="flex justify-center text-3xl items-center">Loading...</p>
      </>
    );
  }

  return (
    <div className="flex flex-col flex-wrap items-center bg-slate-200 overflow-hidden">
      <CharacterDetail character={data} />
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
