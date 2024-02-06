import Link from "next/link";
import { Merriweather } from "next/font/google";

// NextJS fonts
const merriweather = Merriweather({
	subsets: ['latin'],
	weight: '700'
})


export default function DesktopUpperNav () {
	return (
		<section className="py-8 px-14 flex justify-between shadow-md items-center">
			<h2 className={` ${merriweather.className} text-xl text-primary`}>The Shepherd online school</h2>

			<article className="text-primary font-bold flex gap-8 items-center">
				<Link href="#">Programs</Link>
				<Link href="#">Tuition and Financial aid</Link>
				<Link href="#">Admissions</Link>
				<Link href="#">Why choose us ?</Link>
				<Link href="#" className="bg-yellow text-primary font-bold px-6 py-2 rounded-full">Request information</Link>
			</article>
		</section>
	)
}