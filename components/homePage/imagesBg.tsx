import {cn} from "@/lib/utils";

export default function ImagesBg({className}:{className?:string}){
    return(
        <div className={cn('fixed w-full h-screen', className)}>
            {/*<Image src={'/images/homeBgs/bg_1_2.png'} alt={'abstract vision'}*/}
            {/*    priority={true} quality={100}  layout = {'fill'}*/}
            {/*       objectFit = {'cover'}*/}
            {/*/>*/}
            <video
                id='video'
                aria-label={'Kozłowieckie Zacisze'}
                autoPlay
                muted
                loop
                className={'min-w-[100%] min-h-[100%] object-cover'}>
                <source src='/videos/homeBgs/bg_7.mp4'/>
            </video>
        </div>
    )
}