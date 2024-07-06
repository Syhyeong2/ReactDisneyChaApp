import styled from "styled-components";

const LoadingContainer = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return <LoadingContainer>Loading...</LoadingContainer>;
}
