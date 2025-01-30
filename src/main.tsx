import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { PlayerInfoProvider } from './context/player-info.context.tsx'
import { RandomSpawnMonstersProvider } from './context/random-spawn-monsters.context.tsx'
import { StepsProvider } from './context/steps-context.tsx'
import { InventoryProvider } from './context/inventory.context.tsx'
import { NotificationProvider } from './context/notification.context.tsx'
import { PermisionProvider } from './context/permision.context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PermisionProvider>
      <StepsProvider>
        <NotificationProvider>
          <PlayerInfoProvider>
            <InventoryProvider>
              <RandomSpawnMonstersProvider>
                <App />
              </RandomSpawnMonstersProvider>
            </InventoryProvider>
          </PlayerInfoProvider>
        </NotificationProvider>
      </StepsProvider>
    </PermisionProvider>
  </StrictMode>,
)
