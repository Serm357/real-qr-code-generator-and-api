import Hero from "./components/Hero";
import QrGenerator from "./components/QrGenerator";
import ComingSoon from "./components/ComingSoon";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-8  text-gray-800">
      <Hero />
      <QrGenerator />
      <ComingSoon />
    </div>
  );
};

export default HomePage;
