import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

type Option = { name: string, link: string }
type dropDownProps = {
    children?: React.ReactNode,
    options?: Option[]
}

export default function DropDown({ children, options = [] }: dropDownProps) {


    const [isOpen, setIsOpen] = useState(false)

    let dropDownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let handler = (e: any) => {
            if (!dropDownRef.current?.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    });




    return (
        <>

            <div id="dropdownDefaultButton"
                onClick={() => setIsOpen(!isOpen)} data-dropdown-toggle="dropdown"
                className="menu__link flex justify-between items-end gap-1 cursor-pointer hover:text-pink-600">
                {children}
                {isOpen ?
                    (<ChevronUpIcon className="stroke-1 h-4 w-4 text-blue-100" />) :
                    (<ChevronDownIcon className="stroke-1 h-4 w-4 text-blue-100" />)
                }
            </div>

            {/* Dropdown menu */}
            <div id="dropdown" ref={dropDownRef}
                className={`${!isOpen && `hidden`} absolute z-10 divide-y divide-gray-100 rounded-sm shadow w-44 bg-zinc-900`}>
                <ul className="py-2 text-sm text-left " aria-labelledby="dropdownDefaultButton">
                    {options.length > 0 ? options.map((option, index) => {
                        return (
                            <li key={index}>
                                <Link to={option.link} className="menu__link__dropDown"> {option.name} </Link>
                            </li>
                        )
                    })
                        : <li>
                            <a href="javascript:void(0)" className="block px-4 py-2 dark:hover:bg-gray-600">no option</a>
                        </li>
                    }

                </ul>
            </div>

        </>
    )
}