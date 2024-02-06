import Link from "next/link";

export default function Programs () {
	const programs = []

	return (
		<section className="px-16 py-8 bg-primary">
			<h2 className="text-2xl text-white font-bold ">Find your program</h2>
			<p className="text-white my-8">Browse all <Link href="#">Degree programs</Link> or browse by <Link href="">Doctoral degrees</Link></p>
		</section>
	)
}