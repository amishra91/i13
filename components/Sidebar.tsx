'use client';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <div
      className=" h-full bg-[#fff]"
      style={{
        boxShadow: '0px 0px 12px rgba(6, 188, 6, 0.6)',
      }}
    >
      <Image alt="Logo" height={30} width={300} src="/assets/logo.png" />
    </div>
  );
};

export default Sidebar;
