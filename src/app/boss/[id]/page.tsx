import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const bossData: Record<
  string,
  {
    name: string
    image?: string
    type: string
    hp: string
    attack: string
    defense: string
    location: string
    strategy: string[]
    tips: string[]
  }
> = {
  hooktail: {
    name: "Hooktail",
    type: "Boss",
    hp: "20",
    attack: "5",
    defense: "1",
    location: "Hooktail Castle",
    strategy: [
      "Use the Cricket sound effect badge to scare Hooktail, causing her to skip a turn.",
      "Focus on defending when she charges up her fire breath attack.",
      "Attack with jump moves and hammer attacks consistently.",
      "Save your FP for special moves when she's vulnerable.",
    ],
    tips: [
      "Bring plenty of mushrooms and honey syrups for healing.",
      "The Spike Shield badge is helpful for protecting against her stomp attacks.",
      "Use Power Bounce if you have it for maximum damage.",
    ],
  },
  "magnus-von-grapple": {
    name: "Magnus von Grapple",
    type: "Boss",
    hp: "30",
    attack: "4",
    defense: "1",
    location: "The Great Tree",
    strategy: [
      "Target the X-Fists first to reduce his attack power.",
      "Use Thunder Rage or Thunder Bolt items for extra damage.",
      "Watch for his charge-up animation and defend on the next turn.",
      "Partner abilities like Koops' Shell Shot work well against the fists.",
    ],
    tips: [
      "Electric attacks deal extra damage to this mechanical boss.",
      "Keep your HP above 10 to survive his strongest attacks.",
      "The Power Bounce badge is very effective once the fists are destroyed.",
    ],
  },
  "mucho-grubba": {
    name: "Mucho Grubba",
    type: "Boss",
    hp: "60",
    attack: "4",
    defense: "0",
    location: "Glitz Pit",
    strategy: [
      "He becomes much stronger when powered up - focus on defense during these turns.",
      "Use Guard and Superguard to minimize damage from his heavy attacks.",
      "Attack consistently with your strongest moves.",
      "Partner moves like Vivian's Fiery Jinx are very effective.",
    ],
    tips: [
      "Stock up on Jammin' Jelly to restore FP for special moves.",
      "The Close Call badge can help you survive his powered-up attacks.",
      "Don't waste FP trying to inflict status effects - he's mostly immune.",
    ],
  },
  "imposter-mario": {
    name: "Imposter Mario",
    type: "Boss",
    hp: "40",
    attack: "5",
    defense: "1",
    location: "Creepy Steeple",
    strategy: [
      "He copies your moves, so be strategic about when to use special attacks.",
      "Regular attacks work fine - save FP for healing if needed.",
      "Watch his patterns and defend when he's about to use a strong move.",
      "Use Vivian's abilities to hide and avoid attacks.",
    ],
    tips: [
      "Life Shrooms are very helpful for this battle.",
      "Don't waste high FP moves - he'll just copy them.",
      "The Feeling Fine badge prevents status effects he might inflict.",
    ],
  },
  cortez: {
    name: "Cortez",
    type: "Boss",
    hp: "20 (per phase)",
    attack: "4-6",
    defense: "1",
    location: "Pirate's Grotto",
    strategy: [
      "This is a multi-phase battle - conserve FP and items.",
      "In phase 1, destroy his weapons first to reduce his attack options.",
      "In phase 2, focus all attacks on Cortez himself.",
      "Use Earth Tremor to hit all parts at once in phase 1.",
      "Partner attacks that hit multiple targets are very effective.",
    ],
    tips: [
      "Bring multiple Life Shrooms for safety.",
      "The Defend Plus badge helps survive his stronger attacks.",
      "Ice Storm items are effective for hitting multiple parts.",
    ],
  },
  smorg: {
    name: "Smorg",
    type: "Boss",
    hp: "50",
    attack: "5",
    defense: "1",
    location: "Excess Express",
    strategy: [
      "Target the tentacles first if they appear.",
      "Multi-hit attacks are very effective against the Smorg cluster.",
      "Use Bomb items or abilities to hit the entire formation.",
      "Keep your HP high as it can deal significant damage.",
      "Admiral Bobbery's Bomb Squad is excellent here.",
    ],
    tips: [
      "Stock up on FP-restoring items before this battle.",
      "The P-Up D-Down badge increases attack at cost of defense.",
      "Ultra Shrooms are recommended for this tough battle.",
    ],
  },
  "magnus-von-grapple-2": {
    name: "Magnus von Grapple 2.0",
    type: "Boss",
    hp: "70",
    attack: "6",
    defense: "2",
    location: "X-Naut Fortress",
    strategy: [
      "Much tougher than the first version - come prepared.",
      "Target the fists first, but be aware they regenerate.",
      "Use Piercing Blow or similar to bypass his defense.",
      "Electric attacks still work well.",
      "Save your strongest FP moves for when the fists are down.",
    ],
    tips: [
      "Bring Jammin' Jellies and Ultra Shrooms.",
      "The Zap Tap badge helps damage him when he attacks you.",
      "Charge up with Power Lift for maximum damage output.",
    ],
  },
  "shadow-queen": {
    name: "Shadow Queen",
    type: "Boss",
    hp: "150",
    attack: "7-9",
    defense: "1",
    location: "Palace of Shadow",
    strategy: [
      "This is a multi-phase final battle - pace yourself.",
      "In phase 1, she's invincible - just survive and defend.",
      "Phase 2 begins after the audience powers you up.",
      "Use your strongest attacks and don't hold back on items.",
      "Crystal Stars are essential - use them when needed.",
      "Watch for her massive AOE attacks and guard when possible.",
      "Her hands can be dangerous - consider taking them out.",
    ],
    tips: [
      "Bring every powerful item and badge you have.",
      "Ultra Shrooms and Jammin' Jellies are essential.",
      "The Life Shroom badge can give you a second chance.",
      "Danger Mario builds work extremely well here.",
      "Don't forget to use your partners' abilities strategically.",
    ],
  },
  blooper: {
    name: "Blooper",
    type: "Mini Boss",
    hp: "12",
    attack: "1",
    defense: "0",
    location: "Rogueport Sewers",
    strategy: [
      "Very early game boss - straightforward battle.",
      "Regular attacks work fine.",
      "Watch out for its ink attack that can make you dizzy.",
      "Use Goombella's Headbonk for consistent damage.",
    ],
    tips: ["Bring a few mushrooms just in case.", "This is mainly a tutorial boss to learn combat mechanics."],
  },
  "red-bones": {
    name: "Red Bones",
    type: "Mini Boss",
    hp: "5",
    attack: "3",
    defense: "1",
    location: "Hooktail Castle",
    strategy: [
      "He revives after being defeated - you must beat him twice.",
      "Fire attacks prevent him from reviving.",
      "Use Fire Flower items or partner fire abilities.",
      "Regular attacks work, but be ready for round 2.",
    ],
    tips: ["Save at least one Fire Flower for the second phase.", "The POW Block item can damage him effectively."],
  },
  "three-shadows": {
    name: "The Three Shadows",
    type: "Mini Boss",
    hp: "5 each",
    attack: "2",
    defense: "0",
    location: "Creepy Steeple",
    strategy: [
      "Fight each shadow one at a time.",
      "They have low HP but can be tricky.",
      "Use multi-target attacks if you have them.",
      "Focus on one at a time to reduce incoming damage.",
    ],
    tips: ["Earth Tremor is great for hitting all three.", "Relatively easy fight if you came prepared."],
  },
  "iron-adonis-twins": {
    name: "The Iron Adonis Twins",
    type: "Mini Boss",
    hp: "50 each",
    attack: "4",
    defense: "0",
    location: "Glitz Pit",
    strategy: [
      "Two enemies at once - this can be challenging.",
      "Use multi-target attacks to damage both.",
      "Focus on defeating one first to reduce damage taken.",
      "They have high HP so conserve FP for important moves.",
    ],
    tips: [
      "Art Attack works very well in this battle.",
      "Stock up on healing items before this fight.",
      "The Double Dip badge lets you use two items per turn.",
    ],
  },
  "rawk-hawk": {
    name: "Rawk Hawk",
    image: "/rawk-hawk-hawk-wrestler-mini-boss-paper-mario.png",
    type: "Mini Boss",
    hp: "40",
    attack: "3",
    defense: "1",
    location: "Glitz Pit",
    strategy: [
      "Rawk Hawk is a powerful opponent.  After a short time of attacking him he will go high up.  In this state you cannot jump or hammer him.  Because he is holding onto the roof, Flurries body slam can hurt him.  He can also do a wall dive which can hurt you a lot.",
    ],
    tips: ["Recommended HP: 30", "Recommended FP: 15", "Recommended Partner: Flurrie"],
  },
  dooplis: {
    name: "Dooplis",
    type: "Mini Boss",
    hp: "40",
    attack: "4",
    defense: "0",
    location: "Creepy Steeple",
    strategy: [
      "He transforms into Mario and steals your partner.",
      "Attack him with regular moves.",
      "The real challenge is fighting without your partner initially.",
      "Once Vivian joins, use her abilities effectively.",
    ],
    tips: ["Save FP for when you reunite with Vivian.", "Stock up on healing items for this solo portion."],
  },
  bowser: {
    name: "Bowser",
    type: "Mini Boss",
    hp: "30",
    attack: "3",
    defense: "1",
    location: "Palace of Shadow entrance",
    strategy: [
      "Classic Bowser fight - straightforward but fun.",
      "Watch out for his fire breath.",
      "Jump and hammer attacks work normally.",
      "He's not too difficult at this point in the game.",
    ],
    tips: ["Save your best items and FP for later battles.", "Guard against his fire breath to minimize damage."],
  },
  "three-shadows-palace": {
    name: "The Three Shadows - Palace",
    type: "Mini Boss",
    hp: "10 each",
    attack: "5",
    defense: "0",
    location: "Palace of Shadow",
    strategy: [
      "Powered-up version of the earlier fight.",
      "Higher HP and attack but same basic strategy.",
      "Take them out one at a time.",
      "Use your strongest multi-target abilities.",
    ],
    tips: ["Should be much easier now with your upgraded abilities.", "Earth Tremor or similar attacks work great."],
  },
  "dark-bones": {
    name: "Dark Bones",
    type: "Mini Boss",
    hp: "20",
    attack: "5",
    defense: "2",
    location: "Palace of Shadow",
    strategy: [
      "Stronger version of Red Bones.",
      "Can revive himself multiple times.",
      "Use fire attacks to prevent revival.",
      "Piercing attacks help with his defense.",
    ],
    tips: ["Fire Drive or Fiery Jinx are very effective.", "Be patient and keep using fire attacks."],
  },
  "gloom-tail": {
    name: "Gloom Tail",
    type: "Mini Boss",
    hp: "80",
    attack: "8",
    defense: "2",
    location: "Palace of Shadow",
    strategy: [
      "Powerful dragon mini-boss.",
      "High defense - use Piercing Blow or similar.",
      "Watch for his mega-breath attack and defend.",
      "This is a preparation test for the final boss.",
    ],
    tips: [
      "Ultra Shrooms and Jammin' Jellies recommended.",
      "Use Charge and Power Lift to boost damage.",
      "The Pretty Lucky badge can help avoid some damage.",
    ],
  },
  grodus: {
    name: "Grodus",
    type: "Mini Boss",
    hp: "50",
    attack: "7",
    defense: "1",
    location: "Palace of Shadow",
    strategy: [
      "Protected by four Grodus X's that must be destroyed first.",
      "Take out the Grodus X's before focusing on Grodus.",
      "Electric attacks are effective.",
      "He becomes vulnerable once the X's are gone.",
      "Use multi-target attacks to clear the X's quickly.",
    ],
    tips: [
      "Earth Tremor hits all enemies at once.",
      "Save high-power single-target moves for Grodus himself.",
      "Stock up before this fight as the final battle is next.",
    ],
  },
  "bowser-palace": {
    name: "Bowser - Palace",
    type: "Mini Boss",
    hp: "70",
    attack: "7",
    defense: "2",
    location: "Palace of Shadow",
    strategy: [
      "Powered-up Bowser with Kammy Koopa assisting.",
      "Take out Kammy first to stop her from buffing Bowser.",
      "Use Piercing attacks to bypass his defense.",
      "Watch for his star-powered attacks.",
      "Multi-target attacks help deal with both enemies.",
    ],
    tips: [
      "Art Attack can hit both enemies for good damage.",
      "Ultra Shrooms are recommended for survivability.",
      "This is your last battle before the final boss - use items freely.",
    ],
  },
}

export default async function BossPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const boss = bossData[id]

  if (!boss) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4 hover:cursor-pointer">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Bosses
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-balance text-primary">{boss.name}</h1>
          <p className="text-muted-foreground mt-2">
            {boss.type} - {boss.location}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Boss Image */}
        <div className="mb-8">
          <Card className="overflow-hidden border-2 border-primary">
            <img
              src={`${boss.image}`}
              alt={boss.name}
              className="w-full h-64 object-cover"
            />
          </Card>
        </div>

        {/* Stats */}
        <Card className="mb-8 border-2 border-secondary">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">HP</p>
                <p className="text-2xl font-bold text-primary">{boss.hp}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Attack</p>
                <p className="text-2xl font-bold text-primary">{boss.attack}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Defense</p>
                <p className="text-2xl font-bold text-primary">{boss.defense}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Type</p>
                <p className="text-2xl font-bold text-primary">{boss.type}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategy */}
        <Card className="mb-8 border-2 border-accent">
          <CardHeader>
            <CardTitle className="text-2xl text-accent">Battle Strategy</CardTitle>
            <CardDescription>How to defeat {boss.name}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {boss.strategy.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="border-2 border-secondary">
          <CardHeader>
            <CardTitle className="text-2xl text-secondary">Pro Tips</CardTitle>
            <CardDescription>Additional advice for this battle</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {boss.tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-secondary text-xl">★</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
