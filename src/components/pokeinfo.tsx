import { PokeInfoResponse } from '@/types';
import { formatAbilityName } from '@/utils';

interface PokeInfo {
  selected: string;
}

export const PokeInfo = async ({ selected }: PokeInfo) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selected}`);
  const { abilities, base_experience } = (await response.json()) as PokeInfoResponse;

  return (
    <div className="bg-white text-black rounded-lg p-6 space-y-6">
      <div>
        <p>
          <span className="font-medium">Base Experience</span>
          <br />
          {base_experience}
        </p>
      </div>
      <div>
        <p>
          <span className="font-medium">Abilities</span>
        </p>
        <ul>
          {abilities.map(({ ability }) => (
            <li key={ability.name} className="capitalize">
              {formatAbilityName(ability.name)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
