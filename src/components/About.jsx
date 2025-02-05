import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const people = [
    {
        id: "1",
        name: "Bonnie Green",
        role: "Visual Designer",
        imageUrl: "/src/assets/people/p2.jpg",
    },
    {
        id: "2",
        name: "John Doe",
        role: "Frontend Developer",
        imageUrl: "/src/assets/people/p1.jpg",
    },
    {
        id: "3",
        name: "Jane Smith",
        role: "UX Designer",
        imageUrl: "/src/assets/people/p3.jpg",
    },
    {
        id: "4",
        name: "Mike Johnson",
        role: "Backend Developer",
        imageUrl: "/src/assets/people/p4.jpg",
    },
    {
        id: "5",
        name: "Sarah Brown",
        role: "Project Manager",
        imageUrl: "/src/assets/people/p5.jpg",
    },
];

export default function About() {
    const controls = people.map(() => useAnimation());

    useEffect(() => {
        const animateCards = async () => {
            // Initial rotation of all cards together
            await Promise.all(
                controls.map((control) =>
                    control.start({ rotateY: 360, transition: { duration: 1 } })
                )
            );

            // Wait for 5 seconds after initial rotation
            await new Promise((resolve) => setTimeout(resolve, 5000));

            // Individual card rotations
            for (let i = 0; i < people.length; i++) {
                await controls[i].start({
                    rotateY: 720,
                    transition: { duration: 2, ease: "easeInOut" },
                });

                // Wait for 5 seconds before the next card (if not the last card)
                if (i < people.length - 1) {
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                }
            }
        };

        animateCards();
    }, [controls]); // Added controls to the dependency array

    return (
        <div className="container mx-auto px-4 py-6">
            <h2 className="text-4xl text-orange-500 text-center my-8">
                About Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {people.map((person, index) => (
                    <motion.div
                        key={person.id}
                        className="w-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                        animate={controls[index]}
                    >
                        <div className="flex flex-col items-center py-6 px-4">
                            <img
                                className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
                                src={
                                    person.imageUrl ||
                                    "/placeholder.svg?height=96&width=96"
                                }
                                alt={`${person.name}'s profile`}
                            />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {person.name}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {person.role}
                            </span>
                            <div className="flex mt-4 space-x-3">
                                <a
                                    href="#"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-zinc-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Connect
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
