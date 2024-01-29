import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.page";
import Favorites from "./pages/Favorites.page";
import Details from "./pages/Details.page";

function App() {
  return (
    <>
      <div className='main-h-screen p-6 bg-white text-gray-600 text-lg'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/favorites' element={<Favorites />} />
          <Route exact path='/recipie-info/:id' element={<Details />} />
        </Routes>
      </div>
      ;
    </>
  );
}

export default App;
