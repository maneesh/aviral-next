import { Mail, Phone } from 'lucide-react';
import footerBgImg from '../../../public/images/footerbg.png';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="relative mt-16 rounded-t-3xl text-black overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={footerBgImg}
                    alt="Footer Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-t-3xl"
                />
                <div className="absolute inset-0 bg-white/90 backdrop-brightness-95 rounded-t-3xl" />
            </div>

            <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-10">
                {/* Logo and About */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">
                        aviral<span className="text-green-500">ai</span>
                    </h2>
                    <p className="text-sm text-gray-700 max-w-xs">
                        Simply Aimation provides a seamless learning experience to upskill and become industry ready.
                    </p>
                    <div className="flex mt-4 gap-3">
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm hover:bg-green-500 transition-colors"
                        >
                            <FaFacebookF size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm hover:bg-green-500 transition-colors"
                        >
                            <FaTwitter size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm hover:bg-green-500 transition-colors"
                        >
                            <FaInstagram size={16} />
                        </a>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm hover:bg-green-500 transition-colors"
                        >
                            <FaWhatsapp size={16} />
                        </a>
                    </div>

                </div>

                {/* Contact Info */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">Contact</h4>
                    <p className="text-sm text-gray-700 flex items-center gap-2 mb-1">
                        <Phone size={14} /> 123-45678900
                    </p>
                    <p className="text-sm text-gray-700 flex items-center gap-2">
                        <Mail size={14} /> info@aviralai.in
                    </p>
                </div>

                {/* Newsletter */}
                <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2">Subscribe to<br />Our newsletter</h4>
                    <p className="text-sm text-gray-700 mb-2">
                        Stay up to date with the latest news and releases.
                    </p>
                    <div className="flex w-full max-w-xs">
                        <input
                            type="email"
                            placeholder="Email"
                            className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm w-full"
                        />
                        <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
