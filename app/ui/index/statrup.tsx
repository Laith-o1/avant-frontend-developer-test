'use client';
// startup section
import Card from "../utils/card";
export default function Startup() {
    return (
        <section className="relative bg-hero-pattern bg-[url('/images/desktopbg.svg')] bg-cover bg-center bg-[#191AFE] w-screen h-screen sm:h-fit">
            {/* desktop version */}
            <div className="hidden sm:block">
                <div className="pt-20 pb-10">
                    <p className="ml-36 text-white font-bold text-5xl text-left">
                        Get started on your startup <br />
                        journey with
                        the right investments
                    </p>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src="/images/bluText.png" alt="cardLogo" className="ml-36 h-[32rem]" />
                    </div>
                    <div>
                        <div className="flex flex-row space-x-2 ml-36">
                            <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                                <p className="mt-5">
                                    Abusus enim multitudine hominumq <br />
                                    am tran quillis in rebus diutius rexit <br />
                                    ex agrestibus habiitudine hominum
                                </p>
                            </Card>

                            <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                                <p className="mt-5">
                                    Abusus enim multitudine hominumq <br />
                                    am tran quillis in rebus diutius rexit <br />
                                    ex agrestibus habiitudine hominum
                                </p>
                            </Card>
                        </div>
                        <div className="flex flex-row space-x-2 ml-36">
                            <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                                <p className="mt-5">
                                    Abusus enim multitudine hominumq <br />
                                    am tran quillis in rebus diutius rexit <br />
                                    ex agrestibus habiitudine hominum
                                </p>
                            </Card>
                            <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                                <p className="mt-5">
                                    Abusus enim multitudine hominumq <br />
                                    am tran quillis in rebus diutius rexit <br />
                                    ex agrestibus habiitudine hominum
                                </p>
                            </Card>
                        </div>
                        <div className="w-10 h-10">

                        </div>
                    </div>
                </div>
            </div>
            {/* mobile version  */}
            <div className="ml-4 pt-10 pb-5 sm:hidden">
                <p className="text-white font-bold text-3xl">
                    Get started on your <br />
                    startup journey with <br />
                    the right investments
                </p>
            </div>
            <div className="overflow-x-auto sm:hidden">
                <div className="flex w-[1200px] space-x-4">
                    <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                        <p className="mt-5">
                            Abusus enim multitudine hominumq <br />
                            am tran quillis in rebus diutius rexit <br />
                            ex agrestibus habiitudine hominum
                        </p>
                    </Card>
                    <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                        <p className="mt-5">
                            Abusus enim multitudine hominumq <br />
                            am tran quillis in rebus diutius rexit <br />
                            ex agrestibus habiitudine hominum
                        </p>
                    </Card>
                    <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                        <p className="mt-5">
                            Abusus enim multitudine hominumq <br />
                            am tran quillis in rebus diutius rexit <br />
                            ex agrestibus habiitudine hominum
                        </p>
                    </Card>
                    <Card title="Increase Value
for Startup" bgColor="white" brColor="white" textColor="black" imgSrc="/images/cardLogo.svg">
                        <p className="mt-5">
                            Abusus enim multitudine hominumq <br />
                            am tran quillis in rebus diutius rexit <br />
                            ex agrestibus habiitudine hominum
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
}