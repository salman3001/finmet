import Footer from "./Footer";
import Home from "./Home/Home";
import Modal from "./Modal";
import Navbar from "./Navbar";
import { useState } from "react";
import { IModalContent } from "./Types";
import Whatsapp from "./Whatsapp";

const Layout = () => {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] =
    useState<IModalContent>("youtube-Video");

  const togelModal = (content: IModalContent) => {
    setModalContent(content);
    setModalState((state) => !state);
  };
  
  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <div className="pb-[10vh]">
        <Navbar />
      </div>
      <div className="grow">
        <Home togelModal={togelModal} />
      </div>
      <Footer />
      <Modal close={togelModal} content={modalContent} state={modalState} />
      <Whatsapp/>
    </div>
  );
};

export default Layout;
