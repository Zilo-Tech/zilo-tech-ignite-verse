import { Clock, MapIcon, Phone, User2Icon } from 'lucide-react'
import React from 'react'

export default function TopBar() {
  return (
    <div>
      <div className="py-3 border px-20"> {/* Added some basic styling */}
      <div className="">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="top-bar-left mb-2 md:mb-0">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li className="flex items-center gap-2">
                <Phone />
                <a href="tel:256214203215" className="hover:text-blue-600">256 214 203 215</a>
              </li>
              <li className="flex items-center gap-2">
                <MapIcon />
                <span>258 Helano Street, New York</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock />
                <span>Mon - Sat: 8:00 - 15:00</span>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="top-bar-right">
            <div className="register-box flex items-center gap-2">
              <div className="icon">
                <User2Icon />
              </div>
              <a href="#" className="text-sm hover:text-blue-600">Login / Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
