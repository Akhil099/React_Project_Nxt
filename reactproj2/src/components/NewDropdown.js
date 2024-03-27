import { useState } from "react";
import "./NewDropdown.css";
import Drp2 from "./Drp2";


export default function NewDropdown({ menuItems }) {
  const[openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
  const handleToggleSubmenu = (index) => {
    if(openSubMenuIndex === index){
      setOpenSubMenuIndex(null);
    }
    else{
      setOpenSubMenuIndex(index);
    }
  };
  console.log("inside component");
  return (
    <div className="container1">
      {menuItems.map((item, index) => {
        if(item.separator){
          return <hr key={index} style={{
            // border: "0",
            height: "1px",
            backgroundColor: "#ccc",
            margin: "0.5em 1em"
          }} />;
        }
        return (
          <div key={index} className="dropdown-item" onClick={() => handleToggleSubmenu(index)}>
            <a className={item.title} href={item.url}>
              {item.title}
            </a>
            {item.subMenu && (
              <>
                <div className = "icon">
                <i className="bi-chevron-right" style={{fontSize: "0.75em", color: "grey", paddingRight: "0.5em"}}></i>
                </div>
                {openSubMenuIndex === index &&(<Drp2 subMenu = {item.subMenu}/>)}
                {/* // console.log("Able to enter the submenu")
                // <div className="submenu">
                //         {item.subMenu.map((subItem, subIndex) => (
                //           <div key={subIndex} className="dropdown-subitem">
                //           <a className={subItem.title} href={subItem.url}>
                //         {subItem.title}
                //       </a>  
                //     </div>
                //   ))}
                // </div>
                )} */}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}


// {/* // return (
//     //     <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
//     //       {menuItems.map((item, index) => (
//     //         <div key={index} className="dropdown-item">
//     //           <a href={item.url}>{item.title}</a>
//     //         </div>
//     //       ))}
//     //     </div>
//     //   ); */}


// const [isVisible, setIsVisible] = useState(false);
    // const dropdownRef = useRef(null); // Ref for the dropdown to help with outside clicks

    // // Toggle function
    // const toggleDropdown = () => setIsVisible(prev => !prev);

    // // Handle clicks outside the dropdown
    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //             setIsVisible(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [dropdownRef]);

    // return (
    //     <>  
    //         <div className = "container1">
    //         {isVisible &&(
    //         <div className = "container1">
    //             {menuItems.map((item, index) => 
    //                 <div className="dropdown-item" style={{paddingTop:"3px", paddingBottom:"3px", paddingLeft:"24px" }}><a style={{width:"fit-content", color:"black",fontSize: "16px",
    //                 fontWeight: 400,}} href={item.url}>{item.title}</a></div>
    //             )}
    //         </div>
    //         )}
    //     </>

    // )   
  