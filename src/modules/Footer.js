import React from 'react'
import '../Footer.css'

import { FaGithub } from 'react-icons/fa'
export default function Footer() {

    return (
        <>
            <footer>
                <p>Designed by <a href="">Web 2</a></p>
                <div className="social-media">
                    <a href=''><FaGithub size={20}/></a>
                </div>

            </footer>
        </>
    )
}