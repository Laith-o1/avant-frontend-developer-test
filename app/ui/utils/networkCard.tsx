'use client';

export default function NetworkCard({
    title,
    content,
    children,
    showCardCube,
 }: {
    title: string;
    content: string;
    children?: React.ReactNode;
    showCardCube?: boolean;
 }) {
    return (
        <div className="mx-auto">
            <div className="h-fit w-fit p-1">
                <div className="relative flex flex-col h-[419px] w-[392px] bg-[#010521] overflow-hidden">
                    <div className="text-white ml-2 text-center mt-20 text-4xl">{title}</div>
                    <div className="text-white text-lg w-[80%] mx-auto mt-4 text-center space-y-2">{content}</div>
                    <div className="mx-auto mt-4">
                        {children}
                    </div>
                    {showCardCube && <img src="/images/cardCube.png" alt="network" className="absolute h-64 -bottom-9 right-0 " />}
                </div>
            </div>
        </div>
    );
}