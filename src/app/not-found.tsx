import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#222630] text-white flex items-center justify-center text-center">
      <div>
        <h1 className="text-7xl font-bold text-[#C2F800]">404</h1>

        <h2 className="mt-2 text-2xl font-bold">PAGE NOT FOUND</h2>

        <p className="mt-2 text-sm text-[#9CA3AF]">
          This page does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-5 px-5 py-2 bg-[#C2F800] text-black rounded-lg font-semibold text-sm"
        >
          BACK TO HOME
        </Link>
      </div>
    </main>
  );
}    