import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "You get full access to all Pro features for 14 days, no credit card required. You can cancel anytime during the trial period without any charges.",
  },
  {
    question: "Can I sync data from other fitness apps?",
    answer:
      "Yes! FitTracker integrates with popular fitness apps and wearables including Apple Health, Google Fit, Fitbit, and more to provide a comprehensive view of your fitness data.",
  },
  {
    question: "Is my data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade encryption and follow strict privacy policies. Your personal fitness data is never shared with third parties without your explicit consent.",
  },
  {
    question: "Can I use FitTracker offline?",
    answer:
      "Yes, our mobile app works offline for workout tracking and logging. Data syncs automatically when you reconnect to the internet.",
  },
  {
    question: "Do you offer team or family plans?",
    answer:
      "Yes! Our Enterprise plan includes team management features, and we offer special family discounts. Contact our sales team for custom pricing options.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about FitTracker and our fitness tracking platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
