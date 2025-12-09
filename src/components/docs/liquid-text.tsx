"use client";

import { LiquidText } from "@/components/ui/liquid-text";

export function LiquidTextDemo() {
    return (
        <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background">
            <LiquidText text="Hover Me" fontSize={220} className="h-[600px]" />
        </div>
    );
}

