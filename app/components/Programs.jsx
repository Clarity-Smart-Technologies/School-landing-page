import Link from "next/link";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaHandsHelping } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaWpexplorer } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	subsets: ['latin'],
	weight: '300'
})

export default function Programs () {
	const programs = [
		{
			name: "Nursing",
			icon: <LiaUserNurseSolid size={50} />,
			dest: ""
		},
		{
			name: "Counseling",
			icon: <FaHandsHelping size={50} />,
			dest: ""
		},
		{
			name: "Psychology",
			icon: <GiBrain size={50} />,
			dest: ""
		},
		{
			name: "Education",
			icon: <FaUserGraduate size={50} />,
			dest: ""
		},
		{
			name: "Social Work",
			icon: <MdFamilyRestroom size={50} />,
			dest: ""

		},
		{
			name: "Explore all",
			icon: <FaWpexplorer size={50} />,
			dest: ""

		}
	]

	return (
		<section className="px-16 py-8 bg-primary flex justify-between">
			<div>
				<h2 className="text-2xl text-white font-bold ">Find your program</h2>

				<input type="search" placeholder="Search programs" className={`${poppins.className} my-4 bg-white placeholder:text-blue-500 border-b-4 border-blue-500 outline-0 focus:border-primary focus:border-b-4 pl-6 pr-24 py-2`} />

				<p className="text-white my-8">Browse all <Link href="#" className="link">Degree programs</Link> or browse by <Link href="#" className="link">Doctoral degrees</Link></p>
			</div>

			<div className="grid grid-cols-3 gap-6">
				{
					programs.map(program => {
						const {name, icon, dest} = program;
						return (
							<Link key={Math.random()} href={dest} className="bg-white p-12 rounded-lg text-primary grid justify-center items-center gap-4">
								<div className="flex justify-center items-center">{icon}</div>
								<h2>{name}</h2>
							</Link>
						)
					})
				}
			</div>
		</section>
	)
}