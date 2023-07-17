import React from "react";
import namePhoto from "../assets/signature.png";

const Footer = () => {
  return (
    <footer className="mx-4 text-light p-5 mt-8 border-x-transparent border-t-slate-400 border-4 border-blue-400">
      <div className="container flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Location</p>
            <p className="text-base mb-2">Ikra Villa, Monir Chemical Road</p>
            <p className="text-base mb-2">Opposite of DUET Campus</p>
            <p className="text-base mb-2">Gazipur Sadar, Gazipur</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4 mb-4 md:mb-0">
          <div className="flex flex-col">
            <p className="text-lg font-bold mb-3">Contact Us</p>
            <a
              href="mailto:info@kitchensecret.com"
              className="text-base text-light mb-2"
            >
              <i class="fa-solid fa-envelope"></i> bhuiamh@gmail.com
            </a>
            <a href="tel:+1-123-456-7890" className="text-base text-light mb-2">
              <i class="fa-solid fa-phone"></i> +880-1946280853
            </a>
            <a href="tel:+1-123-456-7890" className="text-base text-light">
              <i class="fa-solid fa-phone"></i> +880-1819831933
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/4">
          <div className="flex flex-col">
            <div className="mb-3">
              <img src={namePhoto} alt="" />
            </div>
            <div className="flex justify-">
              <a href="https://twitter.com" className="me-3 text-light">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://chat.whatsapp.com/Dby2PD9sOb9IzvFN6Zyvsq"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="www.linkedin.com/in/mahmudul-hasan-bhuia-771317280"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://t.me/bhuiamh" className="me-3 text-light">
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a
                href="https://www.facebook.com/bhuiamh/"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://youtube.com/electricalghost"
                className="me-3 text-light"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
              <a href="https://instagram.com" className="me-3 text-light">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a href="https://pinterest.com" className="me-3 text-light">
                <i class="fa-brands fa-pinterest"></i>
              </a>
              <a href="https://snapchat.com" className="me-3 text-light">
                <i class="fa-brands fa-square-snapchat"></i>
              </a>
              <a href="https://reddit.com" className="me-3 text-light">
                <i class="fa-brands fa-reddit"></i>
              </a>
              <a href="https://tiktok.com" className="text-light">
                <i class="fa-brands fa-tiktok"></i>
              </a>
            </div>
            <div className="flex justify-end mt-4">
              <p className="text-base mb-0">
                © 2023 Mahmudul Hasan Bhuia. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
