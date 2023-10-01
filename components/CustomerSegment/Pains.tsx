'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

interface Props {
  pains: any[] | undefined;
}

const Gains = ({ pains }: Props) => {
  return (
    <>
      <div
        className="absolute bottom-[20%] left-[30%]"
        style={{
          transform: 'translate(-30%, -30%)',
        }}
      >
        <Image
          src="/assets/pains.svg"
          width={110}
          height={110}
          alt="products"
        />
      </div>
      <div className="absolute bottom-[30%] left-[30px]">
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Image src="/assets/info.svg" width={15} height={15} alt="info" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="popover-style" side="right">
            <ul className="service-list">
              {pains?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default Gains;
