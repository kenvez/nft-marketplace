'use client';

import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import images from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

  return (
    <nav className='flexBetween fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1'></nav>
  );
};

export default Navbar;
