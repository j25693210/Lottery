import Link from 'next/link';

const Navbar = () => (
    <nav className="navbar">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Lottery</a>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link href="/"><a>HOME</a></Link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
  
);

export default Navbar;