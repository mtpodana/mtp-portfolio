import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Header.module.scss';
import Dropdown from '../../../components/Dropdown/Dropdown';

const cx = classNames.bind(styles)

const Header: React.FC<any> = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <h3>Sodana</h3>
            </div>

            <div className={cx('shortcut')}>
                <Dropdown />
            </div>
        </div>
    )
}

export default Header;
