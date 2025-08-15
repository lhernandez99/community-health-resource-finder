import { useMemo } from 'react'
import raw from '../data/resources.json'

export default function useResources() {
  const resources = raw

  const categories = useMemo(() => Array.from(new Set(resources.map(r => r.category))).sort(), [resources])
  const services = useMemo(() => {
    const set = new Set()
    resources.forEach(r => (r.services||[]).forEach(s => set.add(s)))
    return Array.from(set).sort()
  }, [resources])

  return { resources, categories, services }
}
