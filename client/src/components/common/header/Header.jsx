import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '../../../../node_modules/@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'
// ../../node_modules/@heroicons/react/24/outline
import logo from '../../../assets/logo.png'
import { useContext } from 'react';
import AuthContext from '../../../context/authContext';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'All Devices', href: '/devices', current: false },
  { name: 'Create Offer', href: '/devices/create', current: false },
  { name: 'Search', href: '/search', current: false },
];

// const userLinks = [
//   { name: 'Login', href: '/login', current: false },
//   { name: 'Register', href: '/register', current: false },
// ];

// const allLinks = [...navigation, ...userLinks];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {

  const {
    isAuthenticated,
    username
  } = useContext(AuthContext);

  const commonNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'All Devices', href: '/devices', current: false },
  ];

  // Navigation items based on authentication status
  const additionalNavigation = isAuthenticated
    ? [
        { name: 'Create Offer', href: '/devices/create', current: false },
        { name: 'Search', href: '/search', current: false },
      ]
    : [];

  const userLinks = isAuthenticated
    ? [
      { name: 'Logout', href: '/logout', current: false },
      { name: 'Profile', href: '/profile', current: true }
    ]
    : [
        { name: 'Login', href: '/login', current: false },
        { name: 'Register', href: '/register', current: false },
      ];

  const navigation = [...commonNavigation, ...additionalNavigation];

  const allLinks = [...navigation, ...userLinks];

  return (
    <Disclosure as="nav" className={styles.nav}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className={styles.logoSize}
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 space-x-4">
                

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    {/* ... existing code ... */}
                  </Menu>

                  {/* User links */}
                  <div className="hidden sm:block space-x-4">
                    {userLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-bold'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {allLinks.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-black-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
