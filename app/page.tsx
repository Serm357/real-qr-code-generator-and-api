import About from "./components/About";
import Hero from "./components/Hero";
import QrGenerator from "./components/QrGenerator";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8  text-gray-800">
      <Hero />
      <QrGenerator />
      <About />
    </div>
  );
};

export default HomePage;
