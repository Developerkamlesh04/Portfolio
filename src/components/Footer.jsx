import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 px-6 sm:px-12 lg:px-24 py-16 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-yellow-400 text-4xl font-extrabold tracking-tight mb-3">
            Kamlesh
          </h2>
          <p className="text-gray-400 text-center sm:text-left leading-relaxed">
            Delivering excellence in web development and digital solutions.
          </p>
          <div className="mt-6 flex space-x-6 text-yellow-400">
            {[
              {
                href: "https://facebook.com",
                label: "Facebook",
                path: "M22 12a10 10 0 10-11.5 9.87v-6.98h-3v-2.9h3v-2.2c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.23 2.6.23v2.9h-1.5c-1.5 0-2 1-2 2v2h3.5l-.56 2.9h-2.94v6.98A10 10 0 0022 12z",
              },
              {
                href: "https://twitter.com",
                label: "Twitter",
                path: "M22.46 6c-.77.35-1.6.58-2.46.69a4.26 4.26 0 001.88-2.36 8.36 8.36 0 01-2.7 1.03 4.22 4.22 0 00-7.2 3.85A12 12 0 013 4.67a4.22 4.22 0 001.31 5.63 4.18 4.18 0 01-1.91-.52v.05a4.22 4.22 0 003.39 4.13 4.23 4.23 0 01-1.9.07 4.23 4.23 0 003.95 2.93A8.48 8.48 0 012 19.54a12 12 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18-.01-.35-.02-.53A8.35 8.35 0 0022.46 6z",
              },
              {
                href: "https://linkedin.com",
                label: "LinkedIn",
                path: "M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 18v-7H6v7h2.5zm-1.25-8.01a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM18 18v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-2.5v-7H12v1c.54-.78 1.5-1.3 2.5-1.3 2 0 3.5 1.5 3.5 3.5v3.8H18z",
              },
            ].map(({ href, label, path }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-yellow-300 transition-transform transform hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 font-semibold uppercase tracking-wide text-sm text-gray-400">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {["Home", "About", "Services",].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-yellow-400 transition font-medium"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-6 font-semibold uppercase tracking-wide text-sm text-gray-400">
            Contact
          </h3>
          <address className="not-italic text-gray-500 space-y-2 leading-relaxed max-w-xs">
            <p>123 React Lane</p>
            <p>JS City, 98765</p>
            <a
              href="mailto:kamleshwebstudio@gmail.com"
              className="hover:text-yellow-400 transition underline"
            >
              kamleshwebstudio@gmail.com
            </a>
            <br />
            <a
              href="tel:+917870925238"
              className="hover:text-yellow-400 transition underline"
            >
              +91 7870925238
            </a>
          </address>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-6 font-semibold uppercase tracking-wide text-sm text-gray-400">
            Newsletter
          </h3>
          {!submitted ? (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full sm:flex-grow px-5 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
              <button
                type="submit"
                className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition-shadow shadow-md hover:shadow-lg whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <p className="text-yellow-400 font-semibold mt-3">
              Thank you for subscribing!
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kamlesh. All rights reserved.
      </div>
    </footer>
  );
}
