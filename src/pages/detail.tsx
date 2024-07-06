import { useQuery } from "react-query";
import { fetchCharacterDetail } from "../services/api";
import { useParams } from "react-router-dom";
import { URLSearchParams } from "url";
import Loading from "../components/loading";
import Header from "../components/header";
import { IMGURL } from "../components/character";

interface IDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export default function Detail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<IDetail>(
    "fetchCharacterDetail",
    () => fetchCharacterDetail(id as string)
  );
  console.log(data);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <h1>{data?.name}</h1>
      {data?.films.map((film, index) => (
        <h1 key={index}>{film}</h1>
      ))}
      <img src={data?.imageUrl ? data?.imageUrl : IMGURL}></img>
      <button
        onClick={() => {
          window.open(`${data?.sourceUrl}`);
        }}
      >
        Link!
      </button>
    </>
  );
}
