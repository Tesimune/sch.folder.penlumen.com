export default function CTA() {
  return (
    <section className="py-20 px-4 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold">Ready to Join Us?</h2>
        <p className="text-lg text-primary-foreground/90">
          Become part of our community of achievers and discover your potential
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  )
}
