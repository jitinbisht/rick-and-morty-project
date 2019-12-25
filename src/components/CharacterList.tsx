import React from "react";
import styled from "styled-components";

import { Character } from "../lib/api";
import CharacterCard from "./CharacterCard";

type CharacterListProps = {
  characters: Character[];
  searchValue: string;
};

const CharacterListHeading = styled.h2`
  font-size: 2rem;
`;

const CharacterListBody = styled.div`
  margin: auto;
  max-width: 1260px;
  min-height: 40vh;
  display: grid;
  @media (max-width: 500px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 700px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export default ({ characters, searchValue }: CharacterListProps) => (
  <div>
    {!!characters.length && (
      <>
        <CharacterListHeading>Results for {searchValue}</CharacterListHeading>
        <CharacterListBody>
          {characters.map(character => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </CharacterListBody>
      </>
    )}
  </div>
);
