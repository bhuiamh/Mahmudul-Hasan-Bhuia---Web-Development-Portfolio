import React from "react";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <i class="fa-brands fa-linkedin text-xl"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/bhuiamh/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <i class="fa-brands fa-github text-xl"></i>
        </>
      ),
      href: "https://github.com/bhuiamh",
    },
    {
      id: 3,
      child: (
        <>
          Email <i class="fa-regular fa-envelope text-xl"></i>
        </>
      ),
      href: "mailto:your.bhuiamh@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <i class="fa-brands fa-facebook text-xl"></i>
        </>
      ),
      href: "https://www.facebook.com/bhuiamh/",
      style: "rounded-br-md",
    },
    {
      id: 5,
      child: (
        <>
          Twitter <i class="fa-brands text-xl fa-twitter"></i>
        </>
      ),
      href: "https://twitter.com/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 bg-opacity-10 hover:bg-opacity-30" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
