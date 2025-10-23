import React from 'react'
import { NavListInfo } from '../lib/definitions'
import Image from "next/image"

function Navbar({collapsed, navList}:{collapsed: boolean, navList: NavListInfo[]}) {
  return (
    <div className=" overflow-y-auto px-3">
      {navList.map((nav, i) => (
          <a
            key={i}
            href={nav[2]}
            className="sidebar-item flex items-center gap-2 p-1.5 rounded-md cursor-pointer relative"
          >
            {!collapsed && (
              <div className='flex gap-2'>

                  <Image
                            className="items-center"
                            src={nav[1]}
                            alt={`${nav[0]} icon`}
                            width={20}
                            height ={16}
                          />
                <p className='overflow-hidden truncate whitespace-nowrap text-sm'>{nav[0]}</p>


              </div>
            )
            }
            {collapsed && (
              <div className=''>

                <Image
                            className="items-center"
                            src={nav[1]}
                            alt={`${nav[0]} icon`}
                            title={nav[0]}
                            width={20}
                            height ={16}
                          />

              </div>
            )}
          </a>
        ))}
      </div >
  )
}

export default Navbar
