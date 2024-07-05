import { useQuery } from "react-query";
import { fetchCharacterDetail } from "../services/api";
import { useParams } from "react-router-dom";
import { URLSearchParams } from "url";

interface IDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export default function Detail() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery<IDetail[]>(
    "fetchCharacterDetail",
    () => fetchCharacterDetail(id as string)
  );
  console.log(data);
  return <div>asdds</div>;
}
