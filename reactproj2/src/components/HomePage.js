import AdOne from "./AdOne";
import MainBd from "./MainBd";
import MainBd2 from "./MainBd2";
import Nb1 from "./Nb1";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";

function HomePage(){
    return (
        <div style = {{display:"flex", flexDirection:"column"}}>
          <Nb1 />
          <AdOne />
          <MainBd />
          <AdOne />
          <MainBd2 />
          <Footer1 />
          <Footer2 />
        </div>
      );
}
export default HomePage;