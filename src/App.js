// import Ending from "./Components/Ending";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductGallery from "./Components/ProductGallery";
import Welcome from "./Components/Welcome";
import Promises from "./Components/Promises";
import MailingList from "./Components/MailingList";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      <Hero />
      <Welcome />
      <ProductGallery />
      {/* <Ending />  NOT MOBILE RESPONSIVE ;( */}
      <Promises />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
