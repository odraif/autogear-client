import React from 'react'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-router-dom';

export const SideBar = () => {
    document.title ="Dashboard";
    return (
        <>
            <div>
                <div
                    style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}
                >
                    <CDBSidebar className="position-fixed" textColor="#fff" backgroundColor="#333">
                        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                        dashboard
                        </CDBSidebarHeader>

                        <CDBSidebarContent className="sidebar-content">
                            <CDBSidebarMenu>
                                <Link exact to="/dashboard/" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="car">Cars</CDBSidebarMenuItem>
                                </Link>
                                <Link exact to="/dashboard/users" activeClassName="activeClicked">
                                    <CDBSidebarMenuItem icon="user">Users</CDBSidebarMenuItem>
                                </Link>
                                <Link
                                    exact
                                    to="/hero404"
                                    target="_blank"
                                    activeClassName="activeClicked"
                                >
                                    <CDBSidebarMenuItem icon="exclamation-circle">
                                        Request
                                    </CDBSidebarMenuItem>
                                </Link>
                            </CDBSidebarMenu>
                        </CDBSidebarContent>

                        <CDBSidebarFooter style={{ textAlign: 'center' }}>
                            <div
                                style={{
                                    padding: '20px 5px',
                                }}
                            >
                                Sidebar Footer
                            </div>
                        </CDBSidebarFooter>
                    </CDBSidebar>
                </div>
            </div>
        </>
    )
}
