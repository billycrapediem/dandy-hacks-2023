import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBar() {
    return (
        <Sidebar width="150px">
            <Menu>
                <SubMenu label="work space">
                    <MenuItem> Account </MenuItem>
                    <MenuItem> Privacy </MenuItem>
                    <MenuItem> Notifications </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}