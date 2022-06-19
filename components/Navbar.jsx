import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRouter } from 'next/router';
import { contactItems, navItems } from '../public/assets/data';
import mainImg from '../public/assets/navLogoTransparent.png';



const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter();

    useEffect(() => {
        if (
            router.asPath == '/projects/'
        ) {
            setNavBg('transparent')
            setLinkColor('#ecf0f3')
        } else {
            setNavBg('#ecf0f3')
            setLinkColor('#1f2937')
        }

    }, [router])

    const handelNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handelShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        }
        window.addEventListener('scroll', handelShadow);
    }, [])

    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? "fixed w-full h-20 shadow-xl z-[100]" : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Link href='/'>
                    <Image
                        src={mainImg}
                        alt="/"
                        width="100"
                        height="100"
                    />
                </Link>
                <div>
                    <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
                        {navItems.map((navItem, idx) => (
                            <Link key={idx} href={`${navItem.link}`}>
                                <li className="ml-10 text-sm uppercase hover:border-b">
                                    {navItem.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div onClick={handelNav} className="md:hidden ">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0  top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                            : "fixed left-[-100%]  top-0 p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src={mainImg}
                                alt="/"
                                width="75"
                                height="75"
                            />
                            <div
                                onClick={handelNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[98%] py-4">
                                A Deep Learning Engineer{" "}
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            {navItems.map((navItem, idx) => (
                                <Link key={idx} href={`${navItem.link}`}>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm">{navItem.name}</li>
                                </Link>
                            ))}
                        </ul>
                        <div className="pt-40 ">
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Let&apos;s connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                {contactItems.map((Item, idx) => (
                                    <Link key={idx} href={`${Item.link}`}>
                                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                            <Item.icon />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
