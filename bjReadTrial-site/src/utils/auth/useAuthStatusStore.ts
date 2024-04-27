import type { User } from "@supabase/supabase-js"
import { supabase } from "src/libs/supabase/client/browserClient"
import { create } from "zustand"
import { devtools } from "zustand/middleware"

type State = {
  isSignIned: boolean
  user: User | null
}

type Action = {
  login: (email: string, password: string) => Promise<{ statusCode: number }>
  logout: () => Promise<{ statusCode: number }>
  revalidate: () => Promise<void>
}

export const useAuthStatusStore = create<State & Action>()(
  devtools(
    (set) => ({
      isSignIned: false,
      user: null,
      login: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) {
          return { statusCode: error.status! }
        }
        set({ isSignIned: true, user: data.user }, false, "login")
        return { statusCode: 200 }
      },
      logout: async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
          return { statusCode: error.status! }
        }
        set({ isSignIned: false, user: null }, false, "logout")
        return { statusCode: 200 }
      },
      revalidate: async () => {
        const { data } = await supabase.auth.getSession()
        if (!data.session?.user) {
          set({ isSignIned: false, user: null }, false, "revalidate")
          return
        }
        set({ isSignIned: true, user: data.session?.user }, false, "revalidate")
        return
      },
    }),
    {
      name: "useAuthStatusStore",
      logName: "useAuthStatusStore",
    },
  ),
)
