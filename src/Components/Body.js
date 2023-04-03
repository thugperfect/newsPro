import Newsbox from "./Newsbox"
import Headlinebox from "./Headlinebox"
function Body(){
return(
   

         <div className="mcont">
        <div className="leftcont">
        <div className="msliderimg">
        <div className="sliderimg">

            <div className="leftslide"></div>
            <div className="rightslide"></div>
            <div className="bottomnews">

                <div className="heading">
                    heading
                </div>
                <div className="news">
                    this is about the above invisible picture
                </div>
                
            </div>


                </div></div>
            
                <div className="newscontent">
            <div className="leftleftcont">
            <Newsbox/>

            </div>
            <div className="leftrightcont">
                <Newsbox/>
                </div></div>
        </div>
        <div className="rightcont">
            <Headlinebox/>
            <Headlinebox/>
            <Headlinebox/>
            <Headlinebox/>
            <Headlinebox/>
            <Headlinebox/>
            <Headlinebox/>


        </div>





    </div>
)
}
export default Body