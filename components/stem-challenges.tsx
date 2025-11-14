import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Users, Star } from "lucide-react"

const challenges = [
  {
    id: "paper-tower",
    title: "Paper Tower Challenge",
    description:
      "Build the tallest tower using only newspaper and tape. Learn about structural engineering and design principles.",
    difficulty: "Beginner",
    duration: "30 minutes",
    ageGroup: "Ages 4-18",
    materials: ["Newspaper", "Tape", "Scissors"],
    skills: ["Engineering", "Problem Solving", "Creativity"],
    image: "/placeholder.svg?height=200&width=300&text=Paper+Tower+Challenge",
    popular: true,
  },
  {
    id: "robot-maze",
    title: "Robot Navigation Maze",
    description: "Program a simple robot to navigate through a maze using basic coding concepts and logical thinking.",
    difficulty: "Intermediate",
    duration: "45 minutes",
    ageGroup: "Ages 4-18",
    materials: ["Cardboard", "Markers", "Simple Robot Kit"],
    skills: ["Coding", "Logic", "Spatial Reasoning"],
    image: "/placeholder.svg?height=200&width=300&text=Robot+Maze+Challenge",
    popular: true,
  },
  {
    id: "water-filter",
    title: "DIY Water Filter",
    description: "Create a water filtration system using everyday materials and learn about environmental engineering.",
    difficulty: "Intermediate",
    duration: "60 minutes",
    ageGroup: "Ages 4-18",
    materials: ["Plastic Bottles", "Sand", "Gravel", "Coffee Filters"],
    skills: ["Environmental Science", "Engineering", "Chemistry"],
    image: "/placeholder.svg?height=200&width=300&text=Water+Filter+Challenge",
    popular: false,
  },
  {
    id: "led-circuit",
    title: "LED Light Circuit",
    description:
      "Build your first electrical circuit and make LEDs light up while learning about electricity and circuits.",
    difficulty: "Beginner",
    duration: "25 minutes",
    ageGroup: "Ages 4-18",
    materials: ["LEDs", "Battery", "Copper Wire", "Resistors"],
    skills: ["Electronics", "Physics", "Problem Solving"],
    image: "/placeholder.svg?height=200&width=300&text=LED+Circuit+Challenge",
    popular: true,
  },
  {
    id: "bridge-building",
    title: "Strongest Bridge Challenge",
    description:
      "Design and build a bridge that can hold the most weight using limited materials and engineering principles.",
    difficulty: "Advanced",
    duration: "90 minutes",
    ageGroup: "Ages 4-18",
    materials: ["Popsicle Sticks", "Glue", "String", "Weights"],
    skills: ["Structural Engineering", "Physics", "Design Thinking"],
    image: "/placeholder.svg?height=200&width=300&text=Bridge+Building+Challenge",
    popular: false,
  },
  {
    id: "solar-oven",
    title: "Solar Oven Design",
    description: "Harness the power of the sun to cook food while learning about renewable energy and heat transfer.",
    difficulty: "Intermediate",
    duration: "75 minutes",
    ageGroup: "Ages 4-18",
    materials: ["Cardboard Box", "Aluminum Foil", "Black Paper", "Plastic Wrap"],
    skills: ["Renewable Energy", "Physics", "Environmental Science"],
    image: "/placeholder.svg?height=200&width=300&text=Solar+Oven+Challenge",
    popular: false,
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function STEMChallenges() {
  const popularChallenges = challenges.filter((challenge) => challenge.popular)
  const allChallenges = challenges.filter((challenge) => !challenge.popular)

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">STEM Challenges & Activities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on challenges and experiments that make learning fun and engaging for kids of all ages.
          </p>
        </div>

        {/* Popular Challenges */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-serif font-bold text-foreground">Popular Challenges</h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {popularChallenges.map((challenge) => (
              <Card
                key={challenge.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={challenge.image || "/placeholder.svg"}
                    alt={challenge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {challenge.duration}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">{challenge.description}</CardDescription>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      {challenge.ageGroup}
                    </div>

                    <div>
                      <div className="text-sm font-medium text-foreground mb-2">Skills You'll Learn:</div>
                      <div className="flex flex-wrap gap-1">
                        {challenge.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Start Challenge
                    <Trophy className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Challenges */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">More Challenges</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allChallenges.map((challenge) => (
              <Card key={challenge.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className={getDifficultyColor(challenge.difficulty)}>{challenge.difficulty}</Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {challenge.duration}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">
                    {challenge.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{challenge.description}</CardDescription>

                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">{challenge.ageGroup}</div>
                    <div className="flex flex-wrap gap-1">
                      {challenge.skills.slice(0, 2).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {challenge.skills.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{challenge.skills.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    View Challenge
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Browse All Challenges
          </Button>
        </div>
      </div>
    </section>
  )
}
