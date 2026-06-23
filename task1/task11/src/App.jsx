
import './App.css'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/aboutUs/AboutUs'
import ServiceCard from './components/ServiceCard/ServiceCard'
import Footer from './components/Footer/Footer';

function App() {
  

  return (
    <>
      <Navbar />
      <AboutUs />
      <div className='cards'>
        <ServiceCard title="Web" description="We build websites" />
        <ServiceCard title="Mobile" description="We build apps" />
        <ServiceCard title="Design" description="We design UI/UX" />
      </div>

      <Footer/>
    </>
  );
}

export default App
