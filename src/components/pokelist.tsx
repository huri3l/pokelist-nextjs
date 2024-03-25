import { PokeListResponse } from '@/types';
import Link from 'next/link';

export const PokeList = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const data = (await response.json()) as PokeListResponse;

  return (
    <div className="grid grid-cols-2 gap-4">
      {data?.results?.map(({ name }) => (
        <Link
          href={`?selected=${name}`}
          key={name}
          className="text-black capitalize bg-white text-center font-semibold p-2 rounded-lg cursor-pointer hover:bg-white/80 transition-all"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
