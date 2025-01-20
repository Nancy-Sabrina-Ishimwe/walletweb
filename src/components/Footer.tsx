import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-100 dark:bg-gray-900 text-center text-gray-600 dark:text-gray-300">
      <p className="text-sm">
        Copyright &copy; {new Date().getFullYear()} <span className="font-semibold">Eric's Wallet</span> &mdash; All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
