import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState, store } from '../store';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character, GetCharacters } from "../../types";

interface CharacterState {
  characters: [];
}

const initiateState: CharacterState = {
  characters: [],
};

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<GetCharacters, []>({
      query: (name) => `character/`,
    }),
    getPokemons: builder.query<GetCharacters, []>({
      query: (name) => `character/`,
    }),
  }),
});

;
export const { useGetCharactersQuery, useGetPokemonsQuery } = characterApi;