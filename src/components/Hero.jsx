import { motion } from "framer-motion";

import { styles } from "../style";
import "./Hero.css";
import Swal from "sweetalert2";
import profilePicture from "/desktop_pc/profile.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  const downloadResume = () => {
    let timerInterval;
    Swal.fire({
      title: "Downloading...",
      html: `
      <div>
        <h1 class="text-green-500">Download will start in <b></b> milliseconds.</h1>
      </div>
    `,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
  };

  return (
    <section className={`relative w-full h-screen mx-auto mb-12`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-none lg:flex">
          <div>
            <div className="md:flex">
              <h1
                className={`md:${styles.heroHeadText} text-[22px] text-white`}
              >
                Hi, I'm
              </h1>
              <p
                className={`md:${styles.heroHeadText} text-[22px] md:ml-2 font-semibold font-serif`}
              >
                <span className="text-[#915EFF] font-semibold font-serif">
                  Mahmudul
                </span>
              </p>
            </div>
            <p
              className={`md:${styles.heroSubText} text-base mt-2 text-white-100 md:flex`}
            >
              <h1>
                Frontend Developer at{" "}
                <span className="uppercase text-blue-400">Digitosys IT</span>{" "}
              </h1>
            </p>
            <div className="mt-6 md:mt-12 md:ms-12">
              <a
                onClick={downloadResume}
                href="https://drive.google.com/uc?export=download&id=1NM4CUJxM2dcJTUmRrOpTZiaUq9G0_tJg"
                className="text-base md:text-3xl rounded-2xl hover:text-yellow-500 hover:bg-black border-white border-2 hover:border-b-8 border-2xl p-3"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="group">
            <div className=" group-hover:translate-y-2 duration-300">
              {" "}
              {/* Added relative positioning */}
              <img
                className="w-[200px] md:w-[250px] lg:w-[300px]"
                src={profilePicture}
                alt="Profile Picture"
              />
            </div>
            <div className="mb-6 w-[200px] md:w-[250px] lg:w-[300px] h-8 md:h-12 bg-gradient-to-r from-[#915EFF] to-[#6427e7] rounded-b-[100px] border-t-4 md:border-t-8 border-white  flex items-center justify-center">
              <div className="flex items-center justify-center gap-3 my-auto">
                <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#050816] flex items-center justify-center hover:scale-110 duration-300">
                  <button>
                    <a
                      href="https://www.linkedin.com/in/bhuiamh/"
                      className="flex justify-between items-center w-full text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn className="text-[12px] md:text-base" />
                    </a>
                  </button>
                </div>
                <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#050816] flex items-center justify-center hover:scale-110 duration-300">
                  <button>
                    <a
                      href="https://t.me/bhuiamh"
                      className="flex justify-between items-center w-full text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="text-[12px] md:text-base" />
                    </a>
                  </button>
                </div>
                <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#050816] flex items-center justify-center hover:scale-110 duration-300">
                  <button>
                    <a
                      href="https://www.instagram.com/bhuiamh/"
                      className="flex justify-between items-center w-full text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="text-[12px] md:text-base" />
                    </a>
                  </button>
                </div>
                <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#050816] flex items-center justify-center hover:scale-110 duration-300">
                  <button>
                    <a
                      href="https://www.facebook.com/bhuiamh/"
                      className="flex justify-between items-center w-full text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook className="text-[12px] md:text-base" />
                    </a>
                  </button>
                </div>
                <div className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-[#050816] flex items-center justify-center hover:scale-110 duration-300">
                  <button>
                    <a
                      href="https://chat.whatsapp.com/Dby2PD9sOb9IzvFN6Zyvsq"
                      className="flex justify-between items-center w-full text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp className="text-[12px] md:text-base" />
                    </a>
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
