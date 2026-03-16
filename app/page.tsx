import AboutMe from "@/components/ui/aboutme"
import { Button } from "@/components/ui/button"
import Experience from "@/components/ui/experience"
import Hero from "@/components/ui/hero"
import Link from "next/link"

export default function Page() {
  return (
    // <div className="flex min-h-svh p-6">
    //   <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
    //     <div>
    //       <h1 className="font-medium">Project ready!</h1>
    //       <p>You may now add components and start building.</p>
    //       <p>We&apos;ve already added the button component for you.</p>
    //       <Link href="/projects">
    //         <Button className="mt-2">Button</Button>
    //       </Link>
    //     </div>
    //     <div
    //       className="font-mono text-xs text-muted-foreground"
    //       id="experience"
    //     >
    //       (Press <kbd>d</kbd> to toggle dark mode)
    //     </div>
    //   </div>
    // </div>
    <div className="divide-y-">
      <Hero />
      <Experience />
      <AboutMe />
    </div>
  )
}
