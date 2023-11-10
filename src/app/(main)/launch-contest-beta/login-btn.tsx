import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    console.log('Signed in with session: ', session)
    return (
      <div className="flex flex-col text-center">
        <div className="text-white mb-4">
            Signed in as {session?.user?.name}
        </div>

        <div>
            <button
                onClick={() => signOut()}
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Sign out
            </button>
        </div>
      </div>
    )
  }
  return (
    <div className="flex flex-col text-center">
        {/* <div className="text-white">
            Not signed in
        </div> */}

        <div>
            <button
                onClick={() => signIn()}
                type="button"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Connect your Instagram account (via Facebook)
            </button>
        </div>
    </div>
  )
}