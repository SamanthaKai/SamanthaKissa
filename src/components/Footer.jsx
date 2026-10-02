export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-charcoal/10 dark:border-cream/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-charcoal/50 dark:text-cream/50">
        <p>© {year} Samantha Kissa</p>
        <a href="#hero" className="hover:text-charcoal dark:hover:text-cream transition-colors">
          Back to top
        </a>
      </div>
    </footer>
  )
}
