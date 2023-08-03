import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGo } from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills" className="container py-4 py-xl-5">
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="fw-bold">My Skills</h2>
          <p className="w-lg-50 fs-5 mb-5">
            Here are some of my skills and favorite tools that I make use of on
            a daily basis.
          </p>
          <div className="row">
            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiHtml5 color={"#e34c26"} size={"4em"} />
                <span>HTML5</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiCss3 color={"#264de4"} size={"4em"} />
                <span>CSS3</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiBootstrap color={"#563d7c"} size={"4em"} />
                <span>Bootstrap</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiTailwindcss color={"#3490dc"} size={"4em"} />
                <span>Tailwindcss</span>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiJavascript color={"#f0db4f"} size={"4em"} />
                <span>Javascript</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiTypescript color={"#007acc"} size={"4em"} />
                <span>Typescript</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiReact color={"#88dded"} size={"4em"} />
                <span>React</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiNodedotjs color={"#3c873a"} size={"4em"} />
                <span>Node.js</span>
              </div>
            </div>
            <div className="col">
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <BsFiletypeSql size={"4em"} />
                <span>SQL</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiMongodb color={"#589636"} size={"4em"} />
                <span>MongoDB</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiPython color={"#4584b6"} size={"4em"} />
                <span>Python</span>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center fw-bold p-3">
                <SiGo color={"#29BEB0"} size={"4em"} />
                <span>Go</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
