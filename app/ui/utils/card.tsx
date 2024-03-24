'use client';
export default function Card({
   title,
   children,
   bgColor,
   brColor,
   textColor,
   imgSrc,
}: {
   title: string;
   children: React.ReactNode;
   bgColor: string;
   brColor: string;
   textColor: string;
   imgSrc?: string;
}) {
   return (
      <div className={`h-fit w-fit rounded bg-gradient-to-br from-${brColor} via-${brColor} to-white p-1 shadow-md`}>
         <div className={`flex flex-col h-[419px] w-[392px] bg-${bgColor}`}>
            {imgSrc ? (
               <div className="bg-[#191AFE] w-fit mt-5 ml-5 rounded-full p-4">
                  <img className="w-20 h-20" src={imgSrc} alt={title} />
               </div>
            ) : (
               <div className="h-20 w-10"></div>
            )}
            <div className={`text-${textColor} ml-2 text-4xl`}>{title}</div>
            <div className={`text-${textColor} text-xl text-center space-y-2 mx-auto`}>{children}</div>
         </div>
      </div>
   );
}