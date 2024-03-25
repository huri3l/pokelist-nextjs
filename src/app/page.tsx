import { PokeInfo } from '@/components/pokeinfo';
import { PokeList } from '@/components/pokelist';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const selected = searchParams['selected'] ?? '1';

  return (
    <div className="flex flex-col items-center gap-16 mt-24 p-8">
      <div>
        <h1 className="text-5xl font-bold">Pokemons</h1>
        <p className="text-neutral-300 mt-2">
          Click in a Pokemon name to select and see its detailed info
        </p>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-center gap-16">
        <PokeList />
        <PokeInfo selected={selected} />
      </div>
    </div>
  );
}
