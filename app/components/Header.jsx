// Header image import
const headerImg = "https://img.freepik.com/free-photo/elegant-black-girl-winter-city_1157-19207.jpg?size=626&ext=jpg&ga=GA1.2.1664779127.1707813888&semt=ais";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    subsets: ['latin'],
    weight: '900'
});

export default function Header() {
    return (
        <header
            style={{
                position: 'relative',
                backgroundImage: `url(${headerImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: '500px', // You might need to adjust this value
            }}
            className="text-white font-bold p-16 relative"
        >

            <div className="bg-yellow px-10 py-2 text-primary w-full md:w-[250px] text-center font-light">Education is power</div>
            <h2 className={` ${inter.className} text-6xl leading-[5rem]`}>Ignite your passion <br /> for learning</h2>
            <p className="text-white font-light text-2xl mb-4">High-quality, globally accessible online education for everyone,<br /> regardless of location</p>
        	<Link href="#" className="px-6 py-2 bg-transparent border border-white rounded-full text-white my-8 transition duration-500 hover:text-black font-bold hover:bg-white">Get Started Today</Link>
        </header>
    )
}
