import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

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

      {/* About Heading */}
      <section className="bg-blue-50 text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          About Karobar App
        </h2>

        <p className="text-slate-600 text-lg">
          Learn more about our platform and its purpose.
        </p>
      </section>

      {/* About Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Who We Are
        </h2>

        <p className="text-lg text-slate-600 leading-8 mb-8">
          Karobar App is a business-focused web platform created
          to provide a simple and accessible online experience.
          Our aim is to introduce business opportunities and
          encourage people to develop their ideas.
        </p>

        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Our Mission
        </h2>

        <p className="text-lg text-slate-600 leading-8 mb-12">
          Our mission is to make business information easier
          to explore and help users take their first steps
          towards business growth.
        </p>

        {/* Designer Information */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-center">

          <Image
            src="/mohammad-ismail.jpg.jpeg"
            alt="Mohammad Ismail"
            width={180}
            height={180}
            className="w-40 h-40 rounded-full object-cover mx-auto mb-5"
          />

          <h3 className="text-2xl font-bold">
            Mohammad Ismail
          </h3>

          <p className="text-blue-600 font-medium">
            Web Designer
          </p>

          <p className="text-slate-500 mt-3">
            Designed and developed the Karobar App website.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>© 2026 Karobar App. All Rights Reserved.</p>
        <p className="text-blue-400 mt-2">
          Designed by Mohammad Ismail
        </p>
      </footer>

    </main>
  );
}