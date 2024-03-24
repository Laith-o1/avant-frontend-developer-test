'use client';
// Discover section
import Image from "next/image";
export default function Discover() {
    return (
        <section className="relative bg-hero-pattern bg-cover bg-center bg-white h-screen ">
            <div className="grid grid-flow-col grid-cols-2 text-center mt-10 sm:flex sm:justify-center sm:space-x-5">
                <div className="sm:flex flex-row space-x-5">
                    <div className="">
                        <p className="text-5xl font-bold">10K</p>
                        <p className="">Launched Startups
                            Investment</p>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <p className="text-5xl font-bold">10K</p>
                        <p className="">Launched Startups
                            Investment</p>
                    </div>
                </div>
                <div className="sm:flex flex-row space-x-5">
                    <div className="">
                        <p className="text-5xl font-bold">5K</p>
                        <p className="">Launched Startups
                            Investment</p>
                    </div>
                    <div className="mt-10 sm:mt-0">
                        <p className="text-5xl font-bold">6K</p>
                        <p className="">Launched Startups
                            Investment</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:w-[80%] sm:mx-auto">
            <div className="text-center mt-10 font-bold text-3xl">
                <p>
                    Discover the Rising <br />
                    Stars We've Backed
                </p>
            </div>
            <div className="mt-10 flex justify-center">
                Abusus enim multitudine hominum quam tran in <br />
                rebus diutius rexiti ex agrestibus habi itudimnum <br />
                busus enim multitudine hominum quam traisin re <br />
                bus diutius rexi
            </div>
            </div>
            <div>
                <img className="mx-auto mt-10" src="images/diverse-people-working-office.png" alt="diverse-people-working-office" />
            </div>
            {/* images wrapper scrollabe on mobile */}
            <div className="flex justify-center mt-10 overflow-auto px-2">
                <div className="flex space-x-4 sm:space-x-28">
                <img src="images/stripe.png" className="opacity-50 h-10" alt="stripe" />
                <img src="images/paypal.png" className="opacity-50 h-7 my-auto" alt="paypal" />
                <img src="images/stripe.png" className="opacity-50 h-10" alt="stripe" />
                <img src="images/paypal.png" className="opacity-50 h-7 my-auto" alt="paypal" />
                <img src="images/stripe.png" className="opacity-50 h-10" alt="stripe" />
                <img src="images/paypal.png" className="opacity-50 h-7 my-auto" alt="paypal" />
                <img src="images/stripe.png" className="opacity-50 h-10" alt="stripe" />
                </div>
                </div>


 
        </section>
    );
}