'use client';
// the footer component
export default function Footer() {
    return (
        <footer className="w-full">
            {/* mobile footer */}
            <div className="h-fit bg-[#010521] text-white flex justify-center pt-56 -z-10 sm:hidden">
                <div className="flex flex-col mb-10  space-y-4">
                <img src="/images/footerLogo.svg" alt="logo" className=" w-12 h-12 mx-auto" />
                <img src="/images/footerText.svg" alt="logo" className="mx-auto" />
                <p>© 2024 Nexus Creative All rights reserved</p>
                </div>
            </div>
            {/* desktop footer */}
            <div className="hidden sm:flex flex-row justify-center py-20  space-x-32 bg-[#010521] text-white pt-16">
                <div></div>
                <div className="flex flex-col space-y-4">
                <div className="flex flex-row opacity-50">
                    <img src="/images/footerLogo.svg" alt="logo" className=" w-12 h-12 mx-auto mr-4" />
                    <img src="/images/footerText.svg" alt="logo" className="mx-auto" />
                    
                </div>
                <p className="text-gray-500">Non ergo erunt homines deliciis diffluentesendi <br />
si quando de amicitia, quam nec usu ntioneha <br />
rum fidem atque hominu</p>
                <p className="text-center">© 2024 Nexus Creative All rights reserved</p>
                </div>
                <div className="w-20 h-1">

                </div>
                <div>
                    <p className="font-bold mb-4">HOME</p>
                    <p>Home</p>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Contact</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <p className="font-bold mb-4">ABOUT</p>
                    <p>FAQ</p>
                    <p>Terms & conditions</p>
                    <p>Privacy policy</p>
                    <p>Cookies</p>
            </div>
            <div>
                <p className="font-bold mb-4">CONTACT US</p>
                <a href="phone:+5 654 789 321" className="text-white">+5 654 789 321</a> <br />
                <a href="mailto:Nexus@creative.com " className="text-[#191AFE]"> Nexus@creative.com</a>
                </div>
            </div>
        </footer>
    );
}