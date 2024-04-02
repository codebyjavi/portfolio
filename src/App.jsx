import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <main className={`max-w-4xl mx-auto`}>
        <Header/>
        <Hero/>
        <Projects/>
        <Social/>
        <Footer/>
    </main>
  );
}

export default App;
