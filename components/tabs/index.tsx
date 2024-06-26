import React from 'react'

interface TabsProps {
    tabs: {
        name: string
        label: string
        Icon?: any
    }[]
    setTab: (tab: string) => void,
    tab: string
}

const Tabs = ({ tabs, setTab, tab }: TabsProps) => {
    return (
        <div className="flex justify-start items-center w-full border-b-2  ">
            {tabs.map((item) => (
                <div
                    key={item.name}
                    className={`flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 mr-4 p-2 gap-x-2 m-0 cursor-pointer hover:text-primary-600 border-b-2 border-transparent ${tab === item.name
                        ? "border-secondary-600 text-primary-600 border-b-2 border-b-primary-600  "
                        : ""
                        }`}
                    onClick={() => setTab(item.name as string)}
                >
                    {item.Icon && <item.Icon variant="TwoTone" className="hidden md:block" />}
                    {item.label}
                </div>
            ))}
        </div>
    )
}

export default Tabs