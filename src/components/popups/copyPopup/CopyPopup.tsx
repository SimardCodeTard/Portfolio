import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useImperativeHandle, useState } from "react";
import styles from './CopyPopup.module.css';
const copyPopup = forwardRef((props, ref)=>{
    const [popupVisible,setPopupVisible] = useState(false);

    useImperativeHandle(ref,()=>({
        async displayPopup(_:Event){
            setPopupVisible(true);
            await (new Promise(resolve=>setTimeout(resolve,2500)));
            setPopupVisible(false);
            navigator.clipboard.writeText('simon.menardp03@gmail.com');
        }
    }));

    return (
        <div className = {popupVisible ? styles.visible : styles.null} id= {styles.copy_notice}>
            <FontAwesomeIcon className = 'linkIcon' icon={faCheck}></FontAwesomeIcon><p>Copied to cliboard</p>
        </div>
    );
})

export default copyPopup;