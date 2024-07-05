import { useQuery } from "react-query";
import { fetchCharacters } from "../services/api";
import styled from "styled-components";
import Character from "./character";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
const Loading = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ICha {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Characters() {
  const { isLoading, error, data } = useQuery<ICha[]>(
    "fetchCharacters",
    fetchCharacters
  );

  return isLoading ? (
    <Loading>Loading...</Loading>
  ) : error ? (
    <div>Error</div>
  ) : (
    <Container>
      {data?.map((character) => (
        <Character
          key={character.id} // Added key prop for each list item
          id={character.id}
          name={character.name}
          imageUrl={character.imageUrl}
        />
      ))}
    </Container>
  );
}
