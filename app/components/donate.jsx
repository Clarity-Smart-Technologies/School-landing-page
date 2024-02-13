import React from 'react';
import Link from 'next/link';


export default function Donate()  {
    return (
        <section className="relative py-12 overflow-hidden bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="absolute bottom-0 transform -translate-x-1/2 translate-y-96 lg:translate-y-80 left-1/2">
                <svg className="blur-3xl filter" style={{ filter: 'blur(64px)' }} width="643" height="408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z" fill="url(#a)" />
                    <defs>
                        <linearGradient id="a" x1="663.766" y1="168.785" x2="303.65" y2="469.667" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" style={{ stopColor: 'var(--color-cyan-500)' }} />
                            <stop offset="100%" style={{ stopColor: 'var(--color-purple-500)' }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
            </div>

            <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Support Education at The Shepherd International School</h2>

                    <div className="grid grid-cols-1 px-12 mt-12 md:px-0 gap-y-8 md:grid-cols-3 sm:mt-16 lg:mt-20 xl:mt-24">
                        <div className="md:pr-8 lg:pr-12">
                            <h3 className="text-2xl font-normal text-white">Discover New Ideas for Business</h3>
                            <p className="mt-4 text-base font-normal text-gray-400">Support innovative learning methods and curriculum development.</p>
                        </div>

                        <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

                        <div className="md:border-gray-900 md:border-l lg:px-12 md:px-8">
                            <h3 className="text-2xl font-normal text-white">Find better opportunities quickly</h3>
                            <p className="mt-4 text-base font-normal text-gray-400">Help students explore diverse career paths through mentorship programs.</p>
                        </div>

                        <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

                        <div className="md:border-gray-900 md:border-l lg:pl-12 md:pl-8">
                            <h3 className="text-2xl font-normal text-white">Empower Growth and Development</h3>
                            <p className="mt-4 text-base font-normal text-gray-400">Contribute to scholarships and financial aid programs for underprivileged students.</p>
                        </div>
                    </div>

                    <div className="w-full h-px mt-8 bg-gradient-to-r from-cyan-500 to-purple-500 sm:mt-12"></div>

                    <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
                        <p className="max-w-xl mx-auto text-xl font-normal text-white sm:text-2xl lg:text-3xl lg:max-w-none">Your donation can make a difference. Support our mission to provide quality education to students worldwide.</p>
                        <div className="mt-12">
                            <Link href="#" title="" className="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150" role="button"> Donate Now </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
