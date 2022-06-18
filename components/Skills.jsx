import Image from "next/image";
import Link from "next/link";
import React from "react";

const skillList = [
    { name: "python", link: 'https://www.python.org/' },
    { name: "jupyter notebook", link: 'https://jupyter.org/' },
    { name: "html", link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: "css", link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'tailwind', link: 'https://tailwindcss.com/' },
    { name: "bash", link: 'https://www.gnu.org/software/bash/' },
    { name: "java", link: 'https://www.java.com/en/' },
    { name: "dart", link: 'https://dart.dev/' },
    { name: "rust", link: 'https://www.rust-lang.org/' },
    { name: 'javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: "pytorch", link: 'https://pytorch.org/' },
    { name: "pytorch lightning", link: 'https://www.pytorchlightning.ai/' },
    { name: "tensorflow", link: 'https://www.tensorflow.org/' },
    { name: "git", link: 'https://git-scm.com/' },
    { name: "gitlab", link: 'https://about.gitlab.com/' },
    { name: "github", link: 'https://github.com/' },
    { name: "vscode", link: 'https://code.visualstudio.com/' },
    { name: "pycharm", link: 'https://www.jetbrains.com/pycharm/' },
    { name: "docker", link: 'https://www.docker.com/' },
    { name: "flutter", link: 'https://flutter.dev/' },
];

const Skills = () => {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">
                    Skills
                </p>
                <h2 className="py-4">What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillList.map((skill) => (
                        <Link href={`${skill.link}`}>
                            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 cursor-pointer">
                                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <Image
                                            alt={skill.name}
                                            src={`/../public/assets/skills/${skill.name}.png`}
                                            width="64px"
                                            height="64px"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <h3 className="uppercase">{skill.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Skills;
