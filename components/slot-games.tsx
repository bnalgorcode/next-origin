import Image from 'next/image';

const slotGames = [
  { wrapper: 'mancala', logo: 'mancala' },
  { wrapper: 'caleta', logo: 'caleta' },
  { wrapper: 'platipus', logo: 'platipus' },
  { wrapper: 'booming', logo: 'booming' },
  { wrapper: 'bgaming', logo: 'bgaming' },
  { wrapper: 'spinomenal', logo: 'spinomenal' },
  { wrapper: 'pariplay', logo: 'pariplay' },
  { wrapper: 'novomatic', logo: 'novomatic' },
  { wrapper: 'eagaming', logo: 'eagaming' },
  { wrapper: '7777', logo: '7777' },
  { wrapper: 'platin', logo: 'platin' },
  { wrapper: 'smartsoft', logo: 'smartsoft' },
  { wrapper: 'fils', logo: 'fils' },
  { wrapper: 'retro', logo: 'retro' },
  { wrapper: '7mojos', logo: '7mojos' },
  { wrapper: 'playtech', logo: 'playtech' },
  { wrapper: 'skywind', logo: 'skywind' },
  { wrapper: 'netgaming', logo: 'netgaming' },
  { wrapper: 'btg', logo: 'btg' },
  { wrapper: 'avatarux', logo: 'avatarux' },
  { wrapper: 'wazdan', logo: 'wazdan' },
  { wrapper: 'gameart', logo: 'gameart' },
  { wrapper: 'playstar', logo: 'playstar' },
  { wrapper: 'netgame', logo: 'netgame' },
  { wrapper: 'slotmill', logo: 'slotmill' },
  { wrapper: 'redtiger', logo: 'redtiger' },
  { wrapper: 'hacksaw', logo: 'hacksaw' },
  { wrapper: 'relax', logo: 'relax' },
  { wrapper: 'rtg', logo: 'rtg' },
  { wrapper: 'thunder', logo: 'thunder' },
  { wrapper: 'redrake', logo: 'redrake' },
  { wrapper: 'quickspin', logo: 'quickspin' },
  { wrapper: 'fantasma', logo: 'fantasma' },
  { wrapper: 'blueprint', logo: 'blueprint' },
  { wrapper: 'nolimit', logo: 'nolimit' },
  { wrapper: '1x2', logo: '1x2' },
  { wrapper: 'netent', logo: 'netent' },
  { wrapper: 'asian', logo: 'asian' },
  { wrapper: 'booongo', logo: 'booongo' },
  { wrapper: 'cq9', logo: 'cq9' },
  { wrapper: 'dreamtech', logo: 'dreamtech' },
  { wrapper: 'evoplay', logo: 'evoplay' },
  { wrapper: 'habanero', logo: 'habanero' },
  { wrapper: 'micro', logo: 'micro' },
  { wrapper: 'pgsoft', logo: 'pgsoft' },
  { wrapper: 'playngo', logo: 'playngo' },
  { wrapper: 'pragmatic', logo: 'pragmatic' },
  { wrapper: 'yggdrasil', logo: 'yggdrasil' },
];

export default function SlotGames() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3">
      {slotGames.map((game, index) => (
        <div
          key={index}
          className="game-card relative w-full"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            src={`/images/slot/wrapper/${game.wrapper}.png`}
            alt={game.wrapper}
            width={300}
            height={260}
            className="game-card-main w-full object-cover"
          />
          <div className="game-card-logo-container absolute w-full h-[30%] bottom-0 left-0 flex items-center justify-center bg-black/50 transition-all duration-300">
            <Image
              src={`/images/slot/logo/${game.logo}.png`}
              alt={`${game.logo} logo`}
              width={150}
              height={80}
              className="game-card-logo absolute max-w-[50%] left-1/2 transform -translate-x-1/2 z-10 max-h-[80px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

