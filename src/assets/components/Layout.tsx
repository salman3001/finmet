import Footer from "./Footer";
import Home from "./Home/Home";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="pb-[10vh]">
        <Navbar />
      </div>
      <div className="grow">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
