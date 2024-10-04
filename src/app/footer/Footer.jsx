import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-[#e4e5e2] py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-4 gap-8 pb-10 mb-10 border-b border-[#a0853f]">
          {/* Column 1: Logo & Slogan */}
          <div>
            <h2 className="text-3xl font-bold text-[#a0853f] mb-4">
              GutsHealth
            </h2>
            <p className="text-lg">Nourishing you to better health.</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="text-center">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="hover:text-[#a0853f] transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#a0853f] transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#a0853f] transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#a0853f] transition duration-300"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#a0853f] transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="text-left">
            <p className="font-semibold text-lg mb-4">Contact Us</p>
            <p className="mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#a0853f] mr-2"
              />
              info@GutsHealth.com
            </p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faPhone} className="text-[#a0853f] mr-2" />
              +1 234 567 890
            </p>
            <p>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-[#a0853f] mr-2"
              />
              123 Dietician St., Health City
            </p>
          </div>

          {/* Column 4: Social Media Icons */}
          <div className="text-center">
            <p className="font-semibold text-lg mb-4">Find Us On</p>
            <div className="space-x-4 text-2xl">
              <a
                href="#"
                className="text-[#a0853f] hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="text-[#a0853f] hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-[#a0853f] hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-[#a0853f] hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center">
          <p className="text-sm text-[#a0853f]">
            &copy; {new Date().getFullYear()} GutsHealth. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}