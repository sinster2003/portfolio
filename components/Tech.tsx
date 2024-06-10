import Image from "next/image"
import { Card, CardContent } from "./ui/card"

const Tech = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 py-10'>
          <p className='text-4xl text-primary-foreground'>Technologies</p>
        </div>
        <div className="grid grid-cols-12 w-full gap-4 mt-6">
          {/* frontend */}
          <Card className="h-[] col-span-8 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/html.png"} alt="html" width={60} height={60}/>
              <Image src={"/css.png"} alt="css" width={60} height={60}/>
              <Image src={"/javascript.png"} alt="javascript" width={60} height={60}/>
              <Image src={"/typescript.png"} alt="typescript" width={60} height={60}/>
            </CardContent>
          </Card>

          {/* frameworks */}
          <Card className="col-span-4 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/react.png"} alt="react" width={60} height={60}/>
              <Image src={"/nextjs.png"} alt="nextjs" width={60} height={60}/>
            </CardContent>
          </Card>

          {/* backend frameworks */}
          <Card className="col-span-4 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/nodejs.png"} alt="node" width={60} height={60}/>
              <Image src={"/express.png"} alt="express" width={60} height={60}/>
            </CardContent>
          </Card>

          {/* css frameworks */}
          <Card className="h-[] col-span-8 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/tailwind.png"} alt="tailwind" width={60} height={60}/>
              <Image src={"/chakra.png"} alt="chakra" width={60} height={60}/>
              <Image src={"/materialui.png"} alt="materialui" width={60} height={60}/>
              <Image src={"/mongoose.png"} alt="mongoose" width={60} height={60}/>
            </CardContent>
          </Card>

          {/* databases */}
          <Card className="h-[] col-span-8 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/mongodb.png"} alt="mongodb" width={60} height={60}/>
              <Image src={"/postgres.png"} alt="postgres" width={60} height={60}/>
              <Image src={"/firebase.png"} alt="firebase" width={60} height={60}/>
              <Image src={"/prisma.png"} alt="prisma" width={60} height={60}/>
            </CardContent>
          </Card>

          {/* others */}
          <Card className="col-span-4 border-[#7C3AED] pt-6">
            <CardContent className="flex flex-row gap-4 justify-around items-center">
              <Image src={"/git.png"} alt="git" width={60} height={60}/>
              <Image src={"/cloudflare.png"} alt="nextjs" width={60} height={60}/>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

export default Tech