﻿import { React, Component } from 'react'
import './../components/Footer.css';
import home from './../images/footer/home.svg';
import mail from './../images/footer/mail.svg';
import phone from './../images/footer/phone.svg';
import planet from './../images/footer/planet.svg';

export class Footer extends Component {
    render() {
        return (
            <div class="container_footer">
                <div class="footer_content_block">
                    <div class="footer_content_block_item">
                        <img class="footer_img" src={mail} />
                        <p class="footer_p">profcifra@gmail.com</p>
                    </div>

                    <div class="footer_content_block_item">
                        <img class="footer_img" src={phone} />
                        <p class="footer_p">number</p>
                    </div>

                    <div class="footer_content_block_item">
                        <img class="footer_img" src={home} />
                        <p class="footer_p">420127, г. Казань, ул. Дементьева, д. 16, ОФИС 406</p>
                    </div>

                    <div class="footer_content_block_item">
                        <img class="footer_img" src={planet} />
                        <p class="footer_p">http://www.profcifra.ru</p>
                    </div>
                </div>
                <p style={{ textAlign: "center", margin:"0px 0px 20px 0px" }}>© ООО "ПРОФЦИФРА", 2024</p>
            </div>
        )
    }
}