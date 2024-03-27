import "./Drp2.css";

export default function Drp2({subMenu}){
    return(
        <div className="container-sb">
        {subMenu.map((item, index) => {
          return (
            <div key={index} className="subdropdown-item">
              <a className={item.title} href={item.url}>
                {item.title}
              </a>
            </div>
          );
        })}
      </div>
    )
}