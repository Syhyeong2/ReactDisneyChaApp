import { useQuery } from "react-query";
import { fetchCharacterDetail } from "../services/api";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import { IMGURL } from "../components/character";
import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 40px;
`;

const CharacterName = styled.div`
  font-size: 48px;
  margin: 15px;
  font-weight: normal;
`;

const CharacterFilms = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const DetailLink = styled.div`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 70px;
  cursor: default;
  transition: all 0.2s ease;
  font-weight: 400;
  &:hover {
    color: #98a000;
  }
`;

interface IDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export default function Detail() {
  const { id } = useParams();
  const { isLoading, data } = useQuery<IDetail>(
    "fetchCharacterDetail",
    () => fetchCharacterDetail(id as string),
    { cacheTime: 0 }
  );
  console.log(data);

  return isLoading ? (
    <Loading />
  ) : (
    <DetailContainer>
      <Img src={data?.imageUrl ? data?.imageUrl : IMGURL}></Img>
      <CharacterName>{data?.name}'s Films'</CharacterName>
      {data?.films.map((film, index) => (
        <CharacterFilms key={index}>- {film}</CharacterFilms>
      ))}
      <DetailLink
        onClick={() => {
          window.open(`${data?.sourceUrl}`);
        }}
      >
        More about '{data?.name}' &rarr;
      </DetailLink>
    </DetailContainer>
  );
}
