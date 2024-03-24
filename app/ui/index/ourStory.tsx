'use client';
// seconed hero section
import MyButton from "../utils/myButton";
export default function OurStory() {
    return (
        <section className="relative bg-hero-pattern bg-cover bg-center bg-white h-fit flex items-center justify-center overflow-hidden sm:h-screen">
            <div className="flex flex-col space-x-5  sm:flex-row-reverse">
                <div className="sm:flex sm:items-center">
                    <div className="text-5xl font-bold space-y-10 mt-5  text-center sm:text-left" >
                        <div>
                            <p>Join a team where</p>
                            <p>innovation is an</p>
                            <p> expectation</p>
                        </div>
                        <div className="text-xl text-center space-y-2 sm:text-left">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley of type specimen book.
                            </p>
                            <p>
                            It has survived not only five centuries, but also the leap into electronic typesetting, <br /> remaining essentially unchanged. It was popularised in the 1960s with the release of <br /> Letraset sheets containing Lorem Ipsum passages.
                            </p>
                            <div>
                                <div className="mt-4 px-7 py-4">
                                <MyButton text="GET STARTED" bgColor="[#191AFE]" textColor="white" brColor="blue" />

                                </div>
                            </div>
                        </div>
                        <div className="h-5 w-5">

                        </div>
                    </div>
                </div>
                <div className="relative container mb-10">
                    <img className="w-[313.35px] h-[419.71px] mx-auto relative sm:w-[516px] sm:h-[650px]" src="/images/mainImage.png" alt="" />
                    <div className="absolute w-[313px] h-[419.71px] border-[#010521] border-2 -top-5 left-1 sm:w-[550px] sm:h-[650px] sm:left-20"></div>
                    {/* another box on bottom left corner only in desktop */}
                    <div className="hidden sm:block absolute w-[191px] h-[250px] border-[#191AFE] border-2 -bottom-12 right-28"></div>
                </div>
            </div>
        </section>
    );
}
