import { cn } from "@/lib/utils"
import { Button } from "./button"
import { profile as PROFILE } from "@/data/profile"

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-8 px-10 py-17">
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] font-bold md:text-[50px] 2xl:text-[72px]">
            {PROFILE.FNAME}
          </h1>
          <h3 className="text-2xl font-bold text-[#0088FF] md:text-[32px] xl:text-[40px] 2xl:text-[42px]">
            {PROFILE.POSITION}
          </h3>
        </div>
        <p className="text-lg text-[#8E8E93] md:text-xl 2xl:text-2xl">
          {PROFILE.INTRODUCE}
        </p>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <Button
            className={cn(
              "h-fit bg-[#026AC4] py-4 text-base font-medium text-white md:w-[298px] xl:text-xl 2xl:text-2xl"
            )}
          >
            Open CV
          </Button>
          <Button
            className={cn(
              "h-fit border-[#026AC4] bg-transparent py-4 text-base font-medium text-[#026AC4] md:w-[298px] xl:text-xl 2xl:text-2xl"
            )}
          >
            Contact us
          </Button>
        </div>
      </div>
    </>
  )
}

export default Hero
