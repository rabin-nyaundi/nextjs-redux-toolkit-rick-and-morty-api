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
      query: () => "character/",
    }),

    getCharactersById: builder.query<Character, Number | String | undefined | string[]>({
      query: (id) => `character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharactersByIdQuery } =
  characterApi;
