import Section from "../../../../components/Section/Section";

export default function Competence({dataRow,children}:{dataRow:{title1:string,title2:string,text:string},children:any}){
    return(
        <div>
            <Section className={['skillsPageSection']} title1={dataRow.title1} title2={dataRow.title2} text={dataRow.text} isGrowing={false} childrenNodes={[children] ?? undefined}></Section>
        </div>
    )
}