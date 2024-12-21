import { Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/site/theme-toggle';

const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container mx-auto px-8 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">Svalinn</span>
            </div>

            <nav className="hidden md:flex space-x-6 items-center align-center justify-center">
                <a href="#" className="text-gray-600 hover:text-blue-900">Plans</a>
                <a href="#" className="text-gray-600 hover:text-blue-900">File A Claim</a>
                
                <ThemeToggle />

                <Button asChild className="text-white bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </nav>
        </div>
    </header>
);

export default Header;