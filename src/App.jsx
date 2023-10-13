import { Route, Routes } from "react-router-dom";
import { Details, Home } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:caname" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
