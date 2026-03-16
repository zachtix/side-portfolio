import { cn } from "@/lib/utils"
import React from "react"

function CardExperience({ data }) {
  return (
    <div className={cn("flex flex-col gap-4")}>
      <h3 className={cn("text-2xl md:text-[28px] 2xl:text-[32px] font-bold text-white")}>{data.company}</h3>
      <div className={cn("flex flex-col gap-2")}>
        <h3 className={cn("text-2xl md:text-[28px] 2xl:text-[32px] font-bold text-[#026AC4]")}>
          {data.position}
        </h3>
        <h4 className={cn("text-xl md:text-2xl font-medium text-[#8E8E93]")}>
          {data.date}
        </h4>
      </div>
      <ul className={cn("flex list-disc flex-col gap-4 list-inside")}>
        {data.descriptions.map((e, i) => (
          <li key={`${data.company}-desc-${i}`} className={cn("text-[#8E8E93] text-base md:text-xl 2xl:text-2xl")}>{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default CardExperience
