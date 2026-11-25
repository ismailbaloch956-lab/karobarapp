import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Navigation */}
      <nav className="bg-slate-900 text-white px-8 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">
            Karobar App
          </h1>

          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>

            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to Karobar App
            </h2>

            <p className="text-lg mb-8 text-blue-100">
              We provide creative digital solutions to help businesses
              grow and build their online presence.
            </p>

            <Link
              href="/about"
              className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white/10 rounded-2xl p-8 text-center w-full max-w-sm">
            <div className="w-36 h-36 rounded-full bg-blue-200 mx-auto mb-5 overflow-hidden flex items-center justify-center">
             <Image
                 src="/mohammad-ismail.jpg.jpeg"
                 alt="Mohammad Ismail"
                 width={100}
                 height={150}
                 className="w-40 h-40 rounded-full object-cover mx-auto mb-5"
              />
            </div>

            <h3 className="text-2xl font-bold">
              Mohammad Ismail
            </h3>

            <p className="text-blue-100 mt-2">
              Web Designer
            </p>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-20 px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Web Design
            </h3>
            <p className="text-slate-600">
              Modern and attractive website designs for businesses.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Business Solutions
            </h3>
            <p className="text-slate-600">
              Helpful digital solutions to support business growth.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Online Presence
            </h3>
            <p className="text-slate-600">
              Helping businesses connect with customers online.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-6">
        <p>© 2026 Karobar App. All rights reserved.</p>
        <p className="text-slate-400 mt-2">
          Designed by Abdul Rauf
        </p>
      </footer>

    </main>
  );
}