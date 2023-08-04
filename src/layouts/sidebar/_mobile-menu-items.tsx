import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { FarmIcon } from '@/components/icons/farm';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { CompassIcon } from '@/components/icons/compass';
import { LivePricing } from '@/components/icons/live-pricing';

export const mobileMenuItems = [
  {
    name: 'Token',
    icon: <HomeIcon />,
    href: '/token',
    link: '',
  },
  {
    name: 'NFT',
    icon: <FarmIcon />,
    href: '/nft',
    link: '',
  },
  {
    name: 'Games',
    icon: <FarmIcon />,
    href: '/games',
    link: '',
  },
  {
    name: 'Forge',
    icon: <FarmIcon />,
    href: '/forge',
    link: '',
  },
  {
    name: 'Telegram ↗',
    icon: <ProfileIcon />,
    href: 'https://t.me/rewardz_network',
    link: 'external',
  },
];
