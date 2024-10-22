import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
      <main>
        <Header />
        <div>
          <div className="hero-section"></div>
          <div className="header-section"></div>
          <div className="page-content"></div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
