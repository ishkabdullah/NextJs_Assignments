import Image from "next/image"
import img2 from "../data/IT foundation.jpg"
export default function Blog2() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img2}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">IT Foundations: Building Your Tech Knowledge</h2>
                <h3>Understanding Computer Hardware and Software</h3>
                <p>IT starts with understanding the core components of computers: hardware and software. In this section, we will explore how these elements work together to power everything from basic home PCs to complex enterprise systems.</p>
                <h3>Networking Basics: Connecting the World</h3>
                <p>Networking is the backbone of communication in today digital age. Learn the fundamental concepts of networking, including the types of networks, protocols, and how data travels across the globe, connecting people and businesses in real time.</p>
                <h3>Introduction to Operating Systems</h3>
                <p>Operating systems OS are essential for running any computer. Whether it is Windows, macOS, or Linux, understanding the functions of an OS helps you troubleshoot issues, optimize performance, and manage applications efficiently.</p>
                <h3>Cybersecurity Fundamentals: Protecting Digital Information</h3>
                <p>With the rise of cyber threats, cybersecurity is more important than ever. Learn the basic concepts of protecting data, securing networks, and preventing unauthorized access to your systems. This knowledge is critical in both personal and professional settings.</p>
                <h3>The Future of IT: Emerging Technologies</h3>
                <p className="footertop">The IT world is constantly evolving, with new technologies shaping the future of how we live and work. From cloud computing to artificial intelligence and blockchain, this section explores cutting edge advancements that are set to redefine the industry.</p>
            </div>
        </div>
    )
}