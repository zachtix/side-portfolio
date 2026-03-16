import { cn } from "@/lib/utils"
import React from "react"
import { experiences } from "@/data/experience"
import CardExperience from "./card_experience"

function Experience() {
  return (
    <>
      <div className={cn("container mx-auto flex flex-col gap-12 px-8")}>
        <h2 className={cn("text-[28px] md:text-[34px] xl:text-[40px] 2xl:text-[46px] font-bold text-white")}>
          Work Experience
        </h2>
        {experiences.map((e, i) => (
          <CardExperience key={e.company} data={e} />
        ))}
      </div>
    </>
  )
}

export default Experience
