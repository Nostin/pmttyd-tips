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
    image: "/hooktail-dragon-boss-paper-mario.png",
    hp: "20",
    attack: "5",
    defense: "1",
    location: "Hooktail Castle",
    strategy: [
      "Hooktail is a hard boss fight, you will collect a badge to make your hammer attack sound like a frog",
      "Hooktail hates frogs, so this badge could be a big advantage",
      "A lot of times in websites people will suggest 20HP for fighting Hooktail but I disagree, because every time I battle Hooktail I do it with 15HP and I win and it saves you time running around trying to get loads of star points.  But if you want to follow what the other websites say you can do that."
    ],
    tips: [
      "Recommended HP: 15",
      "Recommended FP: 10",
      "Recommended Partner: Koops",
      "Recommended Badge: Frog Sound FX",
    ],
  },
  "magnus-von-grapple": {
    name: "Magnus von Grapple",
    type: "Boss",
    image: "/magnus-von-grapple-robot-boss-paper-mario.png",
    hp: "30",
    attack: "2",
    defense: "1",
    location: "The Great Tree",
    strategy: [
      "Magnus von Grapple is inside a giant robot created by the X-Nauts.",
      "Lord Crump rides it, he blasts out the hands which are called Rocket Fists.",
      "There are two rocket fists that will do 4 damage total.",
      "When Lord Crump sends his rocket fists out, it is best to defeat them first before attacking Lord Crump."
    ],
    tips: [
      "Recommended HP: 20",
      "Recommended FP: 15",
    ],
  },
  "mucho-grubba": {
    name: "Mucho Grubba",
    type: "Boss",
    image: "/mucho-grubba-wrestling-boss-paper-mario.png",
    hp: "60",
    attack: "4",
    defense: "0",
    location: "Glitz Pit",
    strategy: [
      "Mucho Grubba is the proprietor of the Glitz Pit.  It's good to pay attention to his stylish moves which are kind of like dancing, those moves give you all sorts of crazy power ups, but first he will increase his chances to attack.",
      "Many people get stuck in this fight in this game.",
      "His attacks do up to 7 damage and he has 60HP"
    ],
    tips: [
      "Recommended HP: 30",
      "Recommended FP: 20"
    ],
  },
  "imposter-mario": {
    name: "Imposter Mario",
    type: "Boss",
    image: "/imposter-mario-shadow-boss-paper-mario.png",
    hp: "40",
    attack: "4",
    defense: "0",
    location: "Creepy Steeple",
    strategy: [
      "Battling Imposter Mario and your own allies is a big fight.  Best to knock out all of the allies first before attacking Imposter Mario."
    ],
    tips: [
      "Recommended HP: 40",
      "Recommended FP: 30"
    ],
  },
  cortez: {
    name: "Cortez",
    type: "Boss",
    image: "/cortez-pirate-skeleton-boss-paper-mario.png",
    hp: "20 (per phase)",
    attack: "4-6",
    defense: "1",
    location: "Pirate ship inside the Pirate's Grotto",
    strategy: [
      "Cortez will start by stabbing Mario with five swords at once.",  
      "Cortez is a three phased boss fight",
      "Hit the bone pile with power smashes - it will do a lot of damage"
    ],
    tips: [
      "Recommended HP: 40-45",
      "Recommended FP: 30-35"
    ],
  },
  smorg: {
    name: "Smorg",
    type: "Boss",
    image: "/smorg-cloud-boss-paper-mario.png",
    hp: "50",
    attack: "1",
    defense: "0",
    location: "Excess Express",
    strategy: [
      "You have seen parts of Smorg's body before",
      "You cannot do damage to the main body until you have defeated the tentacles first.",
      "Once you have done some damage to Smorg, it will bring out another tentacle shaped like a claw.",
      "Every turn it will do 10 damage to both Mario and your partner"
    ],
    tips: [
      "Recommended HP: 40",
      "Recommended FP: 30",
      "Recommended Partner: Anyone",
    ],
  },
  "magnus-von-grapple-2": {
    name: "Magnus von Grapple 2.0",
    type: "Boss",
    image: "/magnus-von-grapple-2-0-upgraded-robot-boss-paper-m.png",
    hp: "70",
    attack: "6",
    defense: "2",
    location: "X-Naut Fortress",
    strategy: [
      "Magnus von Grapple 2.0 is a recreation of Magnus von Grapple and is very powerful.",
      "His rocket fists have turned into drills which can do around 8 damage",
      "He can also suck in the audience and shoot them right at you",
      "This is an unbelievably powerful boss but it's the same as the rocket fists - defeat them before you attack Magnus von Grapple 2.0; this can make a big difference"
    ],
    tips: [
      "Recommended HP: 45",
      "Recommended FP: 25",
    ],
  },
  "shadow-queen": {
    name: "Shadow Queen",
    type: "Final Boss",
    image: "/shadow-queen-final-boss-paper-mario.png",
    hp: "150",
    attack: "7-10-14",
    defense: "0-1",
    location: "Palace of Shadows",
    strategy: [
      "The Shadow Queen is the final boss of TTYD.",
      "With an ultimate 150HP it has about 7 defence, it is a two phased boss",
      "In the first phase you will fight her in Shadow Queen Peach form, she will boost her defence and attack, she will create lightning with her eyes that will strike you",
      "In this phase you don't need to get her to the bottom of her 150HP",
      "Shadow Queen Peach will return to her original form and your attacks won't do a thing",
      "Your objective is to survive for as long as you can",
      "Then Peach will give you the rest of her power and your attacks will be able to do something to the Shadow Queen",
      "In this fight you will need many ultra mushrooms and jammin jellies",
      "When you can attack the Shadow Queen do as many attacks as you can",
      "Once she powers herself up, this is a sign she will do her strongest attack. She shoots out a giant dark ball of light that will do around 14 damage",
      "When she powers herself up you must use Vivian's veil move to dodge it.  Vivan is one of the most useful partners in this fight",
      "Since her sisters and her were friends with the Shadow Queen, she knows her moves."
    ],
    tips: [
      "Recommended HP: 70",
      "Recommended FP: 40",
      "Recommended Partner: Vivian"
    ],
  },
  blooper: {
    name: "Blooper",
    type: "Mini Boss",
    image: "/blooper-squid-mini-boss-paper-mario.png",
    hp: "12",
    attack: "1",
    defense: "0",
    location: "Rogueport Sewers",
    strategy: [
      "Blooper is not an incredibly tough boss fight",
      "Start by attacking the tentacles",
      "Once you have defeated the tentacles, Blooper will fall down and then it's possible to attack him",
      "When Blooper has fallen down attack him with as many power smashes as you can"
    ],
    tips: ["Recommended HP: 10", "Recommended FP: 5", "Recommended Partner: Goombella", "Recommended Badge: Power Smash"],
  },
  "red-bones": {
    name: "Red Bones",
    type: "Mini Boss",
    hp: "5",
    attack: "3",
    defense: "1",
    image: "/red-bones-skeleton-mini-boss-paper-mario.jpg",
    location: "Hooktail Castle",
    strategy: [
      "Red Bones appears in both Hooktail Castle and the Palace of Shadows.",
      "Fighting the Red Bones is a little bit tough but it has four Dull Bones beside it.  They can craft other Dull Bones.  The Red Bones will come back alive after a short time so defeat the Dull Bones first.  Jump won't do a thing to these enemies.  Try not to let the Red Bones make any more Dull Bones unless you are trying to get lots and lots of star points because in this fight you can get many many star points."
    ],
    tips: [
      "Recommended HP: 10",
      "Recommended FP: 5-10", 
      "Recommended Partner: Koops",
    ],
  },
  "three-shadows": {
    name: "The Three Shadows",
    type: "Mini Boss",
    image: "/three-shadows-ninja-mini-boss-paper-mario2.png",
    hp: "Beldam: 9, Marilyn: 12, Vivian: 10",
    attack: "2",
    defense: "0",
    location: "Boggly Woods",
    strategy: [
      "The Three Shadows is a little bit easy",
      "Try to hit them with a power smash, this will make it incredibly easy",
      "Marilyn is the toughest of the three shadows, she will power herself up two times and then Beldam will use the effect on her as a power punch.  This can make her incredibly tough.  This is why it's best to defeat Marilyn first"
    ],
    tips: ["Recommended HP: 15-20", "Recommended FP: 10"]
  },
  "iron-adonis-twins": {
    name: "The Iron Adonis Twins",
    type: "Mini Boss",
    image: "/iron-adonis-twins-mini-boss-paper-mario.png",
    hp: "6 each",
    attack: "4 or 5",
    defense: "Unknown",
    location: "Glitz Pit",
    strategy: [
      "The Iron Adonis Twins is a very hard boss fight.  None of your attacks will do a thing. After you battle them one time you will get Baby Yoshi.  You will discover their weaknesses by whacking one with the other. Use Yoshi's gulp attack to defeat them.  Make sure Baby Yoshi can't be attacked with Mario in front of him.",
    ],
    tips: [
      "Recommended HP: 15",
      "Recommended FP: 10-15",
    ],
  },
  "rawk-hawk": {
    name: "Rawk Hawk",
    image: "/rawk-hawk-hawk-wrestler-mini-boss-paper-mario.png",
    type: "Mini Boss",
    hp: "40",
    attack: "4",
    defense: "0",
    location: "Glitz Pit",
    strategy: [
      "Rawk Hawk is a powerful opponent.  After a short time of attacking him he will go high up.  In this state you cannot jump or hammer him.  Because he is holding onto the roof, Flurries body slam can hurt him.  He can also do a wall dive which can hurt you a lot.",
    ],
    tips: ["Recommended HP: 30", "Recommended FP: 15", "Recommended Partner: Flurrie"],
  },
  doopliss: {
    name: "Doopliss",
    type: "Mini Boss",
    image: "/dooplis-ghost-mini-boss-paper-mario.png",
    hp: "40",
    attack: "4",
    defense: "0",
    location: "Creepy Steeple",
    strategy: [
      "Basically just use Power Smash and you should be fine"
    ],
    tips: ["Recommended HP: 30", "Recommended FP: 15"],
  },
  bowser: {
    name: "Bowser",
    type: "Mini Boss",
    image: "/bowser-mini-boss-paper-mario.png",
    hp: "30",
    attack: "3",
    defense: "1",
    location: "The Glitz Pit",
    strategy: [
      "You will encounter Bowser after defeating the Magi Koopa Masters in the Glitz Pit.",
      "In this fight it doesn't matter if you win or lose, you will continue the game from there anyway.",
      "Bowser has a bite that can poison you and he has a ground pound that can make it so you can't attack with jump or hammer but you won't know which",
      "Baby Yoshi's ground pound won't do a thing.",
      "Bowser does look giant compared to Baby Yoshi, but Baby Yoshi can still gulp him for a powerful attack."
    ],
    tips: [
      "Recommended HP: Anything",
      "Recommended FP: Anything",
      "Recommended Partner: Anything",
    ],
  },
  "three-shadows-palace": {
    name: "The Three Shadows - Palace",
    type: "Mini Boss",
    image: "/three-shadows-palace.png",
    hp: "Doopliss: 40HP, Marilyn: 40HP, Beldam: 30HP",
    attack: "Doopliss: 6, Marilyn: 7, Beldam: 5",
    defense: "Doopliss: 0, Marilyn: 0, Beldam: 0",
    location: "Palace of Shadows",
    strategy: [
      "You fight the Three Shadows again in the Palace of Shadows.  It is an incredibly tough boss fight as they have added Doopliss to their team.  Doopliss has 40HP, Marilyn has 40HP, and Beldam has 30HP.",
      "As they are really tough, Goombella could possibly make a big difference, because if Doopliss uses his power to body swap, he does so with Goombella who is weak.",
      "It is best to knock out Marylin first because she powers herself up a lot and Beldam uses her magic on Marylin which has the same effect as the power punch.  Then Marylin hits you with an incredibly powerful thunder attack."
    ],
    tips: [
      "Recommended HP: 50-60",
      "Recommended FP: 30",
      "Recommended Partner: Goombella",
    ],
  },
  "dark-bones": {
    name: "Dark Bones",
    type: "Mini Boss",
    image: "/dark-bones.png",
    hp: "20",
    attack: "5",
    defense: "2",
    location: "Palace of Shadows",
    strategy: [
      "Dark Bones is the exact same as fighting the Red Bones but they have more HP and can do bigger attacks",
      "They also have more defence",
      "The Dull Bones have turned into Dry Bones.  The Dry Bones are just like the Red Bones.  They will come back alive after a short time",
      "Use the same tactics as the Red Bones fight and you should be able to win",
      "In this fight there is also a lot more star points than the Red Bones fight",
      "You can get from 50 star points to 60 star points"
    ],
    tips: ["Recommended HP: 50", "Recommended FP: 35", "Recommended Partner: Koops"],
  },
  "gloom-tail": {
    name: "Gloom Tail",
    type: "Mini Boss",
    image: "/gloomtail.png",
    hp: "80",
    attack: "8",
    defense: "2",
    location: "Palace of Shadows",
    strategy: [
      "Gloom Tail is Hook Tail's brother.  Gloom Tail has a mega breath attack that can do around 14 damage",
      "Gloom Tail has 80HP, otherwise most of his attacks are the same as Hook Tail's",
      "Gloom Tail can also poison you"
    ],
    tips: [
      "Recommended HP: 50",
      "Recommended FP: 30",
      "Recommended Partner: Admiral Bobbery",
    ],
  },
  grodus: {
    name: "Grodus",
    type: "Mini Boss",
    image: "/grodus.png",
    hp: "50",
    attack: "7",
    defense: "1",
    location: "Palace of Shadows",
    strategy: [
      "Grodus has 50HP but is still an incredibly tough boss fight.  Just like the Yuk has Mini Yuk X to protect itself, Grodus has Grodus X to protect itself.  Multi bounce is a good attack to get rid of the Grodus X.  Grodus is also immune to the jump attack unless you boost your attack power by using Power Punch and Power Lift.",
    ],
    tips: [
      "Recommended HP: 50",
      "Recommended FP: 40-50",
    ],
  },
  "bowser-palace": {
    name: "Bowser - Palace",
    type: "Mini Boss",
    image: "/bowser-palace.png",
    hp: "70",
    attack: "7",
    defense: "2",
    location: "Palace of Shadows",
    strategy: [
      "Bowser now has Kammy Koopa in the battle with him as a partner",
      "Bowser also now has 70 or 80 HP",
      "Kammy Koopa has about 40 HP",
      "Kammy Koopa will heal Bowser and use her magic with the power punch on Bowser to make him stronger",
      "Bowser has the same attacks in this fight.  Use your own battle strategies"
    ],
    tips: [
      "Recommended HP: 50",
      "Recommended FP: 35",
      "Recommended Partner: Admiral Bobbery",
    ],
  },
  "bonetail": {
    name: "Bonetail",
    type: "Secret Boss",
    image: "/bonetail.png",
    hp: "200",
    attack: "7",
    defense: "2",
    location: "Pit of 100 Trials",
    strategy: [
      "Bonetail has 200 HP and is tougher than the final boss the Shadow Queen",
      "Bonetail is located at the very bottom of the Pit of 100 Trials",
      "How tough can he get after 100 fights?",
      "Goombella is the best partner against Bonetail. First use your power lift to boost your defence and attack, then use Goombella's rally wink for another turn for Mario to attack",
      "Mario's attacks should be spring jump",
      "Bonetail is also known as the oldest sister in Hooktail's family",
      "Now she is so old she is just bones"
    ],
    tips: [
      "Recommended HP: 70",
      "Recommended FP: 35",
      "Recommended Partner: Goombella and Mrs Mauz"
    ],
  },
  "atomic-boo": {
    name: "Atomic Boo",
    type: "Secret Boss",
    image: "/atomic-boo.png",
    hp: "40",
    attack: "4",
    defense: "0",
    location: "Creepy Steeple",
    strategy: [
      "Atomic Boo attacks by sending out hundreds of boos",
      "Power Bounce can defeat Atomic Boo in about three attacks"
    ],
    tips: [
      "Recommended HP: Anything",
      "Recommended FP: Anything",
    ],
  },
  "prince-mush": {
    name: "Prince Mush",
    type: "Secret Boss",
    image: "/prince-mush.png",
    hp: "96",
    attack: "6",
    defense: "6",
    location: "Glitz Pit",
    strategy: [
      "Prince Mush is one of the toughest fights in the entire game",
      "Once you have done some damage to Prince Mush, your screen will say 'a fiery fighting spirit awakened in Prince Mushes body'",
      "This can spice stuff up a lot.  His punch increases to 21 damage. His kick moves increases to 110 damage",
      "The way to defeat these moves and the only way to defeat Prince Mush is the move Super Guard",
      "Prince Mush has a guard, a sidestep, and a jump move.  In these he will dodge and defend and in this state the super guard will mean Prince Mush cannot do his guard or attacks.  This is your chance to attack him.  This only lasts for one turn.",
      "Prince Mush will split up into three different Prince Mushes but only one of them is real.  Use Koops power shell to knock them all down even if it won't do a thing"
    ],
    tips: [
      "Recommended HP: 100",
      "Recommended FP: 50",
      "Recommended Partner: Koops",
    ],
  },
  "whacka": {
    name: "Whacka",
    type: "Secret Boss",
    image: "/whacker.png",
    hp: "108",
    attack: "10",
    defense: "1",
    location: "Pit of 100 Trials",
    strategy: [
      "Whacka has an attack that hurts himself",
      "It might seem weird but it is actually his most useful attack",
      "Whacka attacks with his own Whacka Bump which can only be found if Whacka had been attacked",
      "It makes stuff really hard",
      "Whacka can eat a normal Whacka Bump to regain 25HP",
      "Eating a red Whacka Bump will give him back 75HP",
      "Whacka can throw the normal Whacka Bump at you for 10 damage and the red Whacka Bump will do20 damage",
      "A clever way to beat Whacka is keep attacking until Whacka has about 20 HP left, and then continuously use the guard action.  Whacka won't be able to attack you unless he uses the attack that hurts himself until it gets defeated"
    ],
    tips: [
      "Recommended HP: 70",
      "Recommended FP: 40",
    ],
  },
  "gus": {
    name: "Gus",
    type: "Secret Boss",
    image: "/gus.png",
    hp: "20",
    attack: "3",
    defense: "0",
    location: "Rogueport West",
    strategy: [
      "Gus is one of the easiest secret bosses",
      "You can defeat him at the start of the game if you buy fire flowers, mushrooms, and sleepy sheep from the shop"
    ],
    tips: [
      "Recommended HP: 10",
      "Recommended FP: 5",
      "Recommended Partner: Goombella",
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
