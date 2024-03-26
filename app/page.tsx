import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Link href={"/contacts"}>
        <button className="bg-blue-600 px-6 py-2 rounded-md text-white hover:bg-blue-700 transition-all duration-300">
          Go to Contact
        </button>
      </Link>
    </div>
  );
}
