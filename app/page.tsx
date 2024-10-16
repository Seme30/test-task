import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-mediumBlue items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-xl mb-8">Developed by Semahegn Adugna</p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Connect with me</h2>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/semahegn-adugna" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com/Seme30" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: semahegn.adugna1@gmail.com</p>
          <p>Phone: +251949624951</p>
        </div>

        <Link href="/dashboard" className="bg-darkBlue hover:bg-lightBlue text-white font-bold py-2 px-4 rounded">
          Go to the UI
        </Link>
      </main>
    </div>
  );
}
