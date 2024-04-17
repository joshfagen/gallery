import Link from "next/link";
import { SignedOut, SignedIn, SignInButton} from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const images = await db.query.images.findMany({
  orderBy: (model, { desc }) => desc(model.id),
});

// async function Images() {
//     {[...images, ...images, ...images].map((image, index) => (
//       <div key={`${image.id}-${index}`} className="w-48 flex-col">
//         <img src={image.url}/>
//         <div className="text-yellow-200">{image.name.toUpperCase()}</div>

//       </div>
//     ))}
// }
export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full pt-16 text-2xl text-center">
          Please Sign-In&nbsp; 
          <SignInButton>
            <button className='text-yellow-200 hover:underline'>Here</button>
          </SignInButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48 flex-col">
            <img src={image.url}/>
            <div className="text-yellow-200">{image.name.toUpperCase()}</div>

          </div>
        ))}
        </div>
      </SignedIn>
    </main>
  );
}
