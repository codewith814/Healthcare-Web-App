import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import ImageAnalysis from './components/ImageAnalysis';
import SymptomChecker from './components/SymptomChecker';
import VideoConsultation from './components/VideoConsultation';
import CloudStorage from './components/CloudStorage';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ImageAnalysis />
      <SymptomChecker />
      <Technology />
      <VideoConsultation /> 
      <CloudStorage/>
    </div>
  );
}

export default App;