import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Hamburger from './Hamburger'
import Navbar from './Navbar'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    console.log(menuOpen);
    if(menuOpen === true) {
      document.body.style.overflow = 'hidden';
      
    }
    else{
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  return (
    <>
      <div className="layout">
        <header>
          <div className="page-title">
            <Link href="/">
              <a>
                <h1>
                  <span className="title-main">Hideout<span className="title-sub">VG</span></span>
                </h1>
              </a>
            </Link>
          </div>
          <div className="nav-links">
            <ul className="links">
              <Link href="/reviews">
                <a className="nav-link">Reviews</a>
              </Link>
              <Link href="/news">
                <a className="nav-link">News</a>
              </Link>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
              < Hamburger isOpen={menuOpen}/>
            </div>
          </div>
        </header>
  
        <div className={"mobile-links " + (menuOpen === true ? 'active' : '')} onClick={toggleMenu}>     
          <Link href="/reviews">
            <a className="nav-link">Reviews</a>
          </Link>
          <Link href="/news">
            <a className="nav-link">News</a>
          </Link>
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </div>
        
        <div className="page-content">
          { children }
        </div>
  
        <footer>
          <p>Copyright 2021 <span className="title-main">HIDEOUT<span className="title-sub">VG</span></span></p>
        </footer>
  
        <style jsx>{`
          header {
            z-index: 50;
          }
          .page-content, footer {
            z-index: 0;
          }
          
          .hamburger {
            display: none;
          }
          .mobile-links {
            position: absolute;
            width: 100vw;
            height: 100vh;
            top: -100em;
            transition: 0.75s;
            display: flex;
            background-color: #f01b29;
            z-index: 10;
            align-items: center;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: center;
          }

          .mobile-links.active {
            top: 0;
          }

          @media only screen and (max-width: 769px) {
            .links {
                display: none;
            }
            .hamburger {
              display: block;
              z-index: 1000;
            }
  
          }

          @media only screen and (max-width: 500px) {
            .title-main {
              font-size: 0.75em;
              font-weight: 600;
            }

            .title-sub {
              font-size: 1.25em;
              font-weight: 800;
            }
        }
        `}</style>
      </div>
    </>
  )
}

// display: ${menuOpen ? 'flex' : 'none'};
//               background-color: blue;
//               z-index: 100;
//               height: 100vh;
//               width: 100vw;
//               align-items: center;
//               flex-direction: column;
//               flex-wrap: nowrap;
//               align-content: center;
//               justify-content: center;
//               transition: 2s;
//               transform: ${menuOpen ? 'translate3d(0vw, 0, 0)' : 'transform: translate3d(-100vw, 0, 0)'}