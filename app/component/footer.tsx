import React from 'react';
import Image from 'next/image';
import githubLogo from "../public/GitHub-Logo.svg"
import linkedinLogo from "../public/LinkedIn-Logo.svg"

const Footer = () => {
  return (
    <footer className="bg-yellow-800 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Asma Masood. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/asma-masood-588446304

"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image src={linkedinLogo} alt='linkedin logo'
            className='w-32 h-32' />
          </a>
          <a
            href="https://github.com/asmamasood

"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <Image src={githubLogo} alt='Github logo'
            className='w-32 h-32' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;