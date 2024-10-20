import Image from "next/image"
import img6 from "../data/digital marketing.jpg"
export default function Blog6(){
    return(
       <div className="blogMainContainer">
            <div className="blogPic">
            <Image
            src={img6}
            alt="image"
            />
            </div>
            <div className="blogContantContainer">
            <h2 className="blogMainHeading">Digital Strategies: Navigating the Marketing Landscape</h2>
            <h3>Introduction to Digital Marketing: A New Age of Advertising</h3>
            <p>Digital marketing leverages online platforms to promote products and services. Learn about the different channels social media, search engines, email, and content marketing that help businesses reach a global audience with measurable results.</p>
            <h3>Search Engine Optimization SEO: Driving Organic Traffic</h3>
            <p>SEO is the key to getting your content seen by the right audience. Understand how search engines work and how you can optimize your website content, structure, and backlinks to rank higher and attract more visitors.</p>
            <h3>Social Media Marketing: Connecting with Your Audience</h3>
            <p>Social media has revolutionized how businesses communicate with customers. Learn how to craft effective social media campaigns that engage users, build brand loyalty, and increase your online presence across platforms like Instagram, Facebook, and LinkedIn.</p>
            <h3>Content Marketing: Creating Valuable, Engaging Content</h3>
            <p>Content is king in the world of digital marketing. Whether it is blog posts, videos, or infographics, creating high quality content that educates and engages your audience is essential to building trust and driving conversions.</p>
            <h3>Analytics and Data Driven Decisions: Optimizing Campaigns</h3>
            <p className="footertop">The beauty of digital marketing is the wealth of data at your fingertips. Learn how to use analytics tools like Google Analytics to track performance, measure success, and make data driven decisions to refine your marketing strategies.</p>
            </div>
       </div>
    )
}