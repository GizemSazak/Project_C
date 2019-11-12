import React from 'react'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import { isMobile } from 'react-device-detect';

// This function shows the MobileMenu if you have a phone and a webmenu if you're on a PC
function Check() {
    // if it's a mobile device return <Mobilemenu/> else return <Menu/>
   // return ((isMobile) ? <MobileMenu /> : <Menu />)
   return  <Menu />
}

export default Check;

