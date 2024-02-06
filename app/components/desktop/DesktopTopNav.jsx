import Link from "next/link";

export default function DesktopTopNav () {
	return (
		<section className="bg-primary flex justify-end text-sm">
			<article className="text-white text-center flex gap-8 px-4">
				<Link href="#" className="p-2">Login</Link>
				<Link href="#" className="p-2">Alumni</Link>
				<Link href="#" className="p-2">International</Link>
				<Link href="#" className="p-2">Contact Us</Link>
				<Link href="#" className="p-2">Help Center</Link>
				<Link href="#" className="p-2">News and events</Link>
				<Link href="#" className="p-2">Call us</Link>
				<Link href="#" className="bg-blue-400 p-2 flex items-center border-r-2 border-l-2 border-white">Apply now</Link>
			</article>
		</section>
	)
}