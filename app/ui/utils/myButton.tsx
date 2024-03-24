'use client';
interface MyButtonProps {
    text: string;
    bgColor: string;
    textColor: string;
    brColor: string;
}

export default function MyButton({ text, bgColor, textColor, brColor }: MyButtonProps) {
    return (
        <button
            className={`bg-${bgColor} text-${textColor} text-sm font-bold border-2 border-${brColor} rounded-sm p-2 w-[145px] h-[54px]`}
        >
            {text}
        </button>
    );
}