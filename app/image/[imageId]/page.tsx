import {cn} from "@/lib/utils";
import ImageWithFallback from "@/components/ui/imgElements/imageWithFallback/imageWithFallback";

type Props = {
    params: Promise<{
        imageId: string
    }>
}

export default async function Page({params}:Props){
    const {imageId} = await params
    return(
        <div className={cn('w-full h-screen flex items-center justify-center bg-black')}>
            <div className={cn('w-[80%] h-[80%] overflow-hidden relative')}>
                <ImageWithFallback imgUrl={`/images/${imageId}`}/>
            </div>

        </div>
    )
}