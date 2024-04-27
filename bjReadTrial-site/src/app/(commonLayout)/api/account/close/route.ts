import { NextResponse } from "next/server"
import { supabase } from "src/libs/supabase/client/routeHandlerClient"
import { supabaseAdmin } from "src/libs/supabase/client/adminClient"
import { cookies } from "next/headers"
import { cache } from "react"

const createApiRouteClient = cache(() => {
  const cookieStore = cookies()
  return supabase(cookieStore)
})

export async function DELETE() {
  const supabase = createApiRouteClient()
  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    return NextResponse.json({ status: 401, message: "Not logged in" })
  }

  const { error } = await supabaseAdmin.auth.admin.deleteUser(data.user.id)

  if (error) {
    return NextResponse.json(error, { status: 403 })
  }

  supabaseAdmin.auth.refreshSession()
  await supabase.auth.signOut()

  return NextResponse.json("Account closed successfully", { status: 200 })
}
