import Newsbox from "./Newsbox"
import Headlinebox from "./Headlinebox"
import axios from "axios"
import { useState,useEffect } from "react"


function Body(){

 const [news,setnews] = useState([])

 const [newsn,setnewsn] = useState([])
 
useEffect(() => {
 console.log("mounted")
 axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=570706803e6741d6800be9cbad0b76df").then((res) =>{

    setnews(res.data.articles)
    console.log(res.data.articles)
  
})

axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=570706803e6741d6800be9cbad0b76df").then((resp) =>{

setnewsn(resp.data.articles)
console.log(resp.data.articles)

})

}, []);




   return(

         <div className="mcont">
        <div className="leftcont">
        <div className="msliderimg">
        <div className="sliderimg">
        <img src={news.urlToImage}/>
            <div className="leftslide"></div>
            <div className="rightslide"></div>
            <div className="bottomnews">
                
                <div className="heading">
                   {news.title}
                </div>
              
                
            </div>


                </div></div>
            
                <div className="newscontent">
                {/* <div className="leftleftcont">
                <Newsbox head={news.title} co = {news.con} immg={news.image} />
                    </div> */}



            
       {
      
        news?.length>0
        ?(<div className="leftleftcont">
            {news.map((news) =>(
            <Newsbox head={news.title} co = {news.content} immg={news.urlToImage} />
        ))}

        </div>
        ):
        (<div>

        </div>

        )



       }

         
            
       
            

          
                
            {
      
      newsn?.length>0
      ?(<div className="leftrightcont">
          {newsn.map((newsn) =>(
          <Newsbox head={newsn.title} co = {newsn.content} immg={newsn.urlToImage} />
      ))}

      </div>
      ):
      (<div>

      </div>

      )



     }
                </div></div>
        
       

            {
        news?.length>0
        ?( <div className="rightcont">
            {news.map((news) =>(
            <Headlinebox head={news.title} content={news.content} image={news.urlToImage} />
        ))}

        </div>
        ):
        (<div>

        </div>

        )



       }



      





    </div>
   )
}
export default Body