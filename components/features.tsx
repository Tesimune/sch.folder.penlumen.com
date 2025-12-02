import { Award, Users, BookOpen, Trophy } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to academic excellence and holistic development",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive and inclusive school community",
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Modern curriculum with experienced educators",
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Celebrating student success and growth",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-lg text-muted-foreground">Discover what makes Optimum Achievers Academy special</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
