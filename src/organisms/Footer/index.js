import React      from 'react';
import styles     from './styles.module.css';
import Navigation from '../../molecules/Navigation/index';
import Copyright  from '../../molecules/Copyright/index';
import CorpLogo   from '../../molecules/CorpLogo/index';
import Txt        from '../../atoms/Txt/index';

const Footer = ({navigations, ...props}) => (
    <section 
        className={styles.footer} {...props}
    >
        <div className={styles.footerinner}>
            <div className={styles.basicinfo}>
                <CorpLogo>株式会社あんしんセキュリティー</CorpLogo>
                <Txt 
                    className={styles.text}
                    data-sal="slide-down"
                    data-sal-duration="400"
                    data-sal-easing="ease"                                  
                >
                    岐阜県岐阜市西川手6丁目62番地1
                </Txt>
                <Txt 
                    className={styles.text}
                    data-sal="slide-down"
                    data-sal-duration="400"
                    data-sal-easing="ease"                                  
                >
                    TEL: 058-213-7821
                </Txt>
            </div>
            <div className={styles.links}>
                <Navigation items={navigations} />
            </div>
        </div>
        <Copyright>2020 Anshin Security CO.,LTD.</Copyright>
    </section>
);

export default Footer;