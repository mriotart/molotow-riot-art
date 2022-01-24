import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './global.css'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import MolotowLogo from '../../images/molotow_v4.inline.svg'
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, fullHeroImage, children }) => {
    const [open, setOpen] = useState(false);
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)

    let eyecatcherSection;
    if (fullHeroImage === true) {
        eyecatcherSection =
            <section id="eyecatcher">
                <div className="eyecatcher-container-full">
                    <h1>Molotow Riot Art <span></span></h1>
                    <a href="#spotlight" type="button" className="spotlight-link">Spotlight</a>
                </div>
            </section>
    } else {
        eyecatcherSection = '';
        // <section id="eyecatcher">
        //     <div className="eyecatcher-container-small">
        //         <h1>Molotow Riot Arts</h1>
        //     </div>
        // </section>
    }


    return (
        <div>
            <header>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            </header>
            <section id="header">
                <div className="header container">
                    <div className='logo-container'>
                        <Link to="/">
                            <MolotowLogo />
                        </Link>
                    </div>


                    <nav className='navbar'>
                        <div
                            className={open ? 'hamburger-button active' : 'hamburger-button'}
                            onClick={() => setOpen(!open)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter')
                                    setOpen(!open)
                            }}
                            role='button'
                            tabIndex={0}>
                            <div id='bar1' className='bar'></div>
                            <div id='bar2' className='bar'></div>
                            <div id='bar3' className='bar'></div>
                        </div>
                        <ul className={open ? 'active' : null}>
                            <li>
                                <Link to="/gallery" className='nav-link-text'>
                                    Gallerie
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className='nav-link-text'>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className='nav-link-text'>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>

            {eyecatcherSection}

            <main>
                <div className='main-container'>
                    {children}
                </div>
            </main>
            <footer>

                <div className='footer-container'>
                    <h1><span>Molotow</span> Riot <span>Art</span></h1>
                    <div className='social-icons'>
                        <div classname='social-icon'>
                            <StaticImage
                                src='../../images/icons/facebook-icon.png'
                                width={32}
                                height={32}>
                            </StaticImage>
                        </div>
                        <div classname='social-icon'>
                            <StaticImage
                                src='../../images/icons/instagram-icon.png'
                                width={32}
                                height={32}>
                            </StaticImage>
                        </div>
                        <div classname='social-icon'>
                            <StaticImage
                                src='../../images/icons/twitter-icon.png'
                                width={32}
                                height={32}>
                            </StaticImage>
                        </div>
                        <div classname='social-icon'>
                            <StaticImage
                                src='../../images/icons/whatsapp-icon.png'
                                width={32}
                                height={32}>
                            </StaticImage>
                        </div>
                    </div>

                    <p>Copyright © 2022 Molotow Riot Art. All rights reserved</p>
                </div>

                {/* <div className='theme-toggler'>
                    <ThemeToggler>
                        {({ theme, toggleTheme }) => {
                            // Don't render anything at compile time. Deferring rendering until we
                            // know which theme to use on the client avoids incorrect initial
                            // state being displayed.
                            if (theme == null) {
                                return null
                            }
                            return (
                                <button type="button" onClick={() => {
                                    console.log('current theme', theme)
                                    if ('dark' === theme) {
                                        toggleTheme('light');
                                    } else {
                                        toggleTheme('dark');
                                    }
                                }}>
                                    {theme === 'dark' ? 'hell' : 'dunkel'}
                                </button>
                            )
                        }}
                    </ThemeToggler>
                </div> */}
            </footer >
        </div >
    )
}

export default Layout