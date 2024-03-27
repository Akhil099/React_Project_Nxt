import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nb1 from './Nb1';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import './Country1.css';
// import './MainBd2.css';
// import './Country.css'

const Country = () => {
    let {countryName} = useParams();
    const [articles, setArticles] = useState([])

    useEffect(() =>{
        //using async/await because of the complexity of converting the xml into array format
        const fetchArticles = async () =>{
            try{
                const response = await fetch(
                    `https://api.nytimes.com/svc/topstories/v2/world/${countryName}.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6`
                )
                if(!response.ok){
                    throw new Error(`HTTP error!${response.status}`);
                }
                const data = await response.json();
                const articles = data.results.slice(15, 40).map(art =>({
                    title:art.title,
                    desc:art.abstract,
                    imags: art.multimedia ? art.multimedia.find(m => m.format === "Super Jumbo")?.url || art.multimedia[0]?.url : '',
                    time: art.updated_date,
                    url:art.url, 
                    credits:art.byline,
                }));
                setArticles(articles);
                console.log(articles);
            }
            catch(error){
                console.error(error)
            }
        }
        fetchArticles();
    }, [])
    return (
        <>
            <Nb1 />
            <div className = "countryName" style = {{width:"1200px", margin: "0px auto", display:"flex", flexDirection:"column", justifyContent:"flex-start", alignItems:"flex-start"}} >
                <a href= "/"><span style = {{color:"#000", fontWeight:"600"}}>WORLD</span></a>
                <h1 style = {{textTransform:"uppercase", marginTop:"0px"}}>{countryName}</h1>
                </div>
                <div className="sub-article-container" style = {{width:"1200px", margin: "0 auto", display: 'flex', flexDirection: 'column', justifyContent:"center"}}>
                {articles.map((article, index)=>{
                    const {title, url, desc, time, imags, credits} = article
                    return(    
                        <div className = "sub-article">
                                <article className = "article-name">
                                    <div className = "fig-heading">
                                        <figure className = "figure-content" role = "group">
                                            <div className = "images">
                                                <img className = "image-link" src = {imags} alt = "image" style ={{marginTop:"5px"}} /> 
                                            </div>
                                            <figcaption className = "image-caption"></figcaption>
                                        </figure>
                                    </div>
                                    
                                </article>
                                <div className = "desx">
                                        <div style = {{display:"flex", flexDirection: "column",justifyContent:"flex-start", alignContent:"flex-start", paddingLeft:"10px"}}>
                                            <Link className= "sub-article-link" to= {url}>
                                                <h3 className = "sub-article-heading" style = {{marginTop:"0", paddingRight:"0"}}>{title}</h3>
                                            </Link>
                                            <p className="sub-article-abstract">{desc}</p>
                                            <div className = "sub-article-credits">
                                                <p>{credits}</p>
                                            </div>
                                        </div>
                                        <div className = "timeline">
                                        <span className ="date" >{new Date(time).toLocaleDateString('en-US', {year:'numeric', month: "long", day:"numeric"})}</span>
                                    </div>
                                </div>

                                <div className = "nothing"></div>
                        </div>
                    );
                })}
                </div>
            <Footer1 />
            <Footer2/>
        </>
    );
}

export default Country;
