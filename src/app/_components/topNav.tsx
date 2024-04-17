import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex items-center justify-between 
      w-full border-b p-4 text-xl ">
        <div className="text-yellow-200">Your Sites</div>
        <div>
          <SignedOut>
            <SignInButton>
              <button className="text-yellow-200">Sign-In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }