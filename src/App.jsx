import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Social from "./components/Social/Social";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className={`bg-white dark:bg-slate-800 min-h-screen`}>
      <div className={`w-full max-w-[800px] mx-auto`}>
        <Header/>
        <Hero/>
        <Projects/>
        <Social/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
