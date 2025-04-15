import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example social icons

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18181B] bt-2 bt-white text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/1Kunalvats9" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-cyan-400 transition duration-300">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/kunal-vats-b67aa2309" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-cyan-400 transition duration-300">
            <FaLinkedin size={24} />
          </Link>
          {/* Add more social media links as needed */}
        </div>
        <nav className="flex justify-center space-x-4 mb-4">
          <Link href="/privacy" className="text-gray-300 hover:text-cyan-400 transition duration-300 text-sm">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-cyan-400 transition duration-300 text-sm">
            Terms of Service
          </Link>
          {/* Add more navigation links as needed */}
        </nav>
        <div className="text-center text-sm text-gray-500 mt-4">
          &copy; {currentYear} [Your Name]. All rights reserved.
        </div>
        <div className="text-center text-xs text-gray-600 mt-2">
          Built with <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">Next.js</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;