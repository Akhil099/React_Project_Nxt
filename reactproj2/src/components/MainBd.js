import "./MainBd.css";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function timeline(tu){
    const currentDate = new Date();
    const updateDate = new Date(tu);

    // Ensure both dates are valid
    if (isNaN(updateDate.getTime())) {
        console.log('Invalid date(s) provided:', updateDate);
        return 'Invalid date(s)';
    }
    const diff = currentDate - updateDate;
    const minutes = Math.floor(diff / 60000); // Convert to minutes
    if(minutes < 60){
        return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60);
    return `${hours} hours`
}

function MainBd(){
    const [articles, setArticles] = useState([])


    useEffect(() =>{
        //using async/await because of the complexity of converting the xml into array format
        const fetchArticles = async () =>{
            try{
                const res = await fetch(
                    `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6`
                )
                if(!res.ok){
                    throw new Error(`HTTP error!${res.status}`);
                }
                const text = await res.json();
                // const parser = new DOMParser();
                // const xmlDoc = parser.parseFromString(text, "text/xml"); 
                // const items = xmlDoc.querySelectorAll("channel > item")
                // console.log(text);

                const articles = text.results.slice(0, 14).map(item =>{
                    // const mediaContent = item.querySelector("content");
                    // const imageUrl = mediaContent ? mediaContent.getAttribute("url") : './logo192.png';
                    // const crContentElement = item.querySelector("credit");
                    // const crContent = crContentElement ? crContentElement.textContent : null;

                    const imageUrl = item.multimedia[2].url || item.multimedia[0].url
                    const imageUrl1 = item.multimedia[0].url
                    const credit1 =  item.multimedia[0].copyright
                    return{
                        title: item.title,
                        url: item.url,
                        description:item.abstract,
                        updatedDate: item.updated_date,
                        createdDate: item.created_date, 
                        imageUrl,
                        imageUrl1,
                        credit:item.byline,
                        credit1
                    };
                    
                });
                setArticles(articles);

            }
            catch(error){
                console.error(error)
            }
        };
        fetchArticles();
    }, [])
    return(
        <section className = "mainHead">
            <header className = "mainheading">
                <div className = "headspace"></div>
                <div className="headng"><h1>World News</h1></div>
            
                <nav className = "mainnav">
                    <ol className = "mainContent" >
                        <li className = "continent">
                            <Link className="country" to="/country/africa">africa</Link>
                        </li>
                        <li className = "continent">
                            <Link className="country" to="/country/americas">americas</Link>
                        </li>
                        <li className = "continent">
                            <a className="country" to="/country/asia">asia</a>
                        </li>
                        <li className = "continent">
                            <Link className="country" to="/country/australia">australia</Link>
                        </li>
                        <li className = "continent">
                            <Link className="country" to="/country/canada">canada</Link>
                        </li>
                        <li className = "continent">
                            <Link className="country" to="/country/europe">europe</Link>
                        </li>
                        <li className = "continent">
                            <Link className="country-last" to="/country/middleeast">middleeast</Link>
                        </li>
                    </ol>
                </nav>
            </header>
            <div className = "body-cont">
                <div className = "article-list">
                {articles.slice(0, 2).map((article, index) =>{
                    const{title, url,  description, imageUrl1, credit, updatedDate, credit1}= article
                    return (
                        // <li className = {`article-${index}`}>
                        <div className = {`article${index}`}>
                            <div className='overlay-container'>
                                <articles className='article'>
                                    <div className= "text-after">
                                            {console.log(url)}
                                            {console.log(timeline(updatedDate))}
                                            <h3 className = "textTitle"><a className = "anchor-top4"href = {url} style={{paddingLeft:"0",textAlign:"right", fontSize:"1.423rem", lineHeight:"1.23rem"}}>{title}</a></h3>
                                            <p style = {{textAlign:"left", marginBottom: "0", marginLeft:"0",fontFamily: "nyt-imperial, georgia, 'times new roman', times, serif",fontSize: "0.9375rem", fontWeight: "500", lineHeight: "1.375rem"}}>{description}</p>
                                            <p style = {{color: '#727272',display: 'inline',fontFamily: 'nyt-franklin, helvetica, arial, sans-serif',fontSize: '0.6875rem',fontWeight: '500',lineHeight: '0.75rem',marginTop: '5px'}}>
                                                <span>{timeline(updatedDate)} ago</span>
                                                <span> . </span>
                                                <span className="captionHeadlast" style = {{border: "0",clip: "rect(0 0 0 0)", height: "1px",margin: "-1px",overflow: "hidden",padding: "0",position: "absolute",width: "1px"}}>
                                                    Credit
                                                </span>
                                                {credit}
                                            </p>
                                    </div>
                                    <figure className="imgFig" role = "group">
                                        <div className="image">
                                            <img src = {imageUrl1} alt = "imageny" style={{maxWidth:"100%", height:"auto"}}/>
                                        </div>
                                        <figcaption className = "imgCaption" style = {{textAlign:"right"}}>
                                            <span className = "caption" style = {{textAlign:"left",fontSize: "0.625rem",display: "inline-block",fontWeight: "500",lineHeight: "0.75rem",marginTop: "2px",color: "var(--color-content-quaternary, #727272)",fontFamily: "nyt-franklin, helvetica, arial, sans-serif",textTransform: "uppercase"}}>
                                                <span className="captionHead" style = {{border: "0",clip: "rect(0 0 0 0)", height: "1px",margin: "-1px",overflow: "hidden",padding: "0",position: "absolute",width: "1px"}}>
                                                    Credit
                                                </span>
                                                {credit1}
                                            </span>
                                        </figcaption>
                                    </figure>
                                </articles>
                            </div>
                        </div>
                    ) 
                })}
                {articles.length > 2 &&(
                    <div className = "article-lastCol">
                        {articles.slice(2, 4).map((article, index) =>{
                        const{title, url,  description, imageUrl, credit, updatedDate}= article
                        return (
                        // <li className = {`article-${index}`}>
                        <div className = {`article${index+2}`}>
                            <div className='overlay-container'>
                                <articles className='article'>
                                    <div className= "text-after">
                                        <h3 className = "textTitle"><a className = "linkStyle" href = {url} style={{paddingLeft:"0",textAlign:"Left", fontSize:"1.423rem", lineHeight:"1.23rem"}}>{title}</a></h3>
                                        <div className='overlay-container'>
                                            <div className="imageBasic">
                                                <img src = {imageUrl} sizes = "(min-width:765px) 1px, 100vw" alt = "imageny" className = "imageLast"/>
                                            </div>
                                            <p style = {{textAlign:"left", marginBottom: "0", marginLeft:"0",fontFamily: "nyt-imperial, georgia, 'times new roman', times, serif",fontSize: "0.9375rem", fontWeight: "500", lineHeight: "1.375rem"}}>{description}</p>
                                            <p style = {{color: "#727272",display: 'inline',fontFamily: 'nyt-franklin, helvetica, arial, sans-serif',fontSize: '0.6875rem',fontWeight: '500',lineHeight: '0.75rem',marginTop: '5px'}}>
                                                <span>{timeline(updatedDate)} ago</span>
                                                <span> . </span>
                                                <span className="captionHeadlast" style = {{border: "0",clip: "rect(0 0 0 0)", height: "1px",margin: "-1px",overflow: "hidden",padding: "0",position: "absolute",width: "1px"}}>
                                                    Credit
                                                </span>
                                                {credit}
                                            </p>
                                            
                                        </div>
                                    </div>
                                </articles>
                            </div>
                        </div>
                    ) 
                })}
                    </div>   
                )}
                </div>
            </div>
            <div className = "body-lst">
                <div className = "list2-main-style">
                {articles.slice(4, 9).map((article, index) =>{
                    const{title, url, imageUrl}= article
                    return (
                        <div className = {`article-${index}`}>
                                <articles className='article-submenu'>
                                    <div className= "text-after">
                                        <p className = "textTitle1"><a className = "linkStyle" href = {url} style={{paddingLeft:"0",textAlign:"right", fontSize:"16px", lineHeight:"18px", fontWeight:"500"}}>{title}</a></p>
                                    </div>
                                    <figure className="imgFig-sub" role = "group">
                                        <div className="image">
                                            <img src = {imageUrl} alt = "imageny" sizes = "(min-width: 740px) 100vw, 48vw" style={{maxWidth:"100%", height:"auto", width:"100%", verticalAlign:"top"}}/>
                                        </div>
                                    </figure>
                                </articles>
                        </div>
                    ) 
                })}
                </div>
            </div>
            <div className = "body-lst">
                <div className = "list2-main-style">
                {articles.slice(9, 14).map((article, index) =>{
                    const{title, url,imageUrl,}= article
                    return (
                        <div className = {`article-${index}`}>
                                <articles className='article-submenu'>
                                    <div className= "text-after">
                                            <p className = "textTitle1"><a className = "linkStyle" href = {url} style={{paddingLeft:"0",textAlign:"right", fontSize:"16px", lineHeight:"18px", fontWeight:"500"}}>{title}</a></p>
                                    </div>
                                    <figure className="imgFig-sub" role = "group">
                                        <div className="image">
                                            <img src = {imageUrl} alt = "imageny" sizes = "(min-width: 740px) 100vw, 48vw" style={{maxWidth:"100%", height:"auto", width:"100%", verticalAlign:"top"}}/>
                                        </div>
                                    </figure>
                                </articles>
                        </div>
                    ) 
                })}
                </div>
            </div>
            {/* <div className = "latest-feed">
                <div className = "latest-feed-list">
                    <nav className = "latest-feed-nav">
                        <div role = "tablist" className = "nav-tabs">
                            <li class = "nav-tabs-child" role = "presentation">
                                <h2 className = "nav-tabs-heading">
                                    <a href = "https://www.nytimes.com/section/world#stream-panel" aria-controls="stream-panel" role = "tab" referrerPolicy="no-referrer-when-downgrade"className="nav-tabs-anchor">
                                        Latest
                                    </a>
                                </h2>
                            </li>
                            <li class = "nav-tabs-child" role = "presentation">

                            </li>
                        </div>
                    </nav>
                </div>
            </div> */}
        </section>
    );
};
export default MainBd;




// {display:"block"