import Image from "next/image";
import img from '@/public/reptilien.jpg';

export default function PrensentationWidget() {
    const imgSize = 150;

    return (
        <div className="widget flex space-x-5 p-4 rounded max-w-2xl">
            <Image className="rounded shadow-inner" src={img} width={imgSize} height={imgSize} alt=""></Image>
            <div className="flex flex-col">
                <h1>Simon Menard</h1>
                <h4>Fullstack web developper</h4>
                <p>Hi ! I'm Simon. I have a 3 years bachelors degree in computer science and am specialized in fullstack web development.</p>
            </div>
        </div>
    );
}