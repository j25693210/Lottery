import Head from 'next/head';
import Navbar from './Navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Lottery</title>
            <link rel="stylesheet" href="https://bootswatch.com/3/slate/bootstrap.min.css" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;