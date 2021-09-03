import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Hideout VG</span>
              
            </h1>
            <h2>News, Reviews, Opinions</h2>
          </a>
        </Link>
        <Link href="/reviews">
          <a>Reviews</a>
        </Link>
        <Link href="/news">
          <a>News</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      {/* <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer> */}
    </div>
  )
}