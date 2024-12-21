const Footer = () => (
    <footer className="bg-white border-t">
        <div className="container mx-auto px-8 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="font-semibold mb-4">Company</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-600 hover:text-gray-900">About</a>
                        <a href="#" className="block text-gray-600 hover:text-gray-900">Blog</a>
                        <a href="#" className="block text-gray-600 hover:text-gray-900">Careers</a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold mb-4">Resources</h3>
                    <div className="space-y-2">
                        <a href="#" className="block text-gray-600 hover:text-gray-900">Help Center</a>
                        <a href="#" className="block text-gray-600 hover:text-gray-900">Support</a>
                        <a href="#" className="block text-gray-600 hover:text-gray-900">Contact</a>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 pt-8 border-t text-center text-gray-600">
                <p>© 2024 Svalinn. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;