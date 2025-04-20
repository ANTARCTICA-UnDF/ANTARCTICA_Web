import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./components/Home.jsx";



function App() {

  return (
    <div className="app">
      <Navbar />
      <main className="content">
      <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
