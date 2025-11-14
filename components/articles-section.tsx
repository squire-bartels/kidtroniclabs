import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, ArrowRight } from "lucide-react"

const articles = [
  {
    id: "why-stem-matters",
    title: "Why STEM Education Matters More Than Ever",
    description:
      "Discover how STEM skills are shaping the future job market and why early exposure is crucial for your child's success.",
    category: "For Parents",
    readTime: "5 min read",
    author: "Dr. Sarah Kim",
    date: "Jan 15, 2024",
    image: "/placeholder.svg?height=200&width=300&text=STEM+Education+Importance",
    featured: true,
  },
  {
    id: "future-skills",
    title: "Essential Skills for Tomorrow's Workforce",
    description:
      "Learn about the key competencies your child needs to develop to thrive in an increasingly digital world.",
    category: "Career Prep",
    readTime: "7 min read",
    author: "Mark Johnson",
    date: "Jan 12, 2024",
    image: "/placeholder.svg?height=200&width=300&text=Future+Skills",
    featured: true,
  },
  {
    id: "diy-stem-home",
    title: "10 DIY STEM Projects You Can Do at Home",
    description: "Simple, fun experiments and projects using everyday household items to spark curiosity and learning.",
    category: "DIY Projects",
    readTime: "10 min read",
    author: "Lisa Chen",
    date: "Jan 10, 2024",
    image: "/placeholder.svg?height=200&width=300&text=DIY+STEM+Projects",
    featured: true,
  },
  {
    id: "coding-for-kids",
    title: "Getting Started with Coding: A Parent's Guide",
    description:
      "Everything you need to know about introducing your child to programming, from choosing languages to finding resources.",
    category: "For Parents",
    readTime: "8 min read",
    author: "Alex Rodriguez",
    date: "Jan 8, 2024",
    image: "/placeholder.svg?height=200&width=300&text=Coding+for+Kids",
    featured: false,
  },
  {
    id: "robotics-basics",
    title: "Robotics in Education: Building Tomorrow's Engineers",
    description:
      "How robotics programs develop critical thinking, problem-solving, and collaboration skills in students.",
    category: "Robotics",
    readTime: "6 min read",
    author: "Dr. Michael Park",
    date: "Jan 5, 2024",
    image: "/placeholder.svg?height=200&width=300&text=Robotics+Education",
    featured: false,
  },
  {
    id: "ai-for-kids",
    title: "Demystifying AI: Making Artificial Intelligence Kid-Friendly",
    description:
      "Simple explanations and activities to help children understand AI concepts and their real-world applications.",
    category: "AI & Technology",
    readTime: "9 min read",
    author: "Emma Thompson",
    date: "Jan 3, 2024",
    image: "/placeholder.svg?height=200&width=300&text=AI+for+Kids",
    featured: false,
  },
]

export function ArticlesSection() {
  const featuredArticles = articles.filter((article) => article.featured)
  const regularArticles = articles.filter((article) => !article.featured)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Latest Articles & Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights and practical advice to support your child's STEM learning journey.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">Featured Articles</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-xl leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="leading-relaxed">{article.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:bg-primary/10 group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regular Articles */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8">More Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="font-serif text-lg leading-tight group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">{article.description}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {article.author} • {article.date}
                    </div>
                    <Button variant="ghost" size="sm" className="text-xs">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
