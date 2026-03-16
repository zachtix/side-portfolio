import { cn } from "@/lib/utils"
import React from "react"
import { featured_projects } from "@/data/project"
import CardProject from "./card_project"
import { Button } from "./button"

function FeaturedProjects() {
  return (
    <div className={cn("container mx-auto flex flex-col gap-11.5 px-8")}>
      <h3
        className={cn("text-[28px] font-bold xl:text-[40px] 2xl:text-[46px]")}
      >
        Featured Projects
      </h3>
      {featured_projects.map((e, i) => (
        <CardProject key={"featured_projects_" + i} data={e} />
      ))}
      <Button
        className={cn(
          "h-12.75 border-[#026AC4] bg-transparent text-base font-medium text-[#026AC4] xl:h-14 xl:text-xl 2xl:h-15.25 2xl:text-2xl"
        )}
      >
        Explore Projects
      </Button>
    </div>
  )
}

export default FeaturedProjects
