import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PlayerInfoProvider } from './context/player-info.context.tsx'
import { RandomSpawnMonstersProvider } from './context/random-spawn-monsters.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerInfoProvider>
      <RandomSpawnMonstersProvider>
        <App />
      </RandomSpawnMonstersProvider>
    </PlayerInfoProvider>
  </StrictMode>,
)
