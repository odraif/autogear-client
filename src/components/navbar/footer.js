import React from 'react';
import {  CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


export const Footer = () => {
    return (
        <>
        {/* <CDBFooter className="shadow"> */}
        <hr></hr>
            <CDBBox
                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{ width: '80%' }}
            >
                <CDBBox display="flex" alignItems="center">
                    <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <img
                            alt="logo" src='/logo/logo_gear_black.png' width="50px"
                        />
                        <span className="ml-4 h5 mb-0 font-weight-bold">Autogear</span>
                    </a>
                    <small className="ml-2">&copy; Autogear, 2023. All rights reserved.</small>
                </CDBBox>
                <CDBBox display="flex">
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab icon="twitter" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab icon="instagram" />
                    </CDBBtn>
                </CDBBox>
            </CDBBox>
            {/* </CDBFooter> */}
        </>
    );
};
