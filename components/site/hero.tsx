import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

const Hero = () => (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                How can we help?
            </h1>
            <div className="max-w-2xl mx-auto relative">
                <Input
                    type="text"
                    placeholder="Type your question here"
                    className="w-full h-12 pl-12 pr-4 rounded-lg"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-4 text-center text-gray-600">
                Common topics:
                <a href="#" className="text-blue-600 mx-2 hover:underline">Setup Guide</a>
                <a href="#" className="text-blue-600 mx-2 hover:underline">Payment Options</a>
                <a href="#" className="text-blue-600 mx-2 hover:underline">Support</a>
            </div>
        </div>
    </section>
);

export default Hero;