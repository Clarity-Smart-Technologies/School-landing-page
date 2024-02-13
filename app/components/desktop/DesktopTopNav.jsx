import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: '700'
});
const donate = "../donate"
export default function DesktopTopNav() {
    return (
        <section className="bg-primary flex justify-end text-sm">
            <article className="text-white text-center flex gap-8 px-4 ">
                <Link href="#" className="p-2 hover:bg-gray-700">Login</Link>
                <Link  href={donate} className="p-2 hover:bg-gray-700">Donate</Link>
                <Link href="#" className="p-2 hover:bg-gray-700">International</Link>

                <Link href="#" className="p-2 hover:bg-gray-700">Help Center</Link>
                <Link href="#" className="p-2 hover:bg-gray-700">News and events</Link>
                <Link href="https://j4m.c1b.myftpupload.com/contact-us/" className="p-2 hover:bg-gray-700">Call us</Link>
                <Link href="#" className="bg-blue-400 p-2 flex items-center border-r-2 border-l-2 border-white transition duration-500 hover:text-black hover:bg-white rounded-full font-bold">Apply now</Link>
            </article>
        </section>
    )
}
