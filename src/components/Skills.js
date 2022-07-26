import { skills } from "../data";
import { ChipIcon } from "@heroicons/react/solid";

export default function Skills() { 
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto lg:px-40 mb-4">
                <ChipIcon className="mx-auto w-10 mb-4 text-center mt-10" />
                <h1 className="title-font font-medium text-white text-3xl text-center mb-4">Skills/Technologies</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-center mb-9">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                    facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                    fuga dolore.
                </p>
                {skills.map((skill => (
                    <div className="container mx-auto p-1">
                        <label htmlFor={skill.name}>{skill.name}</label>
                        <div id={skill.name} className="w-full bg-gray-800 rounded mb-4">
                            <div className="bg-green-600 text-sm font-medium text-green-100 text-center p-0.5 leading-none rounded" style={{width: skill.confidence}}>
                                {skill.confidence}
                            </div>
                        </div>
                    </div>
                )))}
            </div>
        </section>
    );
}
