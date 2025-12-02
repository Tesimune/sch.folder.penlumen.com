export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-blue-50 to-background flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-balance">
          <span className="text-primary">Optimum Achievers</span> Academy
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
          Empowering students to reach their full potential through excellence in education and character development
        </p>
        <div className="flex gap-4 justify-center pt-8">
          <a
            href="/about"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
