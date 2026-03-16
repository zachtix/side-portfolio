import { cn } from "@/lib/utils"
import { RiCodeFill, RiCodeLine, RiComputerLine } from "@remixicon/react"
import Link from "next/link"
import React from "react"

function CardProject({ data }: { data: any }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 ps-6 pt-8 pb-4.75 md:h-90 md:flex-row md:ps-11 md:pb-0"
      )}
    >
      <div className="flex flex-col gap-4 md:min-w-107 md:pb-4.75">
        <div className="flex flex-col gap-6 md:flex-1">
          <div className="text-2xl font-bold md:text-[28px] 2xl:text-[32px]">{data.title}</div>
          <div className="text-base text-[#8E8E93] md:text-xl md:font-medium">
            {data.short_description}
          </div>
        </div>
        <div className="flex gap-8">
          <Link
            href={data.source}
            target="_blank"
            className="flex items-center gap-2"
          >
            <div className="text-base font-medium md:text-2xl">Source</div>
            <RiCodeLine size={24} />
          </Link>
          <Link
            href={data.preview_link}
            target="_blank"
            className="flex items-center gap-2"
          >
            <div className="text-base font-medium md:text-2xl">Preview</div>
            <RiComputerLine size={24} />
          </Link>
        </div>
      </div>
      {/* <div className=""></div> */}
      <img
        src={data.image}
        alt=""
        className="max-md:rounded-s-xl md:w-full md:object-top md:object-cover md:rounded-ss-xl"
      />
    </div>
  )
}

export default CardProject
