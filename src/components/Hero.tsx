import { ArrowUpRight, Hand, } from "lucide-react";
import Link from "next/link";
import HoverButton from "./HoverButton";

export default function Hero() {


    const socialLinks = [
        {
            name: "LinkedIn",
            link: "",
        },
        {
            name: "GitHub",
            link: "",
        },
        {
            name: "Instagram",
            link: "",
        },
        {
            name: "Gmail",
            link: "",
        }
    ]


    return (
        <div className="flex flex-col items-start px-6 sm:px-10 md:px-[120px] lg:px-[140px] mt-24 sm:mt-32 lg:mt-44">
            <div className="flex items-center justify-center gap-2">
                <Hand className="text-(--highlight) wave" strokeWidth={2.25} />
                <span className="text-[16px]">Hey! It&apos;s me Tayseer,</span>
            </div>

            <h1 className="text-[2rem] sm:text-[2.75rem] font-clash leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl mt-[32px]">Building
                <span className="text-(--highlight)"> purposeful digital experiences </span>
                that captivate & empower users.
            </h1>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 mt-[32px]">
                <div className="h-px w-full md:w-[600px] bg-(--bg-700)"></div>
                <p className="text-[14px] sm:text-[16px] w-full md:w-[600px]">I craft purpose-driven digital experiences that are visually precise, highly engaging,
                    and accessible, helping businesses and projects achieve their goals and make an impact.
                </p>
            </div>

            <div className="mt-[32px] flex flex-col md:flex-row items-start md:items-center justify-between w-full md:gap-4 gap-8">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 sm:gap-4">
                    {socialLinks.map((item, index) => (
                        <Link
                            href={item.link}
                            key={index}
                            className="flex items-center justify-center gap-2 text-[12px] sm:text-[14px] uppercase hover:text-(--highlight)"
                        >
                            {item.name}
                            <ArrowUpRight size={16} />
                        </Link>
                    ))}
                </div>

                <HoverButton href="/about" name1="Know me better" name2="About me" />
            </div>
        </div>
    )
}
