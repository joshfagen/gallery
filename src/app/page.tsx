import Link from "next/link";
const mockUrls = [
  'https://utfs.io/f/38b0c3e7-533d-44e2-8748-86cd1e699135-dayvvh.webp',
  'https://utfs.io/f/5a6a549b-53f7-471d-a200-cd6194f81523-f687ea.jpg',
  'https://utfs.io/f/94619253-13a6-45d8-9215-3cb99cb82c80-2bol.png',
  'https://utfs.io/f/a3687fb7-7752-40f3-a137-faab2e60cac1-r6q6q0.jpg'
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />

          </div>
        ))}
      </div>
    </main>
  );
}
