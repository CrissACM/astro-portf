import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.a
        className="flex h-12 w-12 items-center justify-center rounded-full bg-dark text-xl font-bold text-white dark:border-2 dark:border-solid dark:border-light"
        href="/"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(70,1,155,1)",
            "rgba(0,126,254,1)",
            "rgba(0,187,0,1)",
            "rgba(254,246,1,1)",
            "rgba(221,0,0,1)",
            "#121212",
          ],
          transition: { duration: 1.5, repeat: Infinity },
        }}
      >
        CC
      </motion.a>
    </div>
  );
}

export default Logo;
