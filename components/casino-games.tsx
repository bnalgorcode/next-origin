import Image from 'next/image';

const casinoGames = [
  { wrapper: 'evolution', logo: 'evolution' },
  { wrapper: 'taishan', logo: 'taishan' },
  { wrapper: 'ag', logo: 'ag' },
  { wrapper: 'ezugi', logo: 'ezugi' },
  { wrapper: 'allbet', logo: 'allbet' },
  { wrapper: 'dreamgaming', logo: 'dreamgaming' },
  { wrapper: 'pragmatic', logo: 'pragmatic' },
  { wrapper: 'sexy', logo: 'sexy' },
  { wrapper: 'vivo', logo: 'vivo' },
  { wrapper: 'wm', logo: 'wm' },
  { wrapper: 'betgames', logo: 'betgames' },
  { wrapper: 'bota', logo: 'bota' },
  { wrapper: 'skywind', logo: 'skywind' },
  { wrapper: 'dowin', logo: 'dowin' },
  { wrapper: 'playtech', logo: 'playtech' },
  { wrapper: 'onetouch', logo: 'onetouch' },
  { wrapper: 'alg', logo: 'alg' },
  { wrapper: '7mojos', logo: '7mojos' },
  { wrapper: 'hilton', logo: 'hilton' },
];

export default function CasinoGames() {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-2.5 md:gap-3">
      {casinoGames.map((game, index) => (
        <div
          key={index}
          className="relative w-full rounded-[10px] overflow-hidden transition-all duration-300 border border-[#e2b5fe] hover:scale-105 min-h-[220px] sm:min-h-[240px] md:min-h-[260px]"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative w-full h-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px]">
            <Image
              src={`/images/casino/wrapper/${game.wrapper}.png`}
              alt={game.wrapper}
              width={310}
              height={270}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="absolute bottom-0 w-full h-[35%]"
              style={{
                background: 'linear-gradient(to bottom, transparent, black)',
              }}
            />
          </div>
          <Image
            src={`/images/casino/logo/${game.logo}.png`}
            alt={`${game.logo} logo`}
            width={160}
            height={90}
            className="absolute w-[50%] left-1/2 bottom-[4%] transform -translate-x-1/2 z-10 max-w-[120px] sm:max-w-[140px] md:max-w-[150px]"
          />
        </div>
      ))}
    </div>
  );
}

