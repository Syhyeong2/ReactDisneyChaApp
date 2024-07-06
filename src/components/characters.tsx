import { useQuery } from "react-query";
import { fetchCharacters } from "../services/api";
import styled from "styled-components";
import Character from "./character";
import Loading from "./loading";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-left: 150px;
  margin-right: 150px;
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 10px;
`;

const PageBtn = styled.button``;

const PageSpan = styled.div``;

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
  const finalPage = Math.floor((data?.length ?? 0) / 100) + 1;
  const [pageNumber, setPageNumber] = useState(1);
  const handlePageDown = () => {
    if (pageNumber == 1) {
      return null;
    }
    setPageNumber((current) => current - 1);
  };
  const handlePageUp = () => {
    if (pageNumber == finalPage) {
      return null;
    }
    setPageNumber((current) => current + 1);
  };

  return isLoading ? (
    <Loading></Loading>
  ) : error ? (
    <div>Error</div>
  ) : (
    <>
      <PageContainer>
        <PageBtn onClick={handlePageDown}>&larr;</PageBtn>
        <PageSpan>{pageNumber}</PageSpan>
        <PageBtn onClick={handlePageUp}>&rarr;</PageBtn>
      </PageContainer>
      <Container>
        {data
          ?.slice(pageNumber * 100 - 100, pageNumber * 100)
          .map((character) => (
            <Character
              key={character.id}
              id={character.id}
              name={character.name}
              imageUrl={character.imageUrl}
            />
          ))}
      </Container>
    </>
  );
}
