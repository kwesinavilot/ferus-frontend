import { Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => (
    <footer className="bg-transparent">
        <div className="bg-blue-600 py-6 text-white">
            <div className="container mx-auto px-8">
                <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-medium">Connect with us where you chill</h3>
                    <div className="flex gap-6">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container bg-white mx-auto px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div>
                    <h3 className="font-semibold mb-4 text-lg">About Us</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Company Overview</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Our Mission</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Leadership Team</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Careers</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">News & Updates</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Our Locations</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Accra High Street</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">East Legon</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Airport</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Bohye</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">View All Locations</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Insurance Plans</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Auto Insurance</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Home Insurance</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Life Insurance</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Business Insurance</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">View All Plans</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Resources</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Knowledge Base</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Claims Process</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Insurance Calculator</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">FAQ</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Blog</a>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4 text-lg">Contact</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Get a Quote</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Find an Agent</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Report a Claim</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">24/7 Support</a>
                        <a href="#" className="block text-gray-500 hover:text-blue-600">Office Locations</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mx-auto px-8 py-4 bg-gray-100 text-center text-gray-500">
            <p>© 2024 Svalinn. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;