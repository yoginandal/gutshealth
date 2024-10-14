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
import logo from "../../../public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-[#e4e5e2] py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-10 mb-10 border-b border-dgold text-left">
          {/* Column 1: Logo & Slogan */}
          <div>
            <img
              src={logo}
              alt="logo"
              className=" lg:max-w-[80%] max-w-[50%] md:max-w-[35%]"
            />
            <p className="text-lg">Nourishing you to better health.</p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="hover:text-dgold transition duration-300"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/gut-care-program"
                  className="hover:text-dgold transition duration-300"
                >
                  Gut Care Program
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-dgold transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <p className="font-semibold text-lg mb-4">Contact Us</p>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-dgold mr-2" />
              <a href="mailto:ayurvedicnutritionbyss@gmail.com">
                ayurvedicnutritionbyss@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <a href="tel:+919818295702">
                <FontAwesomeIcon icon={faPhone} className="text-dgold mr-2" />
                +91-9818295702
              </a>
            </p>
            <p>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-dgold mr-2"
              />
              123 Dietician St., Health City
            </p>
          </div>

          {/* Column 4: Social Media Icons */}
          <div>
            <p className="font-semibold text-lg mb-4">Find Us On</p>
            <div className="flex space-x-4 text-2xl">
              <a
                href="#"
                className="text-dgold hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="#"
                className="text-dgold hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="#"
                className="text-dgold hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="#"
                className="text-dgold hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-left">
          <p className="text-sm text-dgold">
            &copy; {new Date().getFullYear()} GutsHealth. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
