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
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer"
      className={
        ' hover:bg-gray-800 hover:bg-opacity-10 rounded-lg p-4 cursor-pointer ' +
        classes
      }
    >
      <img
        src={data.img}
        alt={data.name}
        className="bg-white rounded-lg object-cover w-full h-36 md:h-48"
      />
      <p className="font-mono text-sm mt-2 text-center">{data.name}</p>
    </a>
  );
}
