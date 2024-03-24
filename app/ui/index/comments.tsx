'use client';
// cmooents section
export default function Comments() {
    return (
        <section className="relative bg-hero-pattern bg-cover bg-center bg-white h-fit pb-20 ">
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:w-[80%] sm:mx-auto sm:mt-20">
                <p className="ml-2 font-bold text-3xl">
                    What our Invesors are <br />
                    saying
                </p>
                <p className="ml-2">
                    Abusus enim multitudine hominum quam tran in <br />
                    rebus diutius rexiti ex agrestibus habi itudimnum <br />
                    bus diutius rexi
                </p>
            </div>
            <div className="flex flex-col ml-2 ">
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between sm:w-[80%] sm:mx-auto sm:mt-20">
                        <div className="flex flex-col sm:flex-row sm:space-x-5">
                            <img src="images/quotes.png" className="opacity-50 w-16 h-16 mb-4" alt="" />
                            <div className="flex flex-row h-fit my-auto">
                                <img src="images/star.png" alt="star" />
                                <img src="images/star.png" alt="star" />
                                <img src="images/star.png" alt="star" />
                                <img src="images/star.png" alt="star" />
                                <img src="images/star.png" alt="star" />
                                <p className="font-bold ml-2 my-auto">5.0</p>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-2 my-auto">
                            <div className="bg-[#191AFE] h-9 rounded-full p-3">
                                <img src="images/left-arraw.png" alt="" />
                            </div>
                            <div className="bg-[#010521] h-9 rounded-full p-3">
                                <img src="images/right-arraw.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="ml-2 mt-4 sm:w-[80%] sm:mx-auto">
                        <p className="sm:text-3xl">“With <label className="text-[#191AFE] font-bold">Nexus Creative</label> the results
                            are very satisfying. Wrapped
                            with Hight quality and innovative
                            design that makes a surge of
                            visitors on my Start Up”</p>
                    </div>
                    <div className="flex flex-row space-x-4 mt-4 sm:w-[80%] sm:mx-auto">
                        <div>
                            <img src="/images/user.png" className="rounded-full" alt="" />
                        </div>
                        <div className="flex flex-col my-auto">
                            <p className="font-bold">Moss Smith</p>
                            <p className="text-gray-500">Business Manager</p>
                            </div>
                    </div>

                </div>
            </div>
        </section>
    );
}