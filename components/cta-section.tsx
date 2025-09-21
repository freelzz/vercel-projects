import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Transform Your Fitness Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Join thousands of users who have already achieved their fitness goals with FitTracker. Start your free trial
            today and experience the difference.
          </p>

          <Button size="lg" className="text-lg px-8 py-6">
            Start Free Trial
          </Button>

          <p className="text-sm text-muted-foreground mt-4">No credit card required • Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
