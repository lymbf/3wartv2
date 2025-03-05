import {cn} from "@/lib/utils";
import Logo from "@/components/logo/logo";
import Navigation from "@/app/@header/navigation";

export default function Page(){
    return(
        <div className={cn('fixed z-[3] mix-blend-difference pl-[40px] pr-[40px] top-0 left-0 w-full  justify-between h-[120px] flex flex-row items-center')}>

            <Logo blendDifference={true}/>
            <Navigation/>
        </div>
    )
}