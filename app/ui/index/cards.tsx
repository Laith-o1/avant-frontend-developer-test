'use client';
import Card from "../utils/card";
import MyButton from "../utils/myButton";

export default function Cards() {
    return (
        <section className="bg-hero-pattern bg-cover bg-center bg-white h-screen w-screen">
            <div className="flex flex-col space-y-4">
                <div className="mt-5 text-left" >
                    <p className="text-2xl font-bold sm:text-3xl">
                        Cards are an essential <br /> Element of a clear User Interface
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <div className="flex w-[1200px] space-x-4 m-5 mx-5">
                        <Card title="The First Card" bgColor="[#191AFE]" brColor="bBlu" textColor="white">
                            <p>It is a long established fact that a reader will be
                                distracted by the readable content of a page when
                                looking at its layout. </p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <div className="flex justify-start ml-5">
                                <MyButton text="GET STARTED" bgColor="white" textColor="[#191AFE]" brColor="" />
                                </div>
                        </Card>
                        <Card title="Yet another one" bgColor="white" brColor="black" textColor="black">
                            <p>The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters, as opposed
                                to using 'Content here, content here', </p>
                                <br />
                                <br />
                                <br />
                                
                                <div className="flex justify-start ml-5">
                                <MyButton text="GET STARTED" bgColor="[#191AFE]" textColor="white" brColor="blue" />
                                </div>
                        </Card>
                        <Card title="We really like these" bgColor="white" brColor="black" textColor="black">
                            <p>making it look like readable English. Many desktop
                                publishing packages and web page editors now use
                                Lorem Ipsum as their default model text, and a search
                                for 'lorem ipsum' will.</p>
                                <br />
                                <br />
                                
                                <div className="flex justify-start ml-5">
                                <MyButton text="GET STARTED" bgColor="[#191AFE]" textColor="white" brColor="blue" />
                                </div>
                        </Card>
                    </div>
                </div>
            </div>

        </section>
    );
}