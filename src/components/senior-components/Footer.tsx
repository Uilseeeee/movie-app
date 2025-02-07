import React from "react";
import { Film, Mail, Phone } from "lucide-react";
function Footer() {
  return (
    <div>
      <div className="bg-indigo-700 text-white font-normal py-10 px-5 flex flex-col justify-center items-center md:hidden">
        <div>
          <div className="flex gap-2 text-white ">
            <Film />
            <p className="italic font-bold">Movie Z</p>
          </div>
          <p className="mb-7">© 2024 Movie Z. All Rights Reserved.</p>
          <div className="flex gap-12">
            <div>
              <p className="mb-3">Contact Information</p>
              <div className="flex gap-3 items-center mb-6">
                <Mail />
                <div>
                  <p>Email:</p>
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Phone />
                <div>
                  <p>Phone:</p>
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3">Follow us</p>
              <p className="mb-3">Facebook</p>
              <p className="mb-3">Instagram</p>
              <p className="mb-3">Twitter</p>
              <p className="mb-3">Youtube</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" hidden md:bg-indigo-700 md:text-white md:font-normal md:py-10 md:gap-6 md:px-20 md:flex md:justify-between">
        <div className="flex flex-col gap-3 text-white ">
          <div className="flex gap-2">
            <Film />
            <p className="font-bold mb-3"> Movie Z</p>
          </div>
          <p className="mb-7">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="flex gap-24">
          <div className="flex flex-col gap-3">
            <p className="mb-3">Contact Information</p>
            <div className="flex gap-3 items-center mb-6">
              <Mail />
              <div>
                <p>Email:</p>
                <p>support@movieZ.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Phone />
              <div>
                <p>Phone:</p>
                <p>+976 (11) 123-4567</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="mb-3">Follow us</p>
            </div>
            <div className="flex gap-3">
              <p className="mb-3">Facebook</p>
              <p className="mb-3">Instagram</p>
              <p className="mb-3">Twitter</p>
              <p className="mb-3">Youtube</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
