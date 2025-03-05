import ImagesBg from "@/components/homePage/imagesBg";
import SvgBg from "@/components/homePage/svgBg";


export default function Home() {
  return (
    <div className="relative z-[2] bg-white w-full min-h-screen  flex justify-center">
        <div className={'absolute z-[2] bg-white w-full min-h-screen '}>
            <ImagesBg/>
            <SvgBg/>
        </div>


        <section className={'z-[2] h-screen w-full flex items-center justify-center mix-blend-difference'}>
            <h1 className={'z-[3] text-white font-[termina] font-medium text-[8vw] uppercase mix-blend-difference'}>
                Studio Webowe
            </h1>
        </section>
    </div>
  );
}
