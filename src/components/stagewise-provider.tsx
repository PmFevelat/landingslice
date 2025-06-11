'use client'

import { useEffect } from 'react'

export function StagewiseProvider() {
  useEffect(() => {
    // Seulement en mode développement et côté client
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      const loadStagewise = async () => {
        try {
          const { StagewiseToolbar } = await import('@stagewise/toolbar-next')
          const { ReactPlugin } = await import('@stagewise-plugins/react')
          
          // Créer un div container pour stagewise
          const container = document.createElement('div')
          container.id = 'stagewise-toolbar-container'
          document.body.appendChild(container)
          
          // Utiliser React.createElement pour éviter les conflits JSX
          const React = await import('react')
          const ReactDOM = await import('react-dom/client')
          
          const toolbar = React.createElement(StagewiseToolbar, {
            config: { plugins: [ReactPlugin] }
          })
          
          const root = ReactDOM.createRoot(container)
          root.render(toolbar)
        } catch (error) {
          console.warn('Stagewise toolbar failed to load:', error)
        }
      }
      
      loadStagewise()
    }
  }, [])

  return null
} 