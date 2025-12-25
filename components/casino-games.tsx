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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 lg:gap-3">
      {casinoGames.map((game, index) => (
        <div
          key={index}
          className="relative rounded-[10px] overflow-hidden transition-all duration-300 border border-[#b5f4fe] hover:scale-105"
          style={{
            backgroundImage: 'url(/images/bg/game-card-bg2.png)',
          }}
        >
          <div className="relative">
            <Image
              src={`/images/casino/wrapper/${game.wrapper}.png`}
              alt={game.wrapper}
              width={300}
              height={200}
              className="w-full object-cover transition-transform duration-500 hover:scale-110"
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
            width={150}
            height={80}
            className="absolute w-[50%] left-1/2 bottom-[4%] transform -translate-x-1/2 z-10"
          />
        </div>
      ))}
    </div>
  );
}

