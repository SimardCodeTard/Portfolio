import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MouseEventHandler, ReactNode} from 'react'
import styles from './Section.module.css';
type Link={
    // this type is used fot the links <a> passed as props
    // It includes a route, a html id, a text <p>, a font awesome icon, a font awesome icon size and 
    // a MouseEventHandler for the onClick listener
    route:string,
    id?:string,
    text?:string,
    icon?:IconProp,
    iconSize?:SizeProp,
    iconId?:string,
    class?:string,
    onClickEvent?:MouseEventHandler<HTMLAnchorElement>
    onMouseHoverEvent?:MouseEventHandler<HTMLAnchorElement>
}
type Props = {
  // Typed used for the props of this component, it includes an html id, <h1> title, <h2> title, <p> text,
  // an array of links <a> and functions to run  
  className?:any
  id?:string
  title1?:string
  title2?:string
  text?:string 
  links?:Array<Link>,
  contentChildrenNodes?:Array<ReactNode>,
  childrenNodes?:Array<ReactNode>,
  isGrowing?:boolean
}
export default function Section({className,id,links,text,title1,title2,childrenNodes,contentChildrenNodes,isGrowing=true}:Props){
  return(
    <div className={`${className ? styles[className] : undefined} ${isGrowing ? styles.growingSection : styles.section}`} id={id? styles[id] : undefined}>
        { title1 ? <h1 className='sectionTitle'>{ title1 }</h1> : null }
        { title2 ||  text || links ? 
          <div className = {styles.content}>
              { title2 ? <h2>{title2}</h2> : null }
              {  text ? <p>{text}</p> : null }
              { links ? 
              <div id={styles.linksDiv}>
                {links.map((link:Link,key:number)=>{
                  return(
                  <>
                  <a className={styles.classLink}  id={ link.id ?styles[link.id] : undefined} key={key} href={link.route} onMouseOver = {link?.onMouseHoverEvent} onClick = {link?.onClickEvent}>
                    {link.icon ? 
                      <FontAwesomeIcon  id={ link.iconId ? styles[link.iconId] : undefined}icon={link.icon} size={link.iconSize ? link.iconSize : undefined} />
                    :null}
                    {link.text}
                  </a>
                  </> )
                })}
                { contentChildrenNodes 
                ? contentChildrenNodes.map((contentChildrenNode:ReactNode,contentChildrenKey:number)=>{
                  return <div key={contentChildrenKey}>{contentChildrenNode}</div>;
                })
                :null}
              </div>
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