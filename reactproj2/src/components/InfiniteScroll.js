import React, {useEffect, useState, useRef} from 'react';

function InfiniteScroll(startIndex = 15, endIndex = 28){
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const[page, setPage] = useState(0);

    const elementRef = useRef(null);

    function onIntersection(entries){
        const firstEntry = entries[0];
        if(firstEntry.isIntersecting&& hasMore){
            fetchData();
        }
    }

    useEffect (() =>{
        const observer = new IntersectionObserver(onIntersection);
        if(observer && elementRef.current)
        {
            observer.observe(elementRef.current);
        } 
        
        return () =>{observer.disconnect();}
    }, [items, hasMore]);


    const fetchData = async()=>{
        // setLoading(true);
        try{
            const response = await fetch(`https://api.nytimes.com/svc/news/v3/content/all/world.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6&limit=20&offset=${(page+1)*20}`);
            //fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=UYgiGAqROcDfqf7J6L01Vs83YOScWme6`)
            if(!response.ok){
                throw new Error(`HTTP error!${response.status}`);
            }
            const data = await response.json();
            
            // setItems(prevProducts =>[...prevProducts, ...data.items]);
            console.log(data);
            if(data.results && data.results.length > 0){
                setItems(prevItems =>[...prevItems, ...data.results]);
                setPage(prevPage => prevPage + 1);
            }
            else{
                setHasMore(false);
            }
        
            // const articles = data.results.slice(startIndex, startIndex+13).map(art =>({
            //     title:art.title,
            //     desc:art.abstract,
            //     imags: art.multimedia ? art.multimedia.find(m => m.format === "Super Jumbo")?.url || art.multimedia[0]?.url : '',
            //     time: art.updated_date,
            //     url:art.url, 
            //     credits:art.byline,
            // }));
            // setItems(prevItems => [...prevItems, articles.items]);
            // console.log(articles);
        }
        catch(error){
            console.log(error);
        }
    };
    // data();
    // }, []);
    return(
        <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className = "sub-article-list" style = {{display:"flex", flexDirection:"column", maxWidth:"1200px", marginLeft:"auto", marginRight:"auto", alignItems:"flex-end"}}>
            <div className="sub-article-container">
            {items.map((article, index)=>{
                const {title, byline, multimedia, time, abstract, url} = article
                return(
                    <div className = "sub-article">
                        <article className = "article-name">
                            <div className = "fig-heading">
                                <figure className = "figure-content" role = "group">
                                    {article.multimedia.length> 0 ? (
                                        <div className = "images">
                                            {console.log(article.multimedia[0].url)}
                                            <img className = "image-link" src = {(article.multimedia.length >1 ? article.multimedia[1].url : article.multimedia[0].url )} alt = "No image found" style ={{marginTop:"5px"}}  /> 
                                        </div>
                                    ):(
                                        <div className="image-placeholder" style={{marginTop:"5px", height: "150px", width: "200px", backgroundColor: "#CCC"}}>
                                            No image found
                                        </div>
                                    )}
                                    <figcaption className = "image-caption"></figcaption>
                                </figure>
                            </div>
                            
                        </article>
                        <div className = "desx">
                                <div style = {{display:"flex", flexDirection: "column",justifyContent:"flex-start", alignContent:"flex-start", paddingLeft:"10px"}}>
                                    <a className= "sub-article-link" style= {{paddingLeft:"0px"}}href= {url}>
                                        <h3 className = "sub-article-heading" style = {{marginTop:0}}>{title}</h3>
                                    
                                    <p className="sub-article-abstract">{abstract}</p>
                                    <div className = "sub-article-credits">
                                        <p>{byline}</p>
                                    </div>
                                    </a>
                                </div>
                                <div className = "timeline">
                                <span className ="date" >{new Date(article.created_date).toLocaleDateString('en-US', {year:'numeric', month: "long", day:"numeric"})}</span>
                            </div>
                        </div>
                        <div className = "nothing"></div>
                </div>
                );
            })}
            </div>
        </div>
        {hasMore && <div ref = {elementRef} style = {{textAlign: 'center'}}>Load More items...</div>}
        </div>
        </>
    )

}
export default InfiniteScroll;