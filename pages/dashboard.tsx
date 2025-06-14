import { useEffect, useState } from 'react'
import { useSession } from '@supabase/auth-helpers-react'
import { supabase } from '../lib/supabase'
import { Database } from '../types/supabase'

export default function Dashboard() {
  const session = useSession()
  const [projects, setProjects] = useState<Database['public']['Tables']['projects']['Row'][]>([])

  useEffect(() => {
    const fetchProjects = async () => {
      if (!session) return
      const { data } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', session.user?.id)
      setProjects(data || [])
    }
    fetchProjects()
  }, [session])

  if (!session) {
    return <p className="p-4">Please login to view this page.</p>
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-xl font-bold">Your Projects</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}
