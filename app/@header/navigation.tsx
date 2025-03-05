import {cn} from "@/lib/utils";
import NavLink from "@/components/navigation/navLink";


export default function Navigation({className}:{className?:string}){
    return(
        <div className = {cn('',className)}>
            <ul className={'font-[termina] text-white text-[12px] font-medium tracking-tighter uppercase  flex flex-row'}>
                <NavLink href={'/'} label={'home'} className={'mr-[80px]'}/>
                <NavLink href={'/projekty'} label={'projekty'} className={'mr-[80px]'}/>
                <NavLink href={'/kontakt'} label={'kontakt'}/>
            </ul>
        </div>
    )
}