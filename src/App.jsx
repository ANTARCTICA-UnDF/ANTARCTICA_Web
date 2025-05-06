import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";
import IntroSection from "./components/IntroSection/IntroSection.jsx";



function App() {

  return (
    <div className="app">
      <Navbar />
      <IntroSection />
      <main className="content">
      <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
