import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../assets/banner.png";
import features from "../assets/features.png";

const Home = () => {
    return (
        <div className="bg-white" id="/home">
            <div className="py-2 lg:px-14 max-w-screen-2xl mx-auto min-h-[80vh] h-[80vh]">
                <Carousel className="container mx-auto px-4 py-6">
                    <div className="my-12 md:my-8 py-4 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                        <div>
                            <img
                                className="w-full h-auto object-cover"
                                src={banner}
                                alt=""
                            />
                        </div>
                        {/* herotext */}
                        <div className="md:w-1/2">
                            <h1 className="text-4xl font-semibold mb-2 text-zinc-600 md:w-3/4 leading-snug">
                                We Provide IT Services & Product for
                                <span className=" text-orange-600 leading-snug ml-2">
                                    More than 10 years
                                </span>
                            </h1>
                            <p className="text-lg text-gray-600 text-base mb-8">
                                We provide comprehensive IT solutions, services,
                                and products to meet your business needs.
                            </p>
                            <button className="rounded-full px-7 py-2 bg-zinc-600 text-white  hover:bg-gray-800 transition duration-300">
                                Register
                            </button>
                        </div>
                    </div>
                    <div className="my-12 md:my-8 py-4 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
                        {/* right Content */}
                        <div className=" md:w-1/2 text-3xl font-semibold mb-2 text-zinc-600  leading-snug items-center">
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-zinc-600">
                                        Powerful online protection
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-zinc-600">
                                        Internet without borders
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-zinc-600">
                                        Supercharged VPN
                                    </span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="p-1 rounded-full bg-green-100">
                                        <svg
                                            className="w-5 h-5 text-green-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                    </div>
                                    <span className="text-zinc-600">
                                        No specific time limits
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Left Content */}
                        <div className="md:w-1/2">
                            <div>
                                <img
                                    className="w-full h-auto object-cover"
                                    src={features}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;
