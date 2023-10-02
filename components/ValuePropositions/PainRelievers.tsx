'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

interface Props {
  painRelievers: any[] | undefined;
}

const PainRelievers = ({ painRelievers }: Props) => {
  return (
    <>
      <div
        className="absolute bottom-[20%] right-[15%]"
        style={{
          transform: 'translate(-20%, 0)',
        }}
      >
        <Image
          src="/assets/pain-reliever.svg"
          width={60}
          height={60}
          alt="products"
        />
      </div>
      <div
        className="absolute top-[60%] right-[10px]"
        style={{
          transform: 'translate(-60%, -15%)',
        }}
      >
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Image src="/assets/info.svg" width={15} height={15} alt="info" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="popover-style" side="left">
            <ul className="service-list">
              {painRelievers?.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default PainRelievers;
