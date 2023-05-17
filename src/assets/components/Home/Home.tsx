import { IModalContent } from "../Types";
import HomeSeciton2 from "./HomeSeciton2";
import HomeSection1 from "./HomeSection1";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import HomeSection8 from "./HomeSection8";

const Home = (prop: { togelModal: (content: IModalContent) => void }) => {
  return (
    <>
      <HomeSection1 togelModal={prop.togelModal} />
      <HomeSeciton2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
      <HomeSection6 />
      <HomeSection7 />
      <HomeSection8 />
    </>
  );
};

export default Home;
