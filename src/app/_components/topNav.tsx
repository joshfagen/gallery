"use client";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
    const router = useRouter(); 
    return (
      <nav className="flex items-center justify-between 
      w-full border-b p-4 text-xl ">
        <div className="text-yellow-200">Your Sites</div>
        <div className="flex flex-row">
          <SignedOut>
            <SignInButton>
              <button className="text-yellow-200">Sign-In</button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UploadButton 
              endpoint="imageUploader" 
              onClientUploadComplete={(res) => {
                console.log(`onClientUploadComplete`, res)
                location.reload();
              }}  
            />
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    )
  }