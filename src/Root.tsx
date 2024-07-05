import { Outlet } from "react-router-dom";
import Header from "./components/header";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
      <Outlet />
    </>
  );
}
