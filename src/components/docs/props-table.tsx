"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PropDef {
    prop: string
    type: string
    defaultValue?: string
    description: string
}

interface PropsTableProps {
    data: PropDef[]
    title?: string
    className?: string
}

export function PropsTable({ data, title, className }: PropsTableProps) {
    return (
        <div className={cn("my-6 flex flex-col space-y-4", className)}>
            {title && (
                <h4 className="font-heading text-lg font-bold tracking-tight mt-6 mb-2">{title}</h4>
            )}
            <div className="relative w-full overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-left text-sm">
                    <thead className="bg-neutral-100/50 dark:bg-neutral-900/50">
                        <tr className="border-b border-neutral-200 dark:border-neutral-800">
                            <th className="h-12 px-4 text-left align-middle font-semibold text-muted-foreground whitespace-nowrap w-[150px]">Prop</th>
                            <th className="h-12 px-4 text-left align-middle font-semibold text-muted-foreground whitespace-nowrap w-[150px]">Type</th>
                            <th className="h-12 px-4 text-left align-middle font-semibold text-muted-foreground whitespace-nowrap w-[150px]">Default</th>
                            <th className="h-12 px-4 text-left align-middle font-semibold text-muted-foreground whitespace-nowrap">Description</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800 bg-white dark:bg-transparent">
                        {data.map((item, index) => (
                            <tr key={index} className="transition-colors hover:bg-neutral-50/50 dark:hover:bg-neutral-900/40">
                                <td className="p-4 align-middle font-mono text-sm font-medium whitespace-nowrap">
                                    {item.prop}
                                </td>
                                <td className="p-4 align-middle">
                                    <code className="relative rounded bg-neutral-100 dark:bg-neutral-800 px-[0.5rem] py-[0.2rem] font-mono text-sm text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 whitespace-nowrap">
                                        {item.type}
                                    </code>
                                </td>
                                <td className="p-4 align-middle">
                                    {item.defaultValue ? (
                                        <code className="relative rounded bg-neutral-100 dark:bg-neutral-800 px-[0.5rem] py-[0.2rem] font-mono text-sm text-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 whitespace-nowrap">
                                            {item.defaultValue}
                                        </code>
                                    ) : (
                                        <span className="text-muted-foreground text-sm">-</span>
                                    )}
                                </td>
                                <td className="p-4 align-middle text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
