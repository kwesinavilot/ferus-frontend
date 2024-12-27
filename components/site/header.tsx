import { Shield } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/site/theme-toggle';
import { MainNav } from '@/components/site/nav-menu';

const Header = () => (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="md:container-fluid xl:container mx-auto px-8 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-xl font-bold">Svalinn</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
                <MainNav />
                <ThemeToggle />
                <Button asChild className="text-white bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
    </header>
);

export default Header;