import Image from "next/image";
import Link from "next/link";
import image1 from "../data/english language.jpg"
import image2 from "../data/IT foundation.jpg"
import image3 from "../data/Graphic designing.jpg"
import image4 from "../data/web development.jpg"
import image5 from "../data/UX-UI designing.jpg"
import image6 from "../data/digital marketing.jpg"
export default function Main() {
    return (
        <div className="main">
            <div>
                <h1 className="heading">Empowering Minds in the Digital Age: Your Path to Success</h1>
                <p className="para">In today rapidly evolving world, mastering diverse skills is essential for personal and professional growth. Whether you want to sharpen your English communication, dive into the foundations of IT, explore the creative world of graphic design, build dynamic websites, design user friendly interfaces, or excel in digital marketing, you have come to the right place. Our blog offers expert insights, tips, and tutorials across multiple domains, guiding you step by step on your journey to success in the digital era.</p>
            </div>
        <div id="blogSection" className="parentContainer">
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image1}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Mastering English: Your Path to Fluency</h2>
                <p className="description">Explore the English languages role in effective communication connections and creativity across cultures, essential for personal and professional growth.</p>
                <div>
                    <Link href="/englishlanguage">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image2}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">IT Foundations: Building Your Tech Knowledge</h2>
                <p className="description">Build your IT knowledge with essential topics, beginner friendly resources, and insights for anyone looking to enter the tech field.</p>
                <div>
                <Link href="itfoundation">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image3}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Design Visions: Elevate Your Graphic Skills</h2>
                <p className="description">Enhance your graphic design skills with tutorials, creative tips, and inspiration, helping you create stunning visuals and innovative designs.</p>
                <div>
                <Link href="/graphicdesigning">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image4}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Code Craft: Your Web Development Journey</h2>
                <p className="description">Master web development through tutorials, coding tips, and project ideas, focusing on design, helping you turn your tech aspirations into reality.</p>
                <div>
                <Link href="/webdevelopment">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image5}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Design Experience: Mastering UX UI Principles</h2>
                <p className="description">Master UX UI design through practical tutorials, user centered principles, and industry insights to create engaging and intuitive digital experiences.</p>
                <div>
                <Link href="/uxuidesigning">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image6}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <h2 className="title">Digital Strategies: Navigating the Marketing Landscape</h2>
                <p className="description">Explore digital marketing strategies, including SEO, content creation, and analytics, to drive engagement and achieve business growth effectively.</p>
                <div>
                <Link href="/digitalmarketing">
                    <button className="readMore">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    )
}