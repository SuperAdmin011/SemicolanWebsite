import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
function Footer() {
    return (
        <footer className="w-full py-12 border-t">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4  text-zinc-700">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold">Ninestars</h2>
                        <div className="space-y-2 text-muted-foreground">
                            <p>No 405, Main street, Kaduruwela</p>
                            <p>Polannaruwa Sri Lanka</p>
                            <p>
                                <span className="font-semibold">Phone:</span>{" "}
                                +94 75 703 5587
                            </p>
                            <p>
                                <span className="font-semibold">Email:</span>{" "}
                                Semicolans@gmail.com
                            </p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-muted-foreground">
                            Useful Links
                        </h2>
                        <nav className="space-y-2">
                            <a
                                href="/"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                About us
                            </a>
                            <a
                                href="/services"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Services
                            </a>
                            <a
                                href="/terms"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Terms of service
                            </a>
                        </nav>
                    </div>

                    {/* Our Services */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-muted-foreground">
                            Our Services
                        </h2>
                        <nav className="space-y-2">
                            <a
                                href="#"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Semi Erp
                            </a>
                            <a
                                href="/services/web-development"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Semi Co
                            </a>
                            <a
                                href="/services/marketing"
                                className="block text-muted-foreground hover:text-primary"
                            >
                                Semi Gro
                            </a>
                        </nav>
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-muted-foreground">
                            Follow Us
                        </h2>
                        <p className="text-muted-foreground">
                            Transform your business with cutting-edge
                            technology. Follow us for insights!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="p-2 rounded-full border hover:bg-zinc-500"
                            >
                                <Twitter className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full border hover:bg-zinc-500"
                            >
                                <Facebook className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full border hover:bg-zinc-500"
                            >
                                <Instagram className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="#"
                                className="p-2 rounded-full border hover:bg-zinc-500"
                            >
                                <Linkedin className="h-5 w-5 text-muted-foreground" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 border-t bg-zinc-600 text-white">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-center h-14">
                        <div className="text-center text-sm">
                            <p>
                                © Copyright{" "}
                                <span className="font-semibold text-orange-500">
                                    Semicolans
                                </span>
                                . All Rights Reserved
                            </p>
                            <p>
                                Designed by{" "}
                                <a
                                    href="#"
                                    className="text-primary hover:underline"
                                >
                                    Frontman(Pvt)Ltd
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
