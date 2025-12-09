"use client";

import { AnimatedHero } from "@/components/ui/animated-hero";

export function AnimatedHeroDemo() {
    return (
        <div className="relative flex h-[800px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background">
            <AnimatedHero title="YOUR TITLE" showThemeToggle={false} />
        </div>
    );
}
