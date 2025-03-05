"use client"

import {cn} from "@/lib/utils";
import Image from "next/image";
import {useState} from "react";

export default function ImageWithFallback({className, imgUrl, imgFallbackUrl}:
{
    className?:string,
    imgUrl:string,
    imgFallbackUrl?:string
}){

    const [error, setError] = useState(false);
    return(
        <div className = {cn('w-full h-full',className)}>
            <Image src={error ? imgFallbackUrl||'/images/elements/image_not_found.png' : imgUrl} alt={imgUrl}
                   layout = {'fill'}
                   objectFit = {'contain'}

                   onError={()=>{setError(true);}}
            />

        </div>
    )
}