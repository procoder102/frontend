import React from 'react'
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Searchbox = () => {

    const menuItems = [
    {
      key: "1",
      label: "Profile",
    },
    {
      key: "2",
      label: "Settings",
    },
    {
      key: "3",
      label: "Logout",
    },
  ];
    const button = [
        {key:"buy",label:"Buy"},
        {key:"Rent",label:"Rent"},
        {key:"Newlaunch",label:"New Launch"},
        {key:"Commercial",label:"Commercial"},
        {key:"Plots/Land",label:"Plots/Land"},
        {key:"Projects",label:"Projects"},
        {key:"PostProperty",label:"Post Property"}
    ]

    const menu = (
    <Menu
      items={menuItems.map((item) => ({
        key: item.key,
        label: item.label,
        onClick: () => {
          console.log(`${item.label} clicked`);
        },
      }))}
    />
  );
    const buy = [

    ]
  return (
    <>
        <div class="shadow-xl ... bg-white rounded-lg w-auto lg:w-[max-content] mx-auto">
           <div className='flex'>
                {button.map((item) => {
                    return(
                        <button type='text' className='px-10 py-5 text-gray-500 font-medium border-b-1 border-gray-300' key={item.key}>{item.label}</button>
                    )
                })}
           </div>
           <div className=''>
            <div className='py-3 border-e border-gray-300 w-[min-content]'>
                <Dropdown overlay={menu} trigger={["click"]} className='serchboxDropDown border-e-1 border-gray-100'>
      <Button>
        All Residential <DownOutlined />
      </Button>
    </Dropdown>
    </div>
           </div>
        </div>
    </>
  )
}

export default Searchbox