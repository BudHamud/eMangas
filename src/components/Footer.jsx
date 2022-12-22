import { useState } from 'react';
import { FooterStyle } from './style';

const Footer = () => {

    const [click, setClick] = useState(false)

    return (
        <FooterStyle>
            <img
            onClick={() => setClick(!click)}
            src='/logo3.png'
            />
        </FooterStyle>
    );
}

export default Footer;
