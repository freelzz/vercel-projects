import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { PricingAnimation } from "@/components/pricing-animation"

const plans = [
  {
    name: "Basic",
    price: "$9",
    period: "/month",
    description: "Perfect for fitness beginners",
    features: ["Basic workout tracking", "Progress charts", "Mobile app access", "Email support"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "Most popular for serious athletes",
    features: [
      "Advanced analytics",
      "Personalized coaching",
      "Nutrition tracking",
      "Priority support",
      "Custom workout plans",
      "Community access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Team management",
      "Admin dashboard",
      "API access",
      "Custom integrations",
      "Dedicated support",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <PricingAnimation />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your fitness journey. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all duration-500 hover:scale-105 hover:-translate-y-4 bg-background/90 backdrop-blur-sm ${plan.popular ? "border-primary shadow-lg scale-105 animate-pulse" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full transition-all duration-300 hover:scale-105"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
