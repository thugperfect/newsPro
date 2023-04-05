function Newsbox(props){

    return(

        <div className="mnewsbox">

            <div className="mheading"><div className="heading">{props.head}</div></div>

            <div className="newsimg"><img src ={props.immg}/></div>

            <div className="mnews"><div className="news">{props.co}</div></div>


        </div>
    )
}
export default Newsbox