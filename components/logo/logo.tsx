import {cn} from "@/lib/utils";
import {Mr_Dafoe} from "next/font/google";

const mrDafoe = Mr_Dafoe({
    weight: ['400'],
    subsets: ["latin"],
});

export default function Logo({className, h1ClassName, h2ClassName, blendDifference}: {
    className?: string,
    h1ClassName?: string,
    h2ClassName?: string,
    blendDifference?: boolean
}) {
    return (
        <div className={cn('text-white', blendDifference && 'mix-blend-difference', className)}>
            <h1 className={cn('text-[38px]', h1ClassName, mrDafoe.className)}>3W Art</h1>
            <h2 className={cn('text-[16px] font-normal tracking-tight', h2ClassName)}>Internet Solutions</h2>
        </div>
    )
}