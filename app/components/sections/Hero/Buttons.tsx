import Button from "@/components/ui/Button"

export default function Buttons () {
    return <div className="flex flex-col gap-4 sm:flex-row">
        <Button size={"lg"} icon>
            View My Work
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
        <Button size={"lg"} variant={"outline"}>Get in Touch </Button>
    </div>
}