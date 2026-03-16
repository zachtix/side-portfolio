import { cn } from "@/lib/utils"
import React from "react"
import { profile } from "@/data/profile"
import { RiGithubLine, RiLinkedinFill, RiMailLine } from "@remixicon/react"
import Link from "next/link"

const _YEAR = new Date().getFullYear()

function Footer() {
  return (
    <div className={cn("mt-17 border-t border-t-[#767680]/12")}>
      <div className="container mx-auto flex flex-col gap-11.5 px-8 py-11">
        <div className="mx-auto flex gap-8 text-base md:text-xl 2xl:text-2xl font-medium">
          <Link href={profile.LINKEDIN} target="_blank" className="flex items-center gap-2">
            <div className="">LinkedIn</div>
            <RiLinkedinFill size={24} />
          </Link>
          <Link href={profile.GITHUB} target="_blank" className="flex items-center gap-2">
            <div className="">Github</div>
            <RiGithubLine size={24} />
          </Link>
          <Link href={"mailto:"+profile.EMAIL} target="_blank" className="flex items-center gap-2">
            <div className="">Mail</div>
            <RiMailLine size={24} />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center text-sm md:text-base md:mx-auto md:gap-2">
          <div className="">
            {profile.FNAME} &copy; {_YEAR}
          </div>
          <div className="">Designed by {profile.DESIGNER}</div>
          <div className="">Developed by {profile.DEVELOPER}</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
