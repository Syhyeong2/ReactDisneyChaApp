import { Link } from "react-router-dom";
import styled from "styled-components";

const IMGURL =
  "https://i.scdn.co/image/ab6761610000e5ebc698d53b77db34027b00f853";

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Container = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
`;

interface ICha {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Character({ id, name, imageUrl }: ICha) {
  return (
    <Container key={id}>
      <Link to={`/character/${id}`}>
        <Img src={imageUrl ? imageUrl : IMGURL} alt={name} />
        <span>{name}</span>
      </Link>
    </Container>
  );
}
