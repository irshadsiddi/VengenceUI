'use client'
import TestimonialsCard2 from "@/components/ui/testinomial-card2";
import { motion } from "framer-motion";


const demoItems = [
    {
        
        title: "Mountain Landscape",
        company: 'abc',
        description: "Beautiful mountain scenery with snow-capped peaks.",
        image: "/Avatar11.jpg",
    },
    {
        
        title: "Abstract Art",
        description: "A stunning piece of modern abstract artwork.",
        image: "/Avatar6.jpg",
        // big: true
    },
    {
       
        title: "Nature Photography",
        description: "Capturing the essence of natural beauty.",
        image: "/186330c41b3d12d96bdaa03e0c0db30d.jpg",
    },
    {
    
        title: "Digital Creation",
        description: "Innovative digital art and design concepts.",
        image: "/f318d62afa39731a0a371388d400a773.jpg",
    },
];

export const TestimonialSection = ()=>{
return(
    <div className="flex items-baseline-last justify-center  min-h-[100dvh] sticky top-0 my-10 gap-2 md:gap-4">
    <motion.div  whileInView={{
                            y: ['50%', '-10%']
                        }}
                        transition={{
                            repeat: Infinity , duration:8, ease:'linear'
                        }} className="grid grid-cols-[1fr] gap-4">
    <TestimonialsCard2 
                         items={demoItems}/>
    </motion.div>
    <motion.div
    whileInView={{
                            y: ['-30%', '80%']
                        }}
                        transition={{
                            repeat: Infinity , duration:8, ease:'linear'
                        }}
    
    className="grid grid-cols-[1fr] gap-y-4">
     <TestimonialsCard2 items={demoItems}/>
    </motion.div>
    </div>
)
}