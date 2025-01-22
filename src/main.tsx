import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PlayerInfoProvider } from './context/player-info.context.tsx'
import { RandomSpawnMonstersProvider } from './context/random-spawn-monsters.context.tsx'
import { StepsProvider } from './context/steps-context.tsx'
import { InventoryProvider } from './context/inventory.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StepsProvider>
      <PlayerInfoProvider>
        <InventoryProvider>
          <RandomSpawnMonstersProvider>
            <App />
          </RandomSpawnMonstersProvider>
        </InventoryProvider>
      </PlayerInfoProvider>
    </StepsProvider>
  </StrictMode>,
)
