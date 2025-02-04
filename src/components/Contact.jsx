import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

function Contact() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="grid gap-8 lg:grid-cols-2">
                {/* Contact Information */}
                <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                            <MapPin className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-600">
                                Address
                            </h3>
                            <p className="mt-1 text-gray-600">
                                No 405, Main street, Kaduruwela
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                            <Phone className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-600">
                                Call Us
                            </h3>
                            <p className="mt-1 text-gray-600">
                                +94 75 703 5587
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start space-x-2">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                            <Mail className="h-6 w-6 text-orange-500" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-zinc-600">
                                Email Us
                            </h3>
                            <p className="mt-1 text-gray-600">
                                Semicolans@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[250px] w-full overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120618.4645202218!2d81.03000957736994!3d7.9350124818342636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTM0JzA3LjIiTiA4McKwMjwnMzguNyJ!5e0!3m2!1sen!2s!4v1645645832297!5m2!1sen!2s&markers=color:red%7Clabel:S%7C7.9350124818342636,81.03000957736994"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="rounded-lg bg-white p-8">
                    <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-zinc-600"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-zinc-600"
                                >
                                    Your Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="subject"
                                className="block text-sm font-medium text-zinc-600"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                placeholder="subject"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-zinc-600"
                            >
                                Message
                            </label>
                            <textarea
                                placeholder="Write your message..."
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                rows="7"
                            />
                        </div>

                        <button className="px-4 py-2 bg-zinc-600 text-white rounded-md hover:bg-orange-600">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
              
        </div>
    );
}

export default Contact;
