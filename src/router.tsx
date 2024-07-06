import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Main from "./pages/main";
import Header from "./components/header";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="character/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
