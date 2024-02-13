"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { useState } from "react";

const bg = "/Images/students.jpg";

const inter = Inter({
    subsets: ['latin'],
    weight: '700'
});

export default function Advantages() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
            className="flex justify-around p-20"
        >
            <div className="w-1/2"></div>
            <div className="w-1/2 grid gap-8">
                <h2 className={`text-5xl text-white ${inter.className}`}>Educate. Innovate. Learn Anywhere Online.</h2>
                <div className="bg-white shadow-lg text-black p-10">
                    <h2 className="font-semibold text-xl text-primary">Let us do this</h2>
                    <p className="my-4">Elevate yourself, your family, and your community with The Shepherd Online School. Begin your journey towards transformation with us, an online university tailored for working adults.</p>
                    <ul className="list-disc px-4 grid gap-2">
                        <li>Variable career paths</li>
                        <li>Video and text based learning</li>
                        <li>Incredible savings</li>
                    </ul>
					<Link
						className={`text-primary font-semibold border-b-2 border-primary my-4 transition duration-500 ${isHovered ? 'animate-bounce' : ''}`}
						href="https://j4m.c1b.myftpupload.com/about-us/"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						Why choose us ?
					</Link>
                </div>
            </div>
        </section>
    )
}
