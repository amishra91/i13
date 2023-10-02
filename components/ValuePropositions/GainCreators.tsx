'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

interface Props {
  gainCreators: any[] | undefined;
}

const GainCreators = ({ gainCreators }: Props) => {
  return (
    <>
      <div
        className="absolute top-[10%] right-[5%]"
        style={{
          transform: 'translate(-60%, -15%)',
        }}
      >
        <Image
          src="/assets/gain-creators.svg"
          width={80}
          height={80}
          alt="products"
        />
      </div>
      <div className="absolute top-[30px] right-[20px]">
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Image src="/assets/info.svg" width={15} height={15} alt="info" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="popover-style" side="left">
            <ul className="service-list">
              {gainCreators?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default GainCreators;
