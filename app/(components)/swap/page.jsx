import React from 'react'
import Navbar from './Navbar'
const page = () => {
  return (<>
          <Navbar/>

<main className="flex items-center justify-center">

      <div className="bg-slate-950 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-6">
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Sell</label>
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-4xl text-gray-100 outline-none w-full"
            />
            <button className="bg-gray-800 text-gray-100 px-3 py-1 rounded-lg ml-2 flex items-center">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="ETH"
                className="h-6 w-6 mr-1"
              />
              <span>ETH</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex justify-center my-2">
          <button className="bg-gray-700 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19V6m5 5l-5 5-5-5"
              ></path>
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Buy</label>
          <div className="flex items-center bg-gray-700 p-3 rounded-lg">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent text-4xl text-gray-100 outline-none w-full"
            />
            <button className="bg-gray-800 text-gray-100 px-3 py-1 rounded-lg ml-2 flex items-center">
              <img
                src="https://cryptologos.cc/logos/ethereum-eth-logo.png"
                alt="ETH"
                className="h-6 w-6 mr-1"
              />
              <span>ETH</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <button className="bg-green-700 text-black-500 w-full py-3 rounded-lg hover:bg-green-600">
          Connect wallet
        </button>
      </div>
      </main>
  </>

  )
}

export default page