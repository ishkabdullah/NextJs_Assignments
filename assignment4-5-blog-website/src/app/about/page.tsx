import Image from "next/image"
import picture from "../data/My Pic.jpg"
export default function About(){
    return (
        <div className="about">
      <div className="detail">
      <h1 className="aboutHeading">Hello It is me</h1>
      <h1 className="aboutMainHeading"><span> Abdullah Sheikh</span> </h1>
      <h1 className="aboutHeadings">And I am a <span> Frontend Developer</span> </h1>
      <p className="aboutpara">HTML | CSS | TypeScript | Learning Next.js & Python | Senior student at GIAIC | Student of Certified Cloud Applied GenAI Engineering at Governor House Sindh</p>
      </div>
      <div className="mypic">
          <Image className="picture"
            src={picture}
            alt={"maheen"}
            width={400}
            height={400}
          />
      </div>
    </div>
    )
}