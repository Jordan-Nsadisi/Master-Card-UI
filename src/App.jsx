import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <main class="flex h-screen w-screen items-center justify-center bg-[url('https://i.imgur.com/1O8ovx1.jpeg')] bg-cover">
      <div class="flex h-64 w-[26rem] flex-col rounded-3xl border-2 border-white/80 bg-gradient-to-br from-white/30 to-white/30 p-8 text-white shadow-lg backdrop-blur-lg">
        <div class="flex w-full items-center">
          <h2 class="mr-auto text-2xl font-bold">Mastercard</h2>
          <img class="size-8" src="https://i.imgur.com/eLwgPd2.png" alt="" />
        </div>
        <div class="mt-auto flex w-full items-end">
          <div class="mr-auto flex w-fit flex-col gap-2">
            <div class="flex items-baseline">
              <p class="uppercase">Jordan nsadisi</p>
              <p class="ml-auto font-mono">5/25</p>
            </div>
            <p class="font-mono text-lg font-bold">1234 5678 9876 5432</p>
          </div>

          <div class="w-16 rounded-md bg-white/20 p-2">
            <img src="https://i.imgur.com/GaIY1JU.png" alt="" />
          </div>
        </div>

      </div>
    </main>
  )
}

export default App
