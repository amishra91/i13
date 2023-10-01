'use client';
import React from 'react';
import GainCreators from './GainCreators';
import ProductAndServices from './ProductAndServices';
import PainRelievers from './PainRelievers';

interface Props {
  data: any;
}

const ValuePropositions = ({ data }: Props) => {
  const formattedData = Object?.keys(data);
  const extractedData: any = {};

  let gainCreators: any = [];
  let painRelievers: any = [];

  formattedData?.forEach((element) => {
    if (data) {
      extractedData[element] = data[element];
      gainCreators = [...gainCreators, extractedData[element].gainCreators];
      painRelievers = [...painRelievers, extractedData[element].painRelievers];
    }
  });
  const allGainCreators = [].concat(...gainCreators);
  const allPainRelievers = [].concat(...painRelievers);

  return (
    <div className="p-4 w-[50%] min-h-[31.25rem] max-w-[31.25rem] propContainer-value propContainer relative bg-[#edf2f6] rounded-md">
      <ProductAndServices />
      <GainCreators gainCreators={allGainCreators} />
      <PainRelievers painRelievers={allPainRelievers} />
    </div>
  );
};

export default ValuePropositions;
