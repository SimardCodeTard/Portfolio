import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useImperativeHandle, useState } from "react";

const copyPopup = forwardRef((props, ref)=>{
    const [popupVisible,setPopupVisible] = useState(false);

    useImperativeHandle(ref,()=>({
        async displayPopup(){
            setPopupVisible(true);
            await (new Promise(resolve=>setTimeout(resolve,2500)));
            setPopupVisible(false);
        }
    }));

    return (
        <div className = {popupVisible ? 'visible' : ''} id="copy-notice">
            <FontAwesomeIcon className = 'linkIcon' icon={faCheck}></FontAwesomeIcon><p>Copied to cliboard</p>
        </div>
    );
})

export default copyPopup;