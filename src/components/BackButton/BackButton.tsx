import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './BackButton.css'
export default function BackButton(props:any){
    return(
    <div className='backButton'>
        <FontAwesomeIcon onClick={()=>{
            window.location.href=props.href;
        }} icon={faArrowLeft}></FontAwesomeIcon>
    </div>)
}