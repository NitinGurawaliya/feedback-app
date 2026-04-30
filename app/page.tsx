import Link from "next/link";

const Home = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-3">
        <p>this is landing page</p>
        <Link
          href="/package-verify"
          className="inline-block rounded-md bg-black px-4 py-2 text-sm text-white"
        >
          Open package verification flow
        </Link>
      </div>
    </main>
  );
};


export default Home;