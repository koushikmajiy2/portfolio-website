import logo from './logo.svg';
import './App.css';
import Headeer from './component/Headeer';
import Footer from './component/Footer';
import Banner from './component/Banner';
import Projects from './component/Project';
import ServicesExperience from './component/Services';

function App() {
  return (
    <>
   <Headeer/>
   <Banner/>
   <ServicesExperience/>
   <Projects/>
   <Footer/>
    </>
  );
}

export default App;
