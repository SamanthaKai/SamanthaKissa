export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-charcoal/10 dark:border-cream/10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <p className="font-heading text-lg font-medium text-charcoal dark:text-cream">Samantha Kissa</p>
          <p className="mt-1 text-sm text-charcoal/55 dark:text-cream/55">Cybersecurity | AI | Full-Stack Development</p>
        </div>
        <p className="text-sm text-charcoal/45 dark:text-cream/45">© {year} Samantha Kissa</p>
      </div>
    </footer>
  )
}
