import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import listSchema from "../../../../shared/Lists";
import { getLists } from "../utils/endPoint";
import SubmitLists from "./SubmitLists";


export default function SideBar() {
    const [workspaceList, setWorkspaceList] = useState<listSchema[]>([]);
    useEffect(() => {
        const fetchLists = async () => {
            const tmpList = await getLists();
            setWorkspaceList(tmpList);
        };
        fetchLists();
    }, []);
    const lenWorkspace: boolean = workspaceList.length > 0;
    return (
        <Sidebar width="150px">
            <Menu>
                <MenuItem component={<Link to="/" />}> Main page</MenuItem>
                <SubMenu label="work space">
                    {lenWorkspace ? (workspaceList.map((workspace: listSchema) => {
                        return (
                            <MenuItem key={workspace.name}>
                                {workspace.name}
                            </MenuItem>
                        );
                    })
                    ) : (
                        <MenuItem>no workspace</MenuItem>
                    )}
                </SubMenu>
                <MenuItem component={<SubmitLists myList={workspaceList} myFunction={setWorkspaceList} />}>create new list</MenuItem>
                <MenuItem component={<Link to="/done" />}>Done Tasks</MenuItem>
            </Menu>
        </Sidebar>
    )
}