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
          className="game-card relative w-full"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg3.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            src={`/images/casino/wrapper/${game.wrapper}.png`}
            alt={game.wrapper}
            width={310}
            height={270}
            className="game-card-main w-full object-cover"
          />
          <div className="game-card-logo-container absolute w-full h-[30%] bottom-0 left-0 flex items-center justify-center bg-black/50 transition-all duration-300">
            <Image
              src={`/images/casino/logo/${game.logo}.png`}
              alt={`${game.logo} logo`}
              width={160}
              height={80}
              className="game-card-logo absolute max-w-[50%] left-1/2 transform -translate-x-1/2 z-10 max-h-[80px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

