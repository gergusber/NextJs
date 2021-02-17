import React from 'react';
import Link from 'next/link';
function Header() {
    return (
        <div>

            <ul className='nav'>
                <li className='nav-item'>
                    <Link href='/'>
                        <h1>Github Explorer</h1>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href='/'>
                        <a className="nav-link">Usuarios</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href='/blog'>
                        <a className="nav-link">Blog</a>
                    </Link>
                </li>
            </ul>
            <style jsx>{`
                        div {
                            width: 100%;
                            display: flex;
                            flex-flow: row nowrap;
                            background-color: var(--midnight-black);
                            color:white
                        }
                        a{
                            color:white;
                        }
                        `}</style>
            <style global jsx>{`
                        html {
                            background-color: var(--midnight-white);
                        }
                        `}</style>
        </div>
    )

}
export default Header;