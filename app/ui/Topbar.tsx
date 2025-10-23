import React from 'react'
import Image from 'next/image'

function Topbar({admin}: {admin: boolean}) {
  //todo: use a state manage for collapsed state
  const collapsed = true
  return (
    <header className="w-full h-14 flex items-center px-4 justify-between">
      <div className='flex gap-2 items-center'>
      {collapsed && (
        <Image
                    className="logo"
                    src="/oesisuicon.svg"
                    alt="Oesisu logo"
                    width={16}
                    height ={5}
                  />
      )}
        <span className="flex text-sm font-semibold">OESISU
        {/* Admin */}
      {admin && (
        <p className=' text-sm font-stretch-semi-condensed,  text-amber-200'>@Admin</p>
          )}
          </span>
      </div>

      {/* Live Time */}
      {/* Search */}
      <div className="flex items-center space-x-3 text-gray-400 text-sm">
        <Image
                    src="/search.svg"
                    alt="search"
                    width={16}
                    height ={5}
                  />
        {/* <span>Ebuka</span>
        <div className="w-8 h-8 rounded-full bg-gray-600" /> */}
      </div>
    </header>
  )
}

export default Topbar
