'use client';
import React from 'react';
import Gains from './Gains';
import Pains from './Pains';
import Jobs from './Jobs';

interface Props {
  data: any;
}

const CustomerSegment = ({ data }: Props) => {
  const formattedData = Object?.keys(data);
  const extractedData: any = {};

  let customerGains: any = [];
  let customerPains: any = [];
  let customerJobs: any = [];

  formattedData?.forEach((element) => {
    if (data[element]) {
      extractedData[element] = data[element];
      customerGains = [...customerGains, extractedData[element].customerGains];
      customerPains = [...customerPains, extractedData[element].customerPains];
      customerJobs = [...customerJobs, extractedData[element].customerJobs];
    }
  });

  const allGains = [].concat(...customerGains);
  const allPains = [].concat(...customerPains);
  const allJobs = [].concat(...customerJobs);
  return (
    <div className="p-10 w-[50%] min-h-[350px] max-w-[350px] propContainer-user propContainer relative bg-[#edf2f6] rounded">
      <Gains gains={allGains} />
      <Pains pains={allPains} />
      <Jobs jobs={allJobs} />
    </div>
  );
};

export default CustomerSegment;
