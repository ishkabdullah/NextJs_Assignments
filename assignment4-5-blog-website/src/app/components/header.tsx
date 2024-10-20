import Link from "next/link"
import Image from "next/image"
import logo from "../data/SEP logo.png"
export default function Header(){
    return(
        <div className="header">
            <Image src={logo} 
            alt="Logo" 
            width={150} 
            height={150} />
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="#blogSection">
                    <li>Blog</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/contact-us">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </div>
    )
}