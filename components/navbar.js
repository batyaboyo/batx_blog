import { useRouter } from "next/router";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";
import Web3 from "web3";

export default function Navbar() {
  const navigation = [
    "Start Compaign",
    "Projects",
    "Launch",
    "Collaborate",
    "Hire",
  ];

  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function getWeb3() {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);

      try {
        await window.ethereum.enable();
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error(error);
      }
    }

    if (typeof window.ethereum !== "undefined") {
      getWeb3();
    }
  }, []);

  async function connectToWallet() {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    } catch (error) {
      console.error(error);
    }
  }

  const { pathname } = useRouter();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <a className="flex items-center space-x-2 text-2xl font-medium text-gray-900 dark:text-white">
              <img
                src="/img/logo.png"
                alt="CrowdNuru"
                width="290"
                height="60"
              />
            </a>
          </Link>
          
            <Disclosure.Button
              aria-label="Toggle Menu"
              className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-pink-500 focus:text-pink-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.485 18.485a1 1 0 0 1-1.414 1.414l-7.778-7.778a1 1 0 0 1 0-1.414L18.07 4.122a1 1 0 0 1 1.414 1.414L13.414 12l6.07 6.07a1 1 0 0 1 0 1.415zm-7.778-5.657a1 1 0 0 1 1.414 0 1 1 0 0 1 0 1.414L7.757 18.071a1 1 0 0 1-1.414-1.414L11.586 12 6.343 6.758a1 1 0 0 1 1.414-1.414l6.07 6.07z"
                />
              </svg>
            </Disclosure.Button>
          
            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
              <>
                {navigation.map((item, index) => (
                  <Link key={index} href="/">
                    <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-pink-500 focus:text-pink-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                      {item}
                    </a>
                  </Link>
                ))}
                {!accounts.length ? (
                  <button
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-pink-500 rounded-md lg:ml-5"
                    onClick={connectToWallet}
                  >
                    Connect Wallet
                  </button>
                ) : (
                  <div className="w-full px-4 py-2 mt-3 text-center text-gray-500 rounded-md dark:text-gray-300 focus:text-pink-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                    Connected to {accounts[0].slice(0, 6)}
                    ...
                    {accounts[0].slice(
                      accounts[0].length - 4,
                      accounts[0].length
                    )}
                  </div>
                )}
              </>
            </Disclosure.Panel>
        </div>
        </Disclosure>
        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-pink-500 focus:text-pink-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {!accounts.length ? (
            <button
              className="px-6 py-2 text-white bg-pink-500 rounded-md md:ml-5"
              onClick={connectToWallet}
            >
              Connect Wallet
            </button>
          ) : (
            <div className="px-4 py-2 mt-2 text-sm text-gray-500 rounded-md dark:text-gray-300 focus:text-pink-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
              Connected to {accounts[0].slice(0, 6)}
              ...
              {accounts[0].slice(accounts[0].length - 4, accounts[0].length)}
            </div>
          )}

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}
