import * as React from 'react';
// import { Link } from 'react-router-dom';
import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Title from '../../components/Title/Title';
import Work from '../../layouts/components/Work/Work';

const cx = classNames.bind(styles)

const Home: React.FC<any> = () => {

    const work = [
        {
            "name": "Clone - Lotteria",
            "detail": "Rebuilt from an interface, database to a business flow based on Lotteria's website",
            "link": "https://fastfood-client-2-0.vercel.app/",
            "type": "Development"
        },
        {
            "name": "tu3tle portfolio",
            "detail": "My portfolio",
            "link": "https://tu3tle-portfolio.vercel.app/",
            "type": "Design & Development"
        },
        {
            "name": "In js we trust - quiz app",
            "detail": "Website to test JavaScript level for everyone, all questions are from Mr. Vuong Nguyen and the UI is made by me - tu3tle.",
            "link": "https://in-js-we-trust.vercel.app/",
            "type": "Design & Development"
        },
    ]

    const linkToGithub = () => {
        window.location.href = 'https://github.com/mtpodana'
    }

    const linkToLinkIn = () => {
        // window.location.href = ''
    }

    const linkToFacebook = () => {
        window.location.href = 'https://www.facebook.com/profile.php?id=100007478208653'
    }

    const linkToBlog = () => {
        // window.location.href = ''
    }

    return (
        <div className={cx('wrapper')}>            
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('intro')}>
                        <h1>Hi there 👋</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>I'm Mai Thanh Phuong - tu3tle</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>Full stack DEV</h1>
                    </div>

                    <div className={cx('intro')}>
                        <h1>Based in Sai Gon, Viet Nam</h1>
                    </div>
                </div>
                
                <div className={cx('contact')}>
                    <div className={cx('social')} onClick={linkToGithub}>
                        <h3>Github</h3>
                    </div>
                    
                    <div className={cx('social')} onClick={linkToLinkIn}>
                        <h3>LinkedIn</h3>
                    </div>

                    <div className={cx('social')} onClick={linkToFacebook}>
                        <h3>Facebook</h3>
                    </div>

                    <div className={cx('social')} onClick={linkToBlog}> 
                        <h3>Blog</h3>
                    </div>
                </div>

                <a id='work'>
                    <Title content='Work'/>
                </a>
                <div className={cx('work')}>
                    {
                        work.map((data) => (                           
                            <Work key={data} data={data}/>
                        ))
                    }
                </div>

                <a id='about'>
                    <Title content='About'/>
                </a>
                <div className={cx('about')}>
                    <p>As a young web developer full of passion and enthusiasm, with the knowledge, learned along with patience, hard work, and more than 1 year of experience accumulated in a university environment, I hope to contribute to the development of the company development.</p>
                </div>

                <a id='contact'>
                    <Title content='Contact'/>
                </a>
                <div className={cx('contact')}>
                    <div className={cx('social')}>
                        <h3>Github</h3>
                    </div>
                    
                    <div className={cx('social')}>
                        <h3>LinkedIn</h3>
                    </div>

                    <div className={cx('social')}>
                        <h3>Facebook</h3>
                    </div>

                    <div className={cx('social')}>
                        <h3>Blog</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
