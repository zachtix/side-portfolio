"use client"

import { cn } from "@/lib/utils"
import { RiMenu3Fill } from "@remixicon/react"
import React, { useEffect, useRef, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./button"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import { profile as PROFILE } from "@/data/profile"

const MENUS = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/#about" },
]

const Navbar = () => {
  const path = usePathname()
  const params = useParams()
  const [hash, setHash] = useState<string>("")
  useEffect(() => {
    const hash = window.location.hash // "#4"
    const id = hash.replace("#", "/#") // "4"

    setHash(id)
  }, [params])
  const menuRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState<string>("0")
  const [width, setWidth] = useState<string>("0")
  useEffect(() => {
    const activeIndex = MENUS.findIndex(
      (e) =>
        (e.href === "/" && path === "/" && !hash) ||
        (e.href !== "/" && (path === e.href || hash === e.href))
    )

    const el = menuRefs.current[activeIndex]

    if (el && containerRef.current) {
      const rect = el.getBoundingClientRect()
      const parentRect = containerRef.current.getBoundingClientRect()

      setWidth(`${rect.width + 6}`)
      setPos(`${rect.left - parentRect.left - 3}`)
    }
  }, [path, hash])
  return (
    <>
      <div className="fixed top-0 w-full bg-[#0E1519]/50 backdrop-blur">
        <div
          className={cn(
            "container mx-auto flex h-17 items-center justify-between md:px-6"
          )}
        >
          <Avatar className="ms-2 size-11">
            <AvatarImage src={PROFILE.IMG} alt={PROFILE.IMG_ALT} />
            <AvatarFallback>{PROFILE.FALLBACK}</AvatarFallback>
          </Avatar>
          <div
            ref={containerRef}
            className="relative flex items-center gap-12 max-md:hidden"
          >
            <div
              className="absolute -bottom-2 h-1 bg-[#0088FF] transition-all max-xl:hidden"
              style={{
                width: width,
                transform: `translateX(${pos}px)`,
              }}
            />

            {MENUS.map((e, i) => (
              <Link
                key={e.href}
                href={e.href}
                ref={(el) => {
                  menuRefs.current[i] = el
                }}
                className={cn(
                  "xl:text-lg xl:font-medium 2xl:text-xl",
                  {
                    "text-[#0088FF]":
                      (e.href === "/" && path === "/" && !hash) ||
                      (e.href !== "/" && (path === e.href || hash === e.href)),
                  },
                  "duration-300"
                )}
              >
                {e.label}
              </Link>
            ))}
          </div>
          <button className="px-4 text-white md:hidden">
            <RiMenu3Fill size={24} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
