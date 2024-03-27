import "./MainBd2.css";
import { useState, useEffect } from "react";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
// import 'react-tabs/style/react0tabs.css'
import InfiniteScroll from "./InfiniteScroll";

function MainBd2(){
    const [articles, setArticles] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() =>{
    //     const fetchArticles = ()=>{
    //         //using promise chaining as there is no complex operation involved here and it is simple json file that needs to be handled.
    //             fetch(
    //                 `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6`
    //             ).then(response =>{
    //                 if(!response.ok){
    //                     throw new Error(`HTTP error! status: ${response.status}`);
    //                 }
    //                 return response.json();
    //             })
    //             .then(data =>{
    //                 const articles = data.results.slice(15, 28).map( art => ({
    //                     title:art.title,
    //                     desc:art.abstract,
    //                     imags: art.multimedia ? art.multimedia.find(m => m.format === "Large Thumbnail")?.url || art.multimedia[0]?.url : '',
    //                     time: art.updated_date,
    //                     url:art.url, 
    //                     credits:art.byline,
    //                 }));
    //                 setArticles(articles);
    //                 console.log(articles);
    //             })
    //         .catch(error =>{
    //             console.log("Error fetching the articles: ", error);
    //         });
    //     };
    //     fetchArticles();
    // },[]);

    // useEffect(()=>{
    //     const fetchArticles = async()=>{
    //         try{
    //             const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6`)
    //             if(!response.ok){
    //                 throw new Error(`HTTP error!${response.status}`);
    //             }
    //             const data = await response.json();
    //             const articles = data.results.slice(15, 28).map(art =>({
    //                 title:art.title,
    //                 desc:art.abstract,
    //                 imags: art.multimedia ? art.multimedia.find(m => m.format === "Super Jumbo")?.url || art.multimedia[0]?.url : '',
    //                 time: art.updated_date,
    //                 url:art.url, 
    //                 credits:art.byline,
    //             }));
    //             setArticles(articles);
    //             console.log(articles);
    //         }
    //         catch(error){
    //             console.log(error);
    //         }
    //     };
    //     fetchArticles();
    // }, []);

    return(
        // style = {{display:'flex', flexDirection:"column"}}
        <div >
        <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}> 
            <TabList>
                <Tab>Latest</Tab>
                <Tab><i className="bi-search"></i>Search</Tab>
            </TabList>
            <TabPanel>
            {/* <div className = "sub-article-list">
                    <div className="sub-article-container">
                    {articles.map((article, index)=>{
                        const {title, desc, imags, time, credits, url} = article
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
                                            <a className= "sub-article-link" style= {{paddingLeft:"0px"}}href= {url}>
                                                <h3 className = "sub-article-heading" style = {{marginTop:0}}>{title}</h3>
                                            </a>
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
                </div> */}
            </TabPanel>
            <TabPanel>
            {/* <div className = "sub-article-list">
                    <div className="sub-article-container">
                    {articles.map((article, index)=>{
                        const {title, desc, imags, time, credits, url} = article
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
                                            <a className= "sub-article-link" style= {{paddingLeft:"0px"}}href= {url}>
                                                <h3 className = "sub-article-heading" style = {{marginTop:0}}>{title}</h3>
                                            </a>
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
                </div> */}
                <p>This is the article.length</p>
            </TabPanel>
        </Tabs>
        <div className = "sub-article-list">
            <div className="sub-article-container"></div>
                <InfiniteScroll />
            </div>    
        </div>
    );
}
export default MainBd2;




//This is the code that is implemented in the tab panel
{/* <div className = "sub-article-list">
                    <div className="sub-article-container">
                    {articles.map((article, index)=>{
                        const {title, desc, imags, time, credits, url} = article
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
                                            <a className= "sub-article-link" style= {{paddingLeft:"0px"}}href= {url}>
                                                <h3 className = "sub-article-heading" style = {{marginTop:0}}>{title}</h3>
                                            </a>
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
                </div> */}