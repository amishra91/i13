'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

interface Props {
  jobs: any[] | undefined;
}

const Gains = ({ jobs }: Props) => {
  return (
    <>
      <div
        className="absolute top-[50%] right-[10%]"
        style={{
          transform: 'translate(-50%, -10%)',
        }}
      >
        <Image
          src="/assets/customer-jobs.svg"
          width={80}
          height={80}
          alt="products"
        />
      </div>
      <div className="absolute bottom-[30%] right-[30px]">
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Image src="/assets/info.svg" width={15} height={15} alt="info" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="popover-style" side="left">
            <ul className="service-list">
              {jobs?.map((item, index) => {
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
