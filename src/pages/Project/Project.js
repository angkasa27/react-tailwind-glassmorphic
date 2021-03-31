import React, { useState, useEffect } from 'react';
import Header from '../../components/elements/Header';
import { Data } from './constants';

export default function Project() {
  return (
    <div>
      <Main>
        {Data.map((data, idx) => (
          <Windows data={data} idx={idx} />
        ))}
      </Main>
    </div>
  );
}

export function Main({ children }) {
  const [classes, setClasses] = useState('invisible md:visible');

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-itemUp md:animate-none');
    }, 100);
  }, []);

  return (
    <main
      className={
        'bg-window md:absolute top-1/10 bottom-1/10 left-1/10 right-1/10 bg-glass z-10 mt-5 md:mt-0 transition-default overflow-y-hidden pb-12 ' +
        classes
      }
    >
      <Header name="project" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 w-full h-full p-5 overflow-y-auto">
        {children}
      </div>
    </main>
  );
}

export function Windows({ data, idx }) {
  const [classes, setClasses] = useState(' invisible');

  useEffect(() => {
    setTimeout(() => {
      setClasses(' animate-scale');
    }, idx * 100 + 100);
  }, [idx]);

  return (
    <span
      className={
        ' hover:bg-gray-800 hover:bg-opacity-10 rounded-xl p-4 ' + classes
      }
    >
      <div className="px-20 py-8 h-40 flex flex-col items-center bg-white rounded-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 354.8 400.44"
          className="fill-current h-16 text-gray-800"
        >
          <path
            class="cls-1"
            d="M0,121.15V307.3l58.63,33.85V290.37l44,25.39v50.78l58.63,33.85V214.25ZM102.6,265l-44-25.37V205.78l44,25.39Z"
          />
          <polygon
            class="cls-1"
            points="16.16 93.19 177.38 0 221.36 25.48 104.1 93.19 118.76 101.65 236.01 33.94 338.61 93.19 177.38 186.28 133.41 160.89 250.75 93.14 236.01 84.72 118.76 152.43 16.16 93.19"
          />
          <path
            class="cls-1"
            d="M193.51,214.23V400.44l58.65-33.87V315.78l44-25.4v50.79l58.65-33.86V121.1Zm102.64,25.35-44,25.4V231.16l44-25.4Z"
          />
        </svg>
      </div>
      <p className="font-mono text-sm mt-2 text-center">{data.name}</p>
    </span>
  );
}
