import Link from "next/link";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '700'
});

export default function DesktopUpperNav() {
    return (
        <section className="py-8 px-14 flex justify-between shadow-md items-center">
            <h2 className={`${merriweather.className} text-xl text-primary`}>The Shepherd Online School</h2>
            <article className="text-primary font-bold flex gap-8 items-center ">
                <Link href="https://j4m.c1b.myftpupload.com/courses/" className="btns hover:bg-gray-500" >Programs</Link>
                <Link href="#" className="btns hover:bg-gray-500">Tuition and Financial aid</Link>
                <Link href="#"className="btns hover:bg-gray-500">Admissions</Link>
                <Link href="https://j4m.c1b.myftpupload.com/about-us/"className="btns hover:bg-gray-500">Why choose us ?</Link>
                <Link href="#" className="bg-yellow text-primary font-bold px-6 py-2 rounded-full transition duration-500 hover:bg-primary hover:text-white">Request information</Link>
            </article>
        </section>
    )
}
