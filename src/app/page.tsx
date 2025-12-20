import Link from "next/link"
import { Card } from "@/components/ui/card"

const bosses = [
  { id: "hooktail", name: "Hooktail", image: "/hooktail-dragon-boss-paper-mario.png" },
  { id: "magnus-von-grapple", name: "Magnus von Grapple", image: "/magnus-von-grapple-robot-boss-paper-mario.png" },
  { id: "mucho-grubba", name: "Mucho Grubba", image: "/mucho-grubba-wrestling-boss-paper-mario.png" },
  { id: "imposter-mario", name: "Imposter Mario", image: "/imposter-mario-shadow-boss-paper-mario.png" },
  { id: "cortez", name: "Cortez", image: "/cortez-pirate-skeleton-boss-paper-mario.png" },
  { id: "smorg", name: "Smorg", image: "/smorg-cloud-boss-paper-mario.png" },
  {
    id: "magnus-von-grapple-2",
    name: "Magnus von Grapple 2.0",
    image: "/magnus-von-grapple-2-0-upgraded-robot-boss-paper-m.png",
  },
  { id: "shadow-queen", name: "Shadow Queen", image: "/shadow-queen-final-boss-paper-mario.png" },
]

const miniBosses = [
  { id: "blooper", name: "Blooper", image: "/blooper-squid-mini-boss-paper-mario.jpg" },
  { id: "red-bones", name: "Red Bones", image: "/red-bones-skeleton-mini-boss-paper-mario.jpg" },
  { id: "three-shadows", name: "The Three Shadows", image: "/three-shadows-ninja-mini-boss-paper-mario.jpg" },
  { id: "iron-adonis-twins", name: "The Iron Adonis Twins", image: "/iron-adonis-twins-mini-boss-paper-mario.png" },
  { id: "rawk-hawk", name: "Rawk Hawk", image: "/rawk-hawk-hawk-wrestler-mini-boss-paper-mario.jpg" },
  { id: "dooplis", name: "Dooplis", image: "/dooplis-ghost-mini-boss-paper-mario.png" },
  { id: "bowser", name: "Bowser", image: "/bowser-mini-boss-paper-mario.jpg" },
  { id: "three-shadows-palace", name: "The Three Shadows - Palace", image: "/placeholder.svg?height=200&width=200" },
  { id: "dark-bones", name: "Dark Bones", image: "/placeholder.svg?height=200&width=200" },
  { id: "gloom-tail", name: "Gloom Tail", image: "/placeholder.svg?height=200&width=200" },
  { id: "grodus", name: "Grodus", image: "/placeholder.svg?height=200&width=200" },
  { id: "bowser-palace", name: "Bowser - Palace", image: "/placeholder.svg?height=200&width=200" },
]

const secretBosses = [
  { id: "blooper", name: "Blooper", image: "/blooper-squid-mini-boss-paper-mario.jpg" },
  { id: "red-bones", name: "Red Bones", image: "/red-bones-skeleton-mini-boss-paper-mario.jpg" },
  { id: "three-shadows", name: "The Three Shadows", image: "/three-shadows-ninja-mini-boss-paper-mario.jpg" },
  { id: "iron-adonis-twins", name: "The Iron Adonis Twins", image: "/iron-adonis-twins-mini-boss-paper-mario.jpg" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b-4 border-primary bg-gradient-to-r from-secondary via-accent to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/paper-texture-pattern.jpg')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 via-transparent to-primary/50"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-balance text-card drop-shadow-lg">
            Paper Mario: The Thousand Year Door Tips
          </h1>
          <p className="text-card mt-3 text-balance text-lg font-medium drop-shadow">
            Your complete guide to defeating every boss and mini-boss
          </p>
          <p className="text-card/90 mt-2 text-balance font-medium drop-shadow">By Desmond Thompson</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Bosses Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Bosses</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bosses.map((boss) => (
              <Link key={boss.id} href={`/boss/${boss.id}`}>
                <Card className="group relative aspect-square overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-[1]" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />
                  <img
                    src={boss.image || "/placeholder.svg"}
                    alt={boss.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <h3 className="text-lg font-bold text-secondary text-center text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {boss.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Mini Bosses Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Mini Bosses</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {miniBosses.map((boss) => (
              <Link key={boss.id} href={`/boss/${boss.id}`}>
                <Card className="group relative aspect-square overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-[1]" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />
                  <img
                    src={boss.image || "/placeholder.svg"}
                    alt={boss.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <h3 className="text-lg font-bold text-secondary text-center text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {boss.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Secret Bosses Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary">Secret Bosses</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {secretBosses.map((boss) => (
              <Link key={boss.id} href={`/boss/${boss.id}`}>
                <Card className="group relative aspect-square overflow-hidden border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-[1]" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]" />
                  <img
                    src={boss.image || "/placeholder.svg"}
                    alt={boss.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-10">
                    <h3 className="text-lg font-bold text-secondary text-center text-balance drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {boss.name}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
