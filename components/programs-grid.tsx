import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, Code, Brain, Cog, Clock, Users, Award, Gamepad2, Cpu, Printer, Wifi, Lightbulb, Beaker, BookOpen, Calendar } from "lucide-react"

const programs = [
  {
    id: "early-robotics",
    icon: Bot,
    title: "Early Robotics & Coding for Kids",
    description:
      "Introduction to robotics and programming concepts designed specifically for young learners aged 4-18.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "8 weeks",
    groupSize: "6-10 students",
    skills: ["Basic Programming", "Robot Building", "Logic", "Problem Solving"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Introduction to robotics fundamentals",
      "Building simple robots with basic components",
      "Programming robot movements and responses",
      "Fun robotics challenges and competitions",
    ],
  },
  {
    id: "creative-coding",
    icon: Gamepad2,
    title: "Creative Coding & Game Development",
    description: "Learn to create games, animations, and interactive projects while mastering programming concepts.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "10 weeks",
    groupSize: "8-12 students",
    skills: ["Game Design", "Programming", "Animation", "Creative Thinking"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Game design principles and storytelling",
      "Creating interactive animations and characters",
      "Building simple games from scratch",
      "Advanced game mechanics and features",
    ],
  },
  {
    id: "arduino-electronics",
    icon: Cpu,
    title: "Arduino & Electronics",
    description:
      "Hands-on experience with electronic circuits, sensors, and Arduino programming for real-world projects.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "12 weeks",
    groupSize: "6-8 students",
    skills: ["Circuit Design", "Arduino Programming", "Electronics", "Hardware"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Basic electronics and circuit fundamentals",
      "Introduction to Arduino and microcontrollers",
      "Building sensor-based projects",
      "Creating interactive electronic devices",
    ],
  },
  {
    id: "robotics-engineering",
    icon: Cog,
    title: "Robotics Engineering",
    description: "Advanced robotics concepts including mechanical design, programming, and autonomous systems.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "14 weeks",
    groupSize: "8-10 students",
    skills: ["Mechanical Design", "Advanced Programming", "Sensors", "Automation"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Advanced robotics engineering principles",
      "Designing and building complex robots",
      "Programming autonomous behaviors",
      "Robotics competitions and challenges",
    ],
  },
  {
    id: "3d-design",
    icon: Printer,
    title: "3D Design & Printing",
    description: "Learn 3D modeling software and bring your digital creations to life with 3D printing technology.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "8 weeks",
    groupSize: "6-10 students",
    skills: ["3D Modeling", "Design Thinking", "3D Printing", "CAD"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Introduction to 3D design software",
      "Creating and modeling 3D objects",
      "Understanding 3D printing processes",
      "Designing functional and creative projects",
    ],
  },
  {
    id: "iot-smart-devices",
    icon: Wifi,
    title: "IoT & Smart Devices",
    description:
      "Explore the Internet of Things by building connected devices and smart home automation systems.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "10 weeks",
    groupSize: "6-8 students",
    skills: ["IoT Programming", "Connectivity", "Smart Systems", "Network Basics"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Understanding IoT and connected devices",
      "Building simple smart home projects",
      "Programming device connectivity",
      "Creating automated smart systems",
    ],
  },
  {
    id: "steam-challenges",
    icon: Lightbulb,
    title: "STEAM Challenges & Innovation Labs",
    description: "Interdisciplinary projects combining Science, Technology, Engineering, Arts, and Mathematics.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "6 weeks",
    groupSize: "8-12 students",
    skills: ["Innovation", "Design Thinking", "Collaboration", "Creativity"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Creative problem-solving methodologies",
      "Interdisciplinary project development",
      "Innovation and design thinking workshops",
      "Presenting solutions to real-world challenges",
    ],
  },
  {
    id: "science-backed",
    icon: Beaker,
    title: "Science-Backed Activities",
    description: "Hands-on experiments and activities that reinforce scientific concepts through practical application.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "8 weeks",
    groupSize: "8-10 students",
    skills: ["Scientific Method", "Experimentation", "Analysis", "Research"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Scientific method and hypothesis testing",
      "Conducting controlled experiments",
      "Data collection and analysis",
      "Connecting theory to practical applications",
    ],
  },
  {
    id: "project-based",
    icon: BookOpen,
    title: "Project Based Learning",
    description: "Long-term projects that integrate multiple STEM disciplines to solve complex real-world problems.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "12 weeks",
    groupSize: "6-8 students",
    skills: ["Project Management", "Research", "Collaboration", "Presentation"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Project planning and management skills",
      "Research and development processes",
      "Collaborative problem-solving techniques",
      "Final project presentation and showcase",
    ],
  },
  {
    id: "summer-camps",
    icon: Calendar,
    title: "Summer STEM Camps & After-School Clubs",
    description: "Intensive summer programs and ongoing after-school activities to maintain STEM engagement year-round.",
    color: "text-black",
    bgColor: "bg-black/10",
    borderColor: "border-black/20",
    duration: "Varies",
    groupSize: "10-15 students",
    skills: ["Various STEM Skills", "Teamwork", "Leadership", "Fun Learning"],
    ageGroups: ["Ages 4-18"],
    curriculum: [
      "Intensive hands-on STEM activities",
      "Team-building and collaboration exercises",
      "Special guest speakers and field trips",
      "Showcase activities and competitions",
    ],
  },
]

export function ProgramsGrid() {
  return (
    <section className="py-20 bg-[#f6f6f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">Our STEM Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each program is carefully designed to provide age-appropriate challenges and real-world learning
            experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon
            return (
              <Card
                key={program.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 border bg-white"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-xl bg-black/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.ageGroups.map((age) => (
                        <Badge key={age} variant="secondary" className="text-xs text-black bg-gray-100">
                          {age}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2 text-black">{program.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed text-gray-600">{program.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Program details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {program.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {program.groupSize}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Skills You'll Learn
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {program.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs text-black border-gray-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Curriculum preview */}
                  <div>
                    <h4 className="font-semibold text-black mb-3">What You'll Build</h4>
                    <ul className="space-y-2">
                      {program.curriculum.slice(0, 2).map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-black/50 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white transition-colors">
                    Learn More About {program.title}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
