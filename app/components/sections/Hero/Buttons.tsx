import Button from "@/components/ui/Button"
import Link from "next/link"

export default function Buttons () {
    return <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="https://github.com/AlbertoJALJ?tab=repositories" target="_blank" rel="noreferrer">
            <Button size={"lg"} icon>
                View Projects
                <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                </svg>
            </Button>
        </Link>
        <a href="mailto:alberto.jalj971@gmail.com">
            <Button size={"lg"} variant={"outline"}>Contact Me</Button>
        </a>
    </div>
}