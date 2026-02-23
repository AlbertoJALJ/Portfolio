import Image from "@/components/ui/Image"
import Lamp from "@/assets/lamp.png"
export default function HeroImage () {
    return <div className="flex justify-center lg:justify-end">
        <Image className="h-auto w-full max-w-md rounded-3xl lg:max-w-xl" src={Lamp} alt="Alberto Lopez Jimenez - Full Stack Developer"/>
    </div>
}