import React from 'react';
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import menuData from './menuData';
import ThemeToggler from './ThemeToggler';
import CartWidget from '../Shop/cart-widget';
import { Auth } from "@helpdice/sdk";
import { Container, Description, Divider, Menu, Popover, User } from '@helpdice/ui';
// import Cart from "../Shop/cart";
// import Cart from "../Shop/cart";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  // const currentUser = useContext(AuthContext);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const authenticated = Auth.isAuthenticated();
  const info = Auth.getUserFromStrorage();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);
  });

  // console.log(authenticated);
  // console.log(getServerSideToken())

  const menu = menuData;

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${stickyMenu
        ? 'bg-white !py-4 shadow transition duration-100 dark:bg-black'
        : ''
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Link to="/">
            <img
              src="/images/logo/logo-dark.svg"
              alt="logo"
              style={{ height: 50 }}
              width={140}
              height={50}
              className="hidden w-full dark:block"
            />
            <img
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={140}
              style={{ height: 50 }}
              height={50}
              className="w-full dark:hidden"
            />
          </Link>

          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            type="button"
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!w-full delay-300' : 'w-0'
                    }`}
                >
                </span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? 'delay-400 !w-full' : 'w-0'
                    }`}
                >
                </span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!w-full delay-500' : 'w-0'
                    }`}
                >
                </span>
              </span>
              <span className="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!h-0 delay-[0]' : 'h-full'
                    }`}
                >
                </span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!navigationOpen ? '!h-0 delay-200' : 'h-0.5'
                    }`}
                >
                </span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${navigationOpen
            && 'navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent'
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menu.map((menuItem, key) => (
                <li key={`menuItem-${key}-${menuItem.id}-${menuItem.title.toLowerCase()}`} className={menuItem.submenu && 'group relative'}>
                  {menuItem.submenu
                    ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setDropdownToggler(!dropdownToggler)}
                          className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary dark:hover:text-white"
                        >
                          {menuItem.title}
                          <span>
                            <svg
                              className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                            </svg>
                          </span>
                        </button>

                        <ul
                          className={`dropdown ${dropdownToggler ? 'flex' : ''}`}
                        >
                          {menuItem.submenu.map((item: any) => (
                            <li key={`subMenu-${item.id}-${item.title.toLowerCase()}`} className="hover:text-primary dark:text-gray-350 dark:hover:text-white">
                              <Link to={item.path || '#'}>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )
                    : (
                      <Link
                        to={`${menuItem.path}`}
                        className={
                          'pathUrl' === menuItem.path
                            ? 'text-primary hover:text-primary dark:text-gray-300 dark:hover:text-white'
                            : 'hover:text-primary dark:hover:text-white'
                        }
                      >
                        {menuItem.title}
                      </Link>
                    )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <ThemeToggler />
            {authenticated ? (
              <>
                <CartWidget open={openCart} onClose={() => setOpenCart(false)} />
                <Popover
                  placement="bottom"
                  visible={openProfile}
                  child={<Container direction="column" width="200px">
                    <div style={{ padding: '12px' }}>
                      <Description title={info.membership ?? 'Free'} content={info.email} />
                    </div>
                    <Divider />
                    <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                      <li>
                        <Link to={'/account/orders'} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Orders</Link>
                      </li>
                    </ul>
                      <button
                        onClick={async () => await Auth.logout({}, {
                          onSuccess(response: any) {
                            toast.success(response.data?.message);
                          },
                          onError(error: any) {
                            toast.error(error?.message);
                          },
                        })}
                        type="button"
                        className="block cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign Out
                      </button>
                  </Container>}
                onVisibleChange={() => setOpenProfile(false)}
                >
                  <User style={{ padding: '8px 15px' }} className="cursor-pointer border border-grey rounded" src={info.avatar ?? '/avatar.webp'} name={info.name} />
                </Popover>
              </>
            ) : (
              <>
                <Link
                  to={'/login'}
                  className="text-regular font-medium text-waterloo hover:text-primary"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex items-center justify-center rounded-full bg-primary px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// w-full delay-300

export default Header;
