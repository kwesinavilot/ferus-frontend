import { Shield } from 'lucide-react';

const Header = () => (
    <header className="w-full border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">Svalinn</span>
            </div>
            <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900">Company</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">For Families</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Safety Center</a>
                <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
            </nav>
        </div>
    </header>
);

export default Header;