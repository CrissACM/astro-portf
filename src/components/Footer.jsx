import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../components/Icons";
import { Bio } from "../data/en";

function Footer() {
  return (
    <div className="flex w-full justify-center">
      <footer className="flex w-full max-w-[1200px] flex-col items-center gap-3.5 p-4 text-dark dark:text-light">
        <nav className="mt-2 flex w-full max-w-[800px] flex-row justify-center gap-8 md:flex-wrap md:justify-center md:gap-4 md:text-center md:text-xs">
          <a
            href="#about"
            className="text-[1.2rem] text-dark no-underline transition-[color] duration-[0.2s] ease-[ease-in-out] hover:text-primary md:text-base dark:text-light dark:hover:text-primaryDark"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-[1.2rem] text-dark no-underline transition-[color] duration-[0.2s] ease-[ease-in-out] hover:text-primary md:text-base dark:text-light dark:hover:text-primaryDark"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-[1.2rem] text-dark no-underline transition-[color] duration-[0.2s] ease-[ease-in-out] hover:text-primary md:text-base dark:text-light dark:hover:text-primaryDark"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-[1.2rem] text-dark no-underline transition-[color] duration-[0.2s] ease-[ease-in-out] hover:text-primary md:text-base dark:text-light dark:hover:text-primaryDark"
          >
            Skills
          </a>

          <a
            href="#education"
            className="text-[1.2rem] text-dark no-underline transition-colors duration-[0.2s] ease-[ease-in-out] hover:text-primary md:text-base dark:text-light dark:hover:text-primaryDark"
          >
            Education
          </a>
        </nav>
        <div className="mt-4 flex items-start">
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-0 inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out]"
          >
            <TwitterIcon />
          </a>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-0 inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out]"
          >
            <GithubIcon />
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-0 inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out]"
          >
            <LinkedInIcon />
          </a>
          <a
            href={Bio.insta}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 my-0 inline-block text-2xl transition-colors duration-[0.2s] ease-[ease-in-out]"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="mt-6 text-center text-[0.9rem] text-dark dark:text-light">
          &copy; 2023 Crissacm. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
