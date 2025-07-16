import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
} from 'react-icons/fa';


interface FooterProps{
  footerDetails : {type: 'text' | 'image';
  data: string;} []
}

const Footer:React.FC<FooterProps> = ({footerDetails}) => {
    const footerbg = footerDetails?.[0]?.data 
     //console.log(footerDetails);
     
    return (
        <footer className="relative z-10 mt-0 overflow-hidden">
            <div className="absolute inset-0 bg-[#0B0E0D] z-0" />
            {footerbg && (
                <Image
                src={footerbg}
                alt="Footer Background"
                fill
                className="object-cover z-0"
                priority
            />
            )}
            

            <div className="relative z-10 flex items-center justify-center min-h-[600px] px-6 py-12 sm:py-20">
                <div className="w-full pt-[133px] max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left mt-95">
                    {/* Logo + About */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 drop-shadow-md text-black">
                            {footerDetails?.[1]?.data}<span className="text-green-500">{footerDetails?.[2]?.data}</span>
                        </h2>
                        <p className="text-sm text-black max-w-xs mx-auto lg:mx-0 mt-2 drop-shadow">
                            {footerDetails?.[3]?.data}
                        </p>
                        <div className="flex mt-6 gap-3 justify-center lg:justify-start">
                            {[FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm hover:bg-green-500 transition-colors"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-black drop-shadow-md">{footerDetails?.[4]?.data}</h4>
                        <p className="text-sm flex items-center justify-center lg:justify-start gap-2 mb-2 text-black drop-shadow">
                            <Phone size={14} />{footerDetails?.[5]?.data}
                        </p>
                        <p className="text-sm flex items-center justify-center lg:justify-start gap-2 text-black drop-shadow">
                            <Mail size={14} /> {footerDetails?.[6]?.data}
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-2 text-black drop-shadow-md">
                           {footerDetails?.[7]?.data}<br />{footerDetails?.[8]?.data}
                        </h4>
                        <p className="text-sm mb-3 max-w-xs mx-auto lg:mx-0 text-black drop-shadow">
                            {footerDetails?.[9]?.data}
                        </p>
                        <div className="flex w-full max-w-xs mx-auto lg:mx-0">
                            <input
                                type="email"
                                placeholder="Email"
                                className="px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none text-sm w-full text-black"
                            />
                            <button className="bg-green-500 text-black px-4 py-2 rounded-r-md hover:bg-green-600 text-sm">
                               {footerDetails?.[10]?.data}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
