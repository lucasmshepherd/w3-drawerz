'use client';

import Image from '@/components/ui/image';
import AnchorLink from '@/components/ui/links/anchor-link';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useIsDarkMode } from '@/lib/hooks/use-is-dark-mode';
import { useLayout } from '@/lib/hooks/use-layout';
import lightLogo from '@/assets/images/rayn-logo-11.svg';
import darkLogo from '@/assets/images/rayn-logo-02.svg';
import routes from '@/config/routes';
import { LAYOUT_OPTIONS } from '@/lib/constants';

export default function Logo() {
  const { layout } = useLayout();
  const isMounted = useIsMounted();
  const { isDarkMode } = useIsDarkMode();
  return (
    <AnchorLink
      href={{
        pathname:
          routes.home + (layout === LAYOUT_OPTIONS.MODERN ? '' : layout),
      }}
      className="flex w-28 outline-none sm:w-32 4xl:w-36"
    >
      <span className="relative flex overflow-hidden">
        {isMounted && isDarkMode && (
          <Image src={darkLogo} alt="RAYN Logo" height={42} priority />
        )}
        {isMounted && !isDarkMode && (
          <Image src={lightLogo} alt="RAYN Logo" height={42} priority />
        )}
      </span>
    </AnchorLink>
  );
}
