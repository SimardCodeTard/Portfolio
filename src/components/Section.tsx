import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler, ReactNode} from 'react'

type Link={
    // this type is used fot the links <a> passed as props
    // It includes a route, a html id, a text <p>, a font awesome icon, a font awesome icon size and 
    // a MouseEventHandler for the onClick listener
    route:string,
    id?:string,
    text?:string,
    icon?:IconProp,
    iconSize?:SizeProp,
    class?:string,
    onClickEvent?:MouseEventHandler<HTMLAnchorElement>
}
type Props = {
  // Typed used for the props of this component, it includes an html id, <h1> title, <h2> title, <p> text,
  // an array of links <a> and functions to run  
  id?:string
  title1?:string
  title2?:string
  text?:string 
  links?:Array<Link>,
  childrenNodes?:Array<ReactNode>,
  isGrowing?:boolean,
  key?:number
}
export default function Section({id,links,text,title1,title2,childrenNodes,isGrowing=true,key}:Props){
  return(
    <div className={isGrowing ? "growingSection" : 'section'} id={id}>
        { title1 ? <h1>{ title1 }</h1> : null }
        { title2 ||  text || links ? 
          <div className = "content">
              { title2 ? <h2>{title2}</h2> : null }
              {  text ? <p>{text}</p> : null }
              { links ? 
              links.map((link:Link,key:number)=>{
                return <a className={link.class}  id={link.id} key={key} href={link.route} onClick = {link?.onClickEvent}>
                  {link.icon ? 
                    <FontAwesomeIcon  icon={link.icon} size={link.iconSize ? link.iconSize : undefined} />
                  :null}
                  {link.text}
                </a>
              })
              : null}
          </div>
        : null}
        { childrenNodes 
          ? childrenNodes.map((childrenNode:ReactNode,childrenKey:number)=>{
            return <div key={childrenKey}>{childrenNode}</div>;
          })
          :null}
    </div>
  );
}