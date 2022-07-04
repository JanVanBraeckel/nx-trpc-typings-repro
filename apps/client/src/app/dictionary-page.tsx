import React from 'react';
import { useQuery } from './utils';

export const DictionaryPage: React.FC = () => {
  const { data: dictionaries } = useQuery(['dictionaries']);

  return (
    <>
      {dictionaries?.map((dictionary, i) => (
        <div key={i}>{dictionary.name}</div>
      ))}
    </>
  );
};
