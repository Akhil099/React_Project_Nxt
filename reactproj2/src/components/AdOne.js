import "./AdOne.css"
// import {logo} from "./logo192.png";

function AdOne(){
    return(
        <div className="adspace" >
            <div className = "adheading">
                <span>ADVERTISEMENT</span>
            </div>
            <div className = "adcontent">
                <img src = "./logo192.png" alt = "Logo"  className = "adimg"/>
            </div>
        </div>
    )
};
export default AdOne;