import Image from "next/image"
import img4 from "../data/web development.jpg"
export default function Blog4() {
    return (
        <div className="blogMainContainer">
            <div className="blogPic">
                <Image
                    src={img4}
                    alt="image"
                />
            </div>
            <div className="blogContantContainer">
                <h2 className="blogMainHeading">Code Craft: Your Web Development Journey</h2>
                <h3>The Building Blocks of the Web: HTML, CSS, and JavaScript</h3>
                <p>Web development begins with three essential languages: HTML for structure, CSS for styling, and JavaScript for interactivity. Mastering these languages is the first step toward creating dynamic, user friendly websites.</p>
                <h3>Front-End vs. Back-End Development: Understanding the Difference</h3>
                <p>Web development is divided into front end i.e what users see and back end i.e server side processes. Learn the differences between these roles and how both work together to create seamless, functional websites.</p>
                <h3>Responsive Design: Crafting Websites for All Devices</h3>
                <p>In today mobile first world, responsive design is critical. Discover how to create websites that adapt to different screen sizes and devices, ensuring a consistent user experience no matter how your site is accessed.</p>
                <h3>Popular Frameworks: Streamlining Development with React, Angular, and Vue</h3>
                <p>Web frameworks make development faster and more efficient. Learn about popular front end frameworks like React, Angular, and Vue, which simplify coding processes and help you build powerful, scalable websites.</p>
                <h3>Web Hosting and Deployment: Bringing Your Site Online</h3>
                <p className="footertop">After developing a website, the next step is hosting and deployment. Explore the various hosting options, from shared hosting to cloud solutions, and learn how to deploy your website for the world to see.</p>
            </div>
        </div>
    )
}