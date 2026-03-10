import React from "react";

import {
  pageWrapper,
  headingClass,
  bodyText,
  mutedText,
  linkClass,
  divider
} from "../styles/Common";

function Footer() {
  return (
    <footer className="bg-[#f5f5f7] mt-20 border-t border-[#e8e8ed]">

      <div className={pageWrapper}>

        {/* Footer Top */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* About */}

          <div>
            <h3 className={headingClass}>BlogSpace</h3>
            <p className={bodyText + " mt-3"}>
              BlogSpace is a platform where developers, writers, and tech
              enthusiasts share knowledge, experiences, and ideas with the
              community.
            </p>
          </div>


          {/* Quick Links */}

          <div>
            <h3 className={headingClass}>Quick Links</h3>

            <ul className="mt-3 flex flex-col gap-2">

              <li>
                <a href="/" className={linkClass}>Home</a>
              </li>

              <li>
                <a href="/register" className={linkClass}>Register</a>
              </li>

              <li>
                <a href="/login" className={linkClass}>Login</a>
              </li>

            </ul>
          </div>


          {/* Contact */}

          <div>
            <h3 className={headingClass}>Contact</h3>

            <ul className="mt-3 flex flex-col gap-2">

              <li className={bodyText}>📧 support@blogspace.com</li>
              <li className={bodyText}>📍 Hyderabad, India</li>
              <li className={bodyText}>📞 +91 98765 43210</li>

            </ul>
          </div>

        </div>


        {/* Divider */}

        <div className={divider}></div>


        {/* Bottom */}

        <div className="flex justify-between items-center flex-wrap gap-4">

          <p className={mutedText}>
            © 2026 BlogSpace. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className={linkClass}>Privacy Policy</a>
            <a href="#" className={linkClass}>Terms</a>
            <a href="#" className={linkClass}>Support</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;