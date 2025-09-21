import { Card, CardContent } from "@/components/ui/card"
import { Download, Play, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Download,
    title: "Download & Setup",
    description: "Get started in minutes with our easy setup process and personalized onboarding.",
  },
  {
    icon: Play,
    title: "Start Tracking",
    description: "Begin logging your workouts, meals, and activities with our intuitive interface.",
  },
  {
    icon: BarChart3,
    title: "See Results",
    description: "Watch your progress unfold with detailed analytics and achievement milestones.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with FitTracker in three simple steps and transform your fitness routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border transform -translate-y-1/2"></div>
                )}
              </div>
              <div className="mt-4 text-sm font-medium text-primary">Step {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
