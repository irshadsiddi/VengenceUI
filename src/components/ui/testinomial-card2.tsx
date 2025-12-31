
import { cn } from "@/lib/utils";

import Link from "next/link";
import { FaTwitter } from "react-icons/fa";


interface TestimonialItem {

    /** Title displayed for the card */
    title: string;
    company?: string
    /** Description text for the card */
    description: string;
    /** Image URL/path for the card */
    image: string;
    /** Addidtional content like images or others */
    content?: React.ReactNode | string;
    big?: boolean
}


interface TestimonialsCardProps {
    /** Array of testimonial items to display */
    items: TestimonialItem[];
    /** Additional CSS classes for the container */
    className?: string;


}

export function TestimonialsCard2({ items, className }: TestimonialsCardProps) {

    return (
        <Link href='/'>
            {
                items?.length > 0 && items.map((el, idx) => {

                    return (

                        <div

                       
                        className={cn(" items-center justify-center md:p-4 w-44 md:w-60  relative overflow-hidden rounded-lg bg-foreground text-background px-2 md:px-8 py-3.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-95 cursor-pointer my-4 ", className ,
                            el.big == true && "h-80"
                        )}>
                            <div className="gap-4 my-4 border-b">
                                <div
                                    className=" grid  grid-cols-[1fr_1fr_1fr]  gap-2 md:gap-4    ">

                                    <div className="rounded-full relative overflow-hidden size-10"><img
                                        src={el.image}
                                        alt={`image + ${idx}`}
                                        className="w-full h-full object-cover"
                                        draggable={false}
                                    /></div>
                                    <div className="">
                                        <h1 className=" font-normal md:font-medium">{el.title}</h1>
                                        <p className="text-xs">{el.company}</p>
                                    </div>
                                    <div className=""><FaTwitter /></div>
                                </div>
                                <p className="py-2 md:py-4">{el.description}</p></div>
                        </div>
                    )
                })
            }
        </Link>
    )

}

export default TestimonialsCard2;
