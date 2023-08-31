import Link from "next/link";

import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <nav className= {"flex space-x-3 w-screen p-3 " + styles.navbar}>
            <Link className="font-medium" href="/">Home</Link>
            <Link  href="/pages/about">About me</Link>
            <Link href="/pages/skills">Skills</Link>
            <Link href="/pages/formation">Formation</Link>
        </nav>
    )
}