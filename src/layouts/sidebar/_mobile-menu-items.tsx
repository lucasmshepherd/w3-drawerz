import routes from '@/config/routes';
import { HomeIcon } from '@/components/icons/home';
import { CompassIcon } from '@/components/icons/compass';
import { PoolIcon } from '@/components/icons/pool';
import { ProfileIcon } from '@/components/icons/profile';
import { DiskIcon } from '@/components/icons/disk';
import { ExchangeIcon } from '@/components/icons/exchange';
import { VoteIcon } from '@/components/icons/vote-icon';
import { PlusCircle } from '@/components/icons/plus-circle';
import { PowerIcon } from '@/components/icons/power';
import { LivePricing } from '@/components/icons/live-pricing';
import { NormalGridIcon } from '@/components/icons/normal-grid';

export const mobileMenuItems = [
  {
    name: 'Token',
    icon: <LivePricing />,
    href: '/token',
    link: '',
  },
  {
    name: 'NFTs',
    icon: <NormalGridIcon />,
    href: '/nft',
    link: '',
  },
  {
    name: 'Games',
    icon: <PowerIcon />,
    href: '/games',
    link: '',
  },
  {
    name: 'Quests',
    icon: <CompassIcon />,
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
