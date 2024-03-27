import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import OpenCard from "./components/OpenCard";
import DataProvider from "./context/DataProvider";

function App() {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<OpenCard />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
