'use client';

import { Suspense, useState, useEffect } from 'react';
import Logo from '@/components/ui/logo';
import cn from 'classnames';
/* import { FlashIcon } from '@/components/icons/flash';
import { ProfileIcon } from '@/components/icons/profile';
import ActiveLink from '@/components/ui/links/active-link'; */
import Hamburger from '@/components/ui/hamburger';
import { MenuItems } from '@/layouts/sidebar/_mobile-menu';
import { useIsMounted } from '@/lib/hooks/use-is-mounted';
import { useBreakpoint } from '@/lib/hooks/use-breakpoint';
import { useDrawer } from '@/components/drawer-views/context';
import { useWindowScroll } from '@/lib/hooks/use-window-scroll';
/* import { useLayout } from '@/lib/hooks/use-layout';
import routes from '@/config/routes';
import { LAYOUT_OPTIONS } from '@/lib/constants'; */
import Loading from '@/components/loading';
import Footer from '@/layouts/footer/footer';
// web3
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
// styles
import styles from '@/assets/css/web3.module.css';

/* function NotificationButton() {
  const { layout } = useLayout();
  return (
    <ActiveLink
      href={
        '/' +
        (layout === LAYOUT_OPTIONS.MODERN ? '' : layout) +
        routes.notification
      }>
      <div className="rnd-button relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:text-white sm:h-12 sm:w-12">
        <FlashIcon className="h-auto w-3 sm:w-auto" />
      </div>
    </ActiveLink>
  );
}

function ProfileButton() {
  return (
    <ActiveLink href={`/user/profile/`}>
      <div className="rnd-button relative flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white text-brand shadow-main transition-all hover:-translate-y-0.5 hover:shadow-large focus:-translate-y-0.5 focus:shadow-large focus:outline-none dark:text-white sm:h-12 sm:w-12">
        <ProfileIcon className="h-auto w-3 sm:w-auto" />
      </div>
    </ActiveLink>
  );
} */

function HeaderRightArea() {
  const address = useAddress();
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <div className="order-last flex shrink-0 items-center">
      <div className="hidden lg:flex lg:items-center gap-4">
        {/* {address && <NotificationButton />}
        {address && <ProfileButton />} */}
        <a href="https://app.rewardz.network" className="primary-button button-outline text-light text-md whitespace-nowrap px-12 py-3 text-center">Launch App</a>
      </div>

      <div className="flex items-center lg:hidden">
        {/* {address && <NotificationButton />} */}
        <Hamburger
          isOpen={isOpen}
          onClick={() => openDrawer('MOBILE_MENU')}
          color="white"
          className="shadow-main ltr:ml-3.5 rtl:mr-3.5 border border-solid border-gray-700 bg-light-dark text-white ltr:sm:ml-5 rtl:sm:mr-5"
        />
      </div>
    </div>
  );
}

export function Header() {
  const isMounted = useIsMounted();
  const breakpoint = useBreakpoint();
  const windowScroll = useWindowScroll();
  const { openDrawer, isOpen } = useDrawer();
  return (
    <nav
      className={cn(
        'sticky top-0 z-30 flex w-full items-center justify-between px-4 transition-all duration-300 ltr:right-0 rtl:left-0 sm:px-6 lg:px-8 3xl:px-10',
        isMounted && windowScroll.y > 10
          ? 'h-16 bg-gradient-to-b from-color2 to-color2/80 shadow-card backdrop-blur sm:h-20'
          : 'h-16 bg-color2 sm:h-24'
      )}
    >
      <div className="mx-auto flex w-full max-w-[2160px] items-center justify-between">
        <div className="flex items-center">
          <div className="hidden lg:mr-6 lg:block xl:hidden">
            <Hamburger
              isOpen={isOpen}
              onClick={() => openDrawer('MOBILE_MENU')}
              color="white"
              className="shadow-main border border-solid border-gray-700 bg-light-dark text-white"
            />
          </div>
          <Logo />
          {isMounted && ['xs', 'sm', 'md', 'lg'].indexOf(breakpoint) == -1 && (
            <MenuItems />
          )}
        </div>
        <HeaderRightArea />
      </div>
    </nav>
  );
}

export default function MinimalLayout({
  children,
}: React.PropsWithChildren<{}>) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if(loading) {
    return <Loading />
  } else {
    return (
      <>
        <Header />
        <div className="main-wrapper flex min-h-screen flex-col gap-6 px-4 sm:px-6 lg:px-8 3xl:px-10">
          <main className="text-white main-main mx-auto mb-12 flex w-full max-w-[2160px] flex-grow flex-col">
            {children}
          </main>
        </div>
        <Footer />
      </>
    )
  }
}
