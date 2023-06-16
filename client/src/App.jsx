import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import SinglePlayer_env from "./pages/SinglePlayer_env";
import MultiPlayer_env from "./pages/MultiPlayer_env";



function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SinglePlayer_env />} />
        <Route path="/multi_player" element={<MultiPlayer_env />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
