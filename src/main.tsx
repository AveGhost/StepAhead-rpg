import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PlayerInfoProvider } from './context/player-info.context.tsx'
import { EnemyInfoProvider } from './context/enemy-info.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerInfoProvider>
      <EnemyInfoProvider>
        <App />
      </EnemyInfoProvider>
    </PlayerInfoProvider>
  </StrictMode>,
)
