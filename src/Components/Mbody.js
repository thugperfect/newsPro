import Speednews from "./Speednews"
import { useState } from "react"
import App from "../App"
import Body from "./Body"

function Mbody(){
    const [content,changeContent] = useState(<Body/>)
    

    return(
        <div className="mainbody">
       {content}
        </div>
    )
}

export default Mbody