"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "./ui/Button"
import { GithubIcon } from "lucide-react"
import { MobileMenu } from "./MobileMenu"
import WaitinglistBtn from "./WaitinglistBtn"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/resources/about",
    description:
      "Learn more about Bitfeed.",
  },
  {
    title: "FAQ",
    href: "/resources/faq",
    description:
      "Frequently asked question about Bitfeed.",
  },
  {
    title: "Changelog",
    href: "/resources/changelog",
    description:
      "See what's new in Bitfeed.",
  },
  {
    title: "Examples",
    href: "/resources/examples",
    description:
      "Checkout examples of Bits and Feeds created by the community.",
  }
]

export default function Header() {
    return (
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              {/* Logo - Left */}
              <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center space-x-2">
                      <Image src="/logo.svg?height=32&width=32" alt="Bitfeed Logo" width={32} height={32} />
                      <span className="text-2xl font-bold text-gray-900">Bitfeed</span>
                  </Link>
              </div>
  
              {/* Navigation - Center */}
              <NavigationMenu className="flex-1 flex justify-center">
                  <NavigationMenuList className="hidden md:flex space-x-6">
                      <NavigationMenuItem>
                          <Link href="/#features" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  <span className="text-lg text-gray-700">Building Blocks</span>
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            <span className="text-lg text-gray-700">Resources</span>
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="bg-white">
                              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                  {components.map((component) => (
                                      <ListItem
                                          key={component.title}
                                          title={component.title}
                                          href={component.href}
                                          className="text-gray-700"
                                      >
                                        <span className="text-gray-600">{component.description}</span>
                                          
                                      </ListItem>
                                  ))}
                              </ul>
                          </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                          <Link href="/docs" legacyBehavior passHref>
                              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                  <span className="text-lg text-gray-700">Documentation</span>
                              </NavigationMenuLink>
                          </Link>
                      </NavigationMenuItem>
                  </NavigationMenuList>
              </NavigationMenu>
  
              {/* Actions - Right */}
              <div className="flex-shrink-0 flex items-center space-x-4">
                  <Link href="https://github.com/bitfeedai" target="_blank" rel="noopener noreferrer" className="hidden md:block">
                      <GithubIcon className="w-6 h-6 text-gray-600 hover:text-gray-900 fill-current" />
                  </Link>
                  <div className="hidden md:inline-flex">
                    {/* <WaitinglistBtn buttonType={"default"} buttonText={"Get Started"} /> */}
                  </div>
                  <MobileMenu />
              </div>
          </div>
      </header>
    )
  }

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"