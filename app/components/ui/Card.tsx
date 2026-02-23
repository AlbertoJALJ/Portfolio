import Image from "@/components/ui/Image"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import GithubIcon from "@/assets/github.png"
import RocketSvg from "@/assets/rocket.svg"
import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type CardProps = {
  image_src: StaticImport
  image_alt: string
  card_title: string
  card_description: string
  demo_link: string
  github_link: string
  badges?: string[]
}

export const Card = ({ image_src, image_alt, card_title, card_description, demo_link, github_link, badges = [] }: CardProps) => {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-border-gray bg-brand-beige">
      <div className="relative w-full overflow-hidden aspect-video">
        {/* Image */}
        <Image src={image_src} fill alt={image_alt} sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
        {badges.length > 0 && (
          <div className="absolute right-3 top-3 flex gap-2">
            {badges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold">
          {card_title}
        </h2>

        <p className="text-blue-gray">{card_description}</p>
        <div className="flex gap-5">
          <Button variant={"link"} icon>
            <Image src={RocketSvg} alt="Rocket icon" className="h-4 w-4" />
            Live Demo
          </Button>
          <Button variant={"link"} tone="muted" icon>
            <Image src={GithubIcon} alt="GitHub icon" className="h-2 w-4" />
            Github
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Card