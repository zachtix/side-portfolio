import { cn } from "@/lib/utils"
import React from "react"
import type { Experience } from "@/data/experience"

type CardExperienceProps = {
  data: Experience
}

function CardExperience({ data }: CardExperienceProps) {
  return (
    <div className={cn("flex flex-col gap-4")}>
      <h3
        className={cn(
          "text-2xl font-bold text-white md:text-[28px] 2xl:text-[32px]"
        )}
      >
        {data.company}
      </h3>
      <div className={cn("flex flex-col gap-2")}>
        <h3
          className={cn(
            "text-2xl font-bold text-[#026AC4] md:text-[28px] 2xl:text-[32px]"
          )}
        >
          {data.position}
        </h3>
        <h4 className={cn("text-xl font-medium text-[#8E8E93] md:text-2xl")}>
          {data.date}
        </h4>
      </div>
      <ul className={cn("flex list-inside list-disc flex-col gap-4")}>
        {data.descriptions.map((e, i) => (
          <li
            key={`${data.company}-desc-${i}`}
            className={cn("text-base text-[#8E8E93] md:text-xl 2xl:text-2xl")}
          >
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardExperience
