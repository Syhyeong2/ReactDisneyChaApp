import { Link } from "react-router-dom";
import styled from "styled-components";

export const IMGURL =
  "https://i.scdn.co/image/ab6761610000e5ebc698d53b77db34027b00f853";

const Container = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 35px;
  transition: background-color 0.1s ease-in-out;
  &:hover {
    background-color: #00000060;
    color: #fafafa;
  }
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 40px;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
`;

const NameContainer = styled.div`
  height: 50px;
  text-align: center;
  margin-top: -10px;
  font-weight: normal;
`;

interface ICha {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Character({ id, name, imageUrl }: ICha) {
  return (
    <Link to={`/character/${id}`}>
      <Container key={id}>
        <ImgContainer>
          <Img src={imageUrl ? imageUrl : IMGURL} alt={name} />
        </ImgContainer>
        <NameContainer>{name}</NameContainer>
      </Container>
    </Link>
  );
}
