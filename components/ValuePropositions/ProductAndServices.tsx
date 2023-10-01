'use client';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';

const ProductAndServices = () => {
  const productAndServices = JSON.parse(
    localStorage.getItem('userAnswers') as any
  );
  return (
    <>
      <div
        className="absolute top-[50%] left-[15%]"
        style={{
          transform: 'translate(-50%, -15%)',
        }}
      >
        <Image
          src="/assets/product.svg"
          width={70}
          height={70}
          alt="products"
        />
      </div>
      <div className="absolute bottom-[30px] left-[10px]">
        <Popover>
          <PopoverTrigger asChild>
            <button>
              <Image src="/assets/info.svg" width={15} height={15} alt="info" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="popover-style" side="right">
            <ul className="service-list">
              {productAndServices.map((item: any, index: any) => {
                return (
                  <li className="capitalize" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

export default ProductAndServices;
