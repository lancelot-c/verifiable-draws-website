import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn({ setAccessToken }: { setAccessToken: (a: string) => void}) {
  const { data: session } = useSession()
  if (session) {
    console.log('Signed in with session: ', session)
    setAccessToken((session?.user as any).accessToken);

    return (
      <div className="flex flex-col text-center">
        <div className="text-white mb-4">
            Connected to Instagram as {session?.user?.name}
        </div>

        <div>
            <button
                onClick={() => signOut()}
                type="button"
                className="rounded-md mb-12 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

        

        

            <button
                onClick={() => signIn()}
                type="button"
                className="rounded-full mb-12 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Retrieve from Instagram
            </button>

            
    </div>
  )
}