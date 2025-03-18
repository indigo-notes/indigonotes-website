import { FileText } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faBluesky, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-indigo-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="https://www.linkedin.com/company/indigonotes" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FontAwesomeIcon icon={faLinkedinIn} className="h-6 w-6" />
          </a>
          <a href="https://bsky.app/profile/indigonotes.bsky.social" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <span className="sr-only">BlueSky</span>
            <FontAwesomeIcon icon={faBluesky} className="h-6 w-6" />
          </a>
          <a href="https://github.com/indigo-notes" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <span className="sr-only">GitHub</span>
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a href="https://www.youtube.com/@indigo-notes" className="text-gray-400 hover:text-indigo-600 transition-colors">
            <span className="sr-only">YouTube</span>
            <FontAwesomeIcon icon={faYoutube} className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start">
            <div className="h-8 w-8 rounded-md bg-indigo-600 flex items-center justify-center mr-2">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">
              <span className="text-indigo-600">Indigo</span>Notes
            </span>
          </div>
          <p className="mt-2 text-center text-xs leading-5 text-gray-500 md:text-left">
            &copy; {currentYear} IndigoNotes. All rights reserved. Your data stays private by design.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
