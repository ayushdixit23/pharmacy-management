import { Button } from "@/components/ui/button"

export function AboutCta() {
  return (
    <section className="py-20 px-4 bg-[#0f766e]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join hundreds of pharmacies already simplifying operations with Pharmy
        </h2>
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          Ready to transform your pharmacy management? Start your free trial today and see the difference Pharmy can
          make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#0f766e] hover:bg-white/90 font-semibold">
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
