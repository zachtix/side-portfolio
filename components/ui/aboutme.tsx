import { cn } from "@/lib/utils"
import React from "react"
import { profile } from "@/data/profile"

function AboutMe() {
  return (
    <div className={cn("container mx-auto flex flex-col gap-11.5 px-8")}>
      <h2 className={cn("text-[34px] font-bold xl:text-[46px]")}>About Me</h2>
      <div className={cn("flex flex-col gap-8 md:flex-row-reverse")}>
        <img
          src={profile.IMAGES_ABOUT_ME}
          alt=""
          className={cn("size-64.75 xl:size-82.25 2xl:size-99")}
        />
        <div className={cn("text-base text-[#8E8E93] md:text-xl 2xl:text-2xl")}>
          {profile.ABOUT_ME}
        </div>
      </div>
    </div>
  )
}

export default AboutMe
