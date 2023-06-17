import * as React from 'react';
import classNames from "classnames/bind";
import styles from './MainLayout.module.scss';

import Header from '../components/Header/Header';

const cx = classNames.bind(styles)

const MainLayout: React.FC<any> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    {children}
                </div>  
            </div>
        </div>
    )
}

export default MainLayout;
