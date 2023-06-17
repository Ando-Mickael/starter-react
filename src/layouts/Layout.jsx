import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <main>
            <header>
                <h1>Layout</h1>
                <nav>
                    <ul>
                        <li>
                            <Link>Login</Link>
                        </li>
                        <li>
                            <Link>Sign up</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </main>
    );
}
