"use client"

import {cn} from "@/lib/utils";
import {useRouter} from "next/navigation";

export default function NavLink({className, href, label}:{className?:string, href:string, label:string}){
    const router = useRouter()
    return(
        <div
            onClick = {()=>{
                router.push(href);
            }}
            className = {cn('',className)}>
            {label}
        </div>
    )
}