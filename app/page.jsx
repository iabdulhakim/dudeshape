import Header from "./components/Header";
import Content from "./components/Content";
import Trust from "./components/Trust";
import About from "./components/About";
import OurFurniture from "./components/OurFurniture";
import EachFurniture from "./components/EachFurniture";
import AllFurniture from "./components/AllFurniture";
import Customers from "./components/Customers";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";


export default function Home() {
  return <div className="">
    <Header />
    <Content />
    <Trust />
    <About />
    <div className="hidden md:block">
      <OurFurniture />
      <EachFurniture />
      <AllFurniture />
      <Customers />
      <Subscribe />
      <Footer />
    </div>
  </div>;
}
