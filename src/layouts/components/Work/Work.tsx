import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Work.module.scss';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles)

const Work: React.FC<any> = ({ data }) => {

    const [isHovered, setIsHovered] = React.useState<boolean>(false);
    
    const handleMouseOver = () => {
        setIsHovered(true);
    }
    
     const handleMouseLeave = () => {
        setIsHovered(false);
    }

    const handleLink = () => {
        window.location.href = `${data.link}`
    }

    return (
        <div className={cx('wrapper')} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            {isHovered === false ? (
                <div className={cx('normal')}>
                    <h4>{data.name}</h4>
                    
                    <span>{data.detail}</span>

                    <Button primary>{data.type}</Button>
                </div>
            ) : (
                <div className={cx('hover')} onClick={handleLink}>
                    <h4>{data.name}</h4>
                    
                    <span>{data.detail}</span>

                    <Button primary>{data.type}</Button>
                </div>
            )}
        </div>
    )
}

export default Work;
