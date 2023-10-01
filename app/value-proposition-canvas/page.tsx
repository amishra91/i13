'use client';
import ValuePropositions from '@/components/ValuePropositions/ValuePropositions';
import CustomerSegment from '@/components/CustomerSegment/CustomerSegment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const Canvas = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const generateCanvas = async () => {
    try {
      const formattedData = JSON.parse(localStorage.getItem('userData') as any);
      const useMessage = formattedData.map((item: any) => {
        return item;
      });

      const response = await axios.post('/api/getCanvasData', {
        messages: useMessage,
      });

      const objects = response.data.content
        .trim()
        .split('\n\n')
        .map((section: any) => {
          try {
            return JSON.parse(section.trim());
          } catch (error) {
            console.error('Error parsing JSON:', error);
            return null;
          }
        })
        .filter((obj: any) => obj !== null);

      localStorage.canvasData = JSON.stringify(objects);

      setData(objects);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!data.length) {
      generateCanvas();
    }
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full h-full fixed bg-[#fff] flex justify-center items-center">
          <Image
            src="/assets/loading.gif"
            width={200}
            height={200}
            alt="loading"
          />
        </div>
      ) : (
        <>
          {data.length ? (
            <>
              <div className="pl-72 pb-10 md:flex justify-center items-center w-full h-full gap-10 hidden">
                <ValuePropositions data={data} />
                <CustomerSegment data={data} />
              </div>
              <div className="flex justify-center items-center w-[100%] h-[100%] px-6">
                <h1 className="md:hidden text-center">
                  This app is optimized for desktop. Please use a desktop/laptop
                  computer to access this feature.
                </h1>
              </div>
            </>
          ) : (
            <div className="pl-72 pb-10 md:flex flex-col justify-center items-center w-full h-full gap-5 hidden">
              <h1 className="w-full mb-2">
                Oops! There was an error. Please try reloading the page.
              </h1>
              <p className="w-full">
                If you forgot to fill the form to generate the canvas, please{' '}
                <Link href="/">
                  <span className="text-[#37a169] underline font-bold">
                    Click Here
                  </span>
                </Link>
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Canvas;
