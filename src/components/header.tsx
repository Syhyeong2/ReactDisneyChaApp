import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ContainerSpan = styled.span`
  color: gray;
  font-size: 48px;
`;

const Btn = styled.div``;

export default function Header() {
  return (
    <>
      <Container>
        <Btn>
          <Link to="/">Home</Link>
        </Btn>
        <ContainerSpan>Disney Characters</ContainerSpan>
        <Btn>Back</Btn>
      </Container>
    </>
  );
}
