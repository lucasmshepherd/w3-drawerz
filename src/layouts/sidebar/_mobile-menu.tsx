'use client';

import { Fragment } from 'react';
import Logo from '@/components/ui/logo';
import Button from '@/components/ui/button';
import { Menu } from '@/components/ui/menu';
import { Transition } from '@/components/ui/transition';
import ActiveLink from '@/components/ui/links/active-link';
import Scrollbar from '@/components/ui/scrollbar';
import { Close } from '@/components/icons/close';
import { useDrawer } from '@/components/drawer-views/context';
import { useLayout } from '@/lib/hooks/use-layout';
import { ChevronDown } from '@/components/icons/chevron-down';
import { MenuItem } from '@/components/ui/collapsible-menu';
import { mobileMenuItems } from '@/layouts/sidebar/_mobile-menu-items';
/* mport routes from '@/config/routes' */;
// web3
/* import { ConnectWallet } from '@thirdweb-dev/react'; */
// styles
/* import styles from '@/assets/css/web3.module.css'; */

export function MenuItems() {
  const { layout } = useLayout();
  return (
    <div className="flex items-center xl:px-10 2xl:px-14 3xl:px-16">
      {mobileMenuItems.map((item, index) => (
        <Fragment key={'layout' + item.name + index}>
          {item.dropdownItems ? (
            <div className="relative mx-4 first:ml-0 last:mr-0">
              <Menu>
                <Menu.Button className="flex items-center text-sm font-medium transition text-gray-300 hover:text-white">
                  {item.name}
                  <span className="z-[1] transition-transform duration-200 ltr:ml-3 rtl:mr-3">
                    <ChevronDown />
                  </span>
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="ease-in duration-300"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                >
                  <Menu.Items className="absolute mt-5 w-64 origin-top-right rounded-lg bg-white p-3 shadow-large ltr:right-0 rtl:left-0 dark:bg-gray-800">
                    {item.dropdownItems.map((dropDownItem, index) => (
                      <Menu.Item key={dropDownItem.name + index}>
                        <div>
                          <ActiveLink
                            href={{
                              pathname: dropDownItem.href,
                            }}
                            className="block rounded-lg px-3 py-2 text-sm font-medium !text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 dark:!text-white dark:hover:bg-gray-700/50"
                            activeClassName="!bg-gray-100 dark:!bg-gray-700 my-1 last:mb-0 first:mt-0 !text-gray-900 dark:!text-white"
                          >
                            {dropDownItem.name}
                          </ActiveLink>
                        </div>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          ) : (
            <ActiveLink
              href={{
                pathname: item.href,
              }}
              className="mx-3 text-[13px] font-medium transition first:ml-0 last:mr-0 text-gray-300 hover:text-white 2xl:mx-3 2xl:text-sm 3xl:mx-4"
              activeClassName="!text-color4"
            >
              {item.name}
            </ActiveLink>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default function DrawerMenu() {
  const { closeDrawer } = useDrawer();
  return (
    <div className="relative w-full max-w-full bg-color2 xs:w-80">
      <div className="flex h-24 items-center justify-between overflow-hidden px-6 py-4">
        <Logo />
        <div className="md:hidden">
          <Button
            title="Close"
            color="white"
            shape="circle"
            variant="transparent"
            size="small"
            onClick={closeDrawer}
          >
            <Close className="h-auto w-2.5" />
          </Button>
        </div>
      </div>
      <Scrollbar style={{ height: 'calc(100% - 96px)' }}>
        <div className="px-6 pb-14 2xl:px-8">
          <div className="mt-2 sm:mt-4 md:mt-8 lg:mt-12">
            {mobileMenuItems.map((item, index) => (
              <MenuItem
                key={'drawer' + item.name + index}
                name={item.name}
                href={item.href}
                icon={item.icon}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </div>
        </div>
      </Scrollbar>
      <div className="absolute bottom-4 right-0 z-10 w-full px-6">
        <a href="https://app.rewardz.network" className="primary-button button-outline text-md whitespace-nowrap px-12 py-3 text-center">Launch App</a>
      </div>
    </div>
  );
}
