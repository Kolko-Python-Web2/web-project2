import React from 'react'
import '../Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa'
export default function Footer() {

    return (
        <>
            <footer>
                <p>Designed by <a href="">Web 2</a></p>
                <div className="social-media">
                    <a href=""><FaFacebookF/></a>
                    <a href=""><FaTwitter/></a>
                    <a href=""><FaYoutube/></a>
                    <a href=""><FaInstagram /></a>
                    <a href=''><FaGithub/></a>
                </div>

            </footer>
        </>
    )
}