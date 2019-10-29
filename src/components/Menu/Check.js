import React from 'react'
import MobileMenu from './MobileMenu'
import Menu from './Menu'
import { isMobile } from 'react-device-detect';

function Check() {
    if (isMobile) {
        return (<MobileMenu />)
    }
    else {
        return (<Menu />)
    }
}

export default Check;

