import { useEffect } from 'react'

const SITE = 'Samantha Kissa'

function setMeta(selector, attr, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    const [, key, name] = selector.match(/\[(\w+)="([^"]+)"\]/)
    el.setAttribute(key, name)
    document.head.appendChild(el)
  }
  el.setAttribute(attr, value)
}

// Sets the document title and description for the current page.
export default function usePageMeta(title, description) {
  useEffect(() => {
    const full = title ? `${title} · ${SITE}` : `${SITE} · Cybersecurity, AI and Software`
    document.title = full
    setMeta('meta[property="og:title"]', 'content', full)
    if (description) {
      setMeta('meta[name="description"]', 'content', description)
      setMeta('meta[property="og:description"]', 'content', description)
    }
  }, [title, description])
}
