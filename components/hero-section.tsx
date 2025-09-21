"use client"

import { Button } from "@/components/ui/button"
import { HeroAnimation } from "@/components/hero-animation"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Animation Background */}
      <div className="absolute inset-0 z-0">
        <HeroAnimation />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Transform Your Fitness Journey with Smart Tracking
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            The ultimate fitness companion that helps you track workouts, monitor progress, and achieve your health
            goals with intelligent insights and personalized recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button size="lg" className="text-lg px-8 py-6 transition-all duration-300 hover:scale-110 hover:shadow-lg">
              Get Started Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              Book a Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4 animate-in fade-in duration-1000 delay-700">
            No credit card required • 14-day free trial
          </p>
        </div>
      </div>
    </section>
  )
}
