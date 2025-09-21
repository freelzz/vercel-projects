import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fitness Enthusiast",
    content:
      "FitTracker has completely transformed my workout routine. The AI coaching is incredibly helpful and the progress tracking keeps me motivated every day.",
    rating: 5,
    avatar: "/woman-fitness-enthusiast.jpg",
  },
  {
    name: "Mike Chen",
    role: "Personal Trainer",
    content:
      "As a trainer, I recommend FitTracker to all my clients. The detailed analytics help me create better programs and track their progress effectively.",
    rating: 5,
    avatar: "/man-personal-trainer.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marathon Runner",
    content:
      "The nutrition tracking and goal setting features are game-changers. I've improved my marathon times significantly since using FitTracker.",
    rating: 5,
    avatar: "/woman-marathon-runner.jpg",
  },
  {
    name: "David Kim",
    role: "Gym Owner",
    content:
      "We use FitTracker Enterprise for our gym members. The community features and team management tools have increased member engagement by 40%.",
    rating: 5,
    avatar: "/man-gym-owner.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their fitness journey with FitTracker.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
