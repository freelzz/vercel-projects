import { Card, CardContent } from "@/components/ui/card"
import { Activity, Target, TrendingUp, Users } from "lucide-react"
import { FeaturesAnimation } from "@/components/features-animation"

const features = [
  {
    icon: Activity,
    title: "Smart Workout Tracking",
    description: "Automatically track your exercises with AI-powered form analysis and real-time feedback.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description: "Set and achieve custom fitness goals with intelligent recommendations based on your progress.",
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and insights to stay motivated.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with like-minded fitness enthusiasts and share your achievements.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FeaturesAnimation />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FitTracker?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the features that make FitTracker the perfect companion for your fitness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-2 bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:rotate-12">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
