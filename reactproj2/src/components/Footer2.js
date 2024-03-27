import React from 'react';
import './Footer2.css';

const Footer2 = () => {
    return (
        <div className= "footer2-container">
            <ul style = {{listStyle:"none", display: "flex", flexDirection:"row"}}>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us/articles/115014792127-Copyright-notice">
                    ©&nbsp;<span>2024</span>&nbsp;<span>The New York Times Company</span></a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.nytco.com/">NYTCo</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us/articles/115015385887-Contact-Us">Contact Us</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us/articles/115015727108-Accessibility">Accessibility</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.nytco.com/careers/">Work with us</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://nytmediakit.com/">Advertise</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.tbrandstudio.com/">T Brand Studio</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.nytimes.com/privacy/cookie-policy#how-do-i-manage-trackers">Your Ad Choices</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.nytimes.com/privacy/privacy-policy">Privacy Policy</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us/articles/115014893428-Terms-of-service">Terms of Service</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us/articles/115014893968-Terms-of-sale">Terms of Sale</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="/sitemap/">Site Map</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://help.nytimes.com/hc/en-us">Help</a></li>
                <li className = "footer-list-item"><a class="footer2-anchor" href="https://www.nytimes.com/subscription?campaignId=37WXW">Subscriptions</a></li>
            </ul>
        </div>
    );
}

export default Footer2;
