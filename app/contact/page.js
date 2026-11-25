import Link from "next/link";

export default function Contact() {
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

      {/* Contact Heading */}
      <section className="bg-blue-50 text-center py-16 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Contact Us
        </h2>

        <p className="text-lg text-slate-600">
          Have a question? Get in touch with us.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Information */}
          <div className="bg-slate-900 text-white p-10 rounded-2xl">

            <h3 className="text-2xl font-bold text-blue-400 mb-8">
              Get In Touch
            </h3>

            <div className="space-y-7">

              <div>
                <h4 className="font-bold text-lg">
                  Website
                </h4>
                <p className="text-slate-300">
                  Karobar App
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Web Designer
                </h4>
                <p className="text-slate-300">
                  Mohammad Ismail
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Profession
                </h4>
                <p className="text-slate-300">
                  Web Designer
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg">
                  Location
                </h4>
                <p className="text-slate-300">
                  Pakistan
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-7">
              Send Us a Message
            </h3>

            <form>

              <label className="block font-semibold mb-2">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-slate-300 p-3 rounded-lg mb-5"
              />

              <label className="block font-semibold mb-2">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-slate-300 p-3 rounded-lg mb-5"
              />

              <label className="block font-semibold mb-2">
                Your Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message"
                className="w-full border border-slate-300 p-3 rounded-lg mb-6"
              />

              <button
                type="button"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

            <p className="text-sm text-slate-400 mt-4">
              Contact form design demonstration.
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white text-center py-8">
        <p>© 2026 Karobar App. All Rights Reserved.</p>
        <p className="text-blue-400 mt-2">
          Designed by Mohammad Ismail | Web Designer
        </p>
      </footer>

    </main>
  );
}