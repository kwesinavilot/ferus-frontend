"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Car,
    Home,
    Heart,
    Building2,
    Ship,
    Flame,
    LineChart,
    ShieldAlert,
    ClipboardCheck,
    BookOpen,
    HelpCircle,
    Newspaper,
    FileText,
    ScrollText,
    Video,
    Users
} from "lucide-react"

const products = [
    {
        title: "Auto Insurance",
        href: "/products/auto",
        description: "Comprehensive coverage for your vehicles with competitive rates.",
        icon: <Car className="h-5 w-5" />
    },
    {
        title: "Home Insurance",
        href: "/products/home",
        description: "Protect your home and belongings with our flexible policies.",
        icon: <Home className="h-5 w-5" />
    },
    {
        title: "Life Insurance",
        href: "/products/life",
        description: "Secure your family's future with our life insurance options.",
        icon: <Heart className="h-5 w-5" />
    },
    {
        title: "Business Insurance",
        href: "/products/business",
        description: "Tailored insurance solutions for businesses of all sizes.",
        icon: <Building2 className="h-5 w-5" />
    },
    {
        title: "Marine Insurance",
        href: "/products/marine",
        description: "Protection for vessels, cargo, and maritime operations.",
        icon: <Ship className="h-5 w-5" />
    },
    {
        title: "Fire Insurance",
        href: "/products/fire",
        description: "Comprehensive fire and property damage coverage.",
        icon: <Flame className="h-5 w-5" />
    }
]

const solutions = [
    {
        title: "Insurance Consulting",
        href: "/solutions/consulting",
        description: "Expert guidance to help you choose the right insurance coverage.",
        icon: <LineChart className="h-5 w-5" />
    },
    {
        title: "Risk Assessment",
        href: "/solutions/risk-assessment",
        description: "Professional evaluation of your insurance needs and risks.",
        icon: <ShieldAlert className="h-5 w-5" />
    },
    {
        title: "Claims Management",
        href: "/solutions/claims-management",
        description: "Streamlined claims process and dedicated support.",
        icon: <ClipboardCheck className="h-5 w-5" />
    }
]

const resources = [
    {
        title: "Insurance Guide",
        href: "/resources/guide",
        description: "Comprehensive guides to understand different insurance types.",
        icon: <BookOpen className="h-5 w-5" />
    },
    {
        title: "FAQ",
        href: "/resources/faq",
        description: "Common questions about our insurance products and services.",
        icon: <HelpCircle className="h-5 w-5" />
    },
    {
        title: "Blog",
        href: "/resources/blog",
        description: "Latest insights, tips, and news about insurance.",
        icon: <Newspaper className="h-5 w-5" />
    },
    {
        title: "Reports",
        href: "/resources/reports",
        description: "Industry reports and insurance market analysis.",
        icon: <FileText className="h-5 w-5" />
    },
    {
        title: "Case Studies",
        href: "/resources/case-studies",
        description: "Real-world examples of our insurance solutions in action.",
        icon: <ScrollText className="h-5 w-5" />
    },
    {
        title: "Videos",
        href: "/resources/videos",
        description: "Educational videos and product demonstrations.",
        icon: <Video className="h-5 w-5" />
    },
    {
        title: "Partner Directory",
        href: "/resources/partners",
        description: "Find insurance agents and brokers in your area.",
        icon: <Users className="h-5 w-5" />
    }
]

export function MainNav() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {products.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                    icon={item.icon}
                                >
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px]">
                            {solutions.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                    icon={item.icon}
                                >
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            {resources.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                    icon={item.icon}
                                >
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/quote" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Get A Quote
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/claims" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            File A Claim
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
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
                    <div className="flex items-center gap-2">
                        {icon}
                        <div className="text-sm font-medium leading-none">{title}</div>
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li >
    )
})
ListItem.displayName = "ListItem"
