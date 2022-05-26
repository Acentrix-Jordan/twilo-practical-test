// import Ending from "./Components/Ending";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProductGallery from "./Components/ProductGallery";
import Welcome from "./Components/Welcome";
import Promises from "./Components/Promises";
import MailingList from "./Components/MailingList";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className='App'>
      <Header />
      <Sidebar />
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
