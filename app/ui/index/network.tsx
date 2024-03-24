'use client';
import NetworkCard from "../utils/networkCard";


export default function Network() {
    return (
        <section className="bg-hero-pattern bg-cover bg-center bg-white h-fit">
            <div>
                <p className="font-bold text-3xl text-center sm:mb-20">
                    Join Our Network <br />
                    of Forward-Thinking
                    Investor
                </p>
            </div>
            <div className="flex flex-col sm:flex-row">
                <NetworkCard title="Investor Startups" content="Nexus Creative provides exclusive investment forindividuals and institutions looking to divers ify their . By our network, you gain access to a curated selection of high-potential startupss eeking funding." showCardCube={true} />
                <NetworkCard title="Business Scaling" content="Nexus Creative provides exclusive investment forindividuals and institutions looking to divers ify their . By our network, you gain access to a curated selection of high-potential startupss eeking funding." showCardCube={true} />
                {/* <div className="mx-auto sm:hidden">
                    <NetworkCard title="Join Our Network of Forward-Thinking Investors" content="" showCardCube={false}>
                        <MyButton text="GET STARTED" bgColor="white" textColor="black" brColor="blue" />
                    </NetworkCard>
                    </div> */}
            </div>
            {/* test */}
            {/* div with gridan */}
            {/* <div className="h-[421px] w-[394px] rounded bg-gradient-to-br from-black via-black to-white p-1 shadow-md">
               
            
                </div> */}

            
            {/* end test */}
            {/* lets get in touch section for desktop only */}
            <div className=" bg-[#010521] w-full sm:w-[80%] mx-auto p-10 mt-20">
                <p className="text-white flex justify-center mb-5 text-3xl"> Lets Get in Touch</p>
                {/* email form with full name email address what are you interested in {dropdown menu} message */}
                <div>
                    <form className="space-y-2 w-[80%] mx-auto">
                        <div className="flex flex-col sm:flex-row sm:space-x-4">
                            <input className="w-full sm:w-1/2 p-2 bg-[#010521] border border-gray-500" type="text" placeholder="Full Name" />
                            <input className="w-full sm:w-1/2 p-2 bg-[#010521] border border-gray-500" type="email" placeholder="Email Address" />
                        </div>
                        <select className="w-full p-2 bg-[#010521] border border-gray-500">
                            <option disabled  value="">What are you interested in?</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select>
                        <textarea className="w-full p-2 bg-[#010521] border border-gray-500" placeholder="Message"></textarea>
                        <button className="p-2 bg-white text-dark px-5 w-full">SEND</button>
                    </form>
                </div>
            </div>

        </section>
    );
}