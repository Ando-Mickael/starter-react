import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <main className="p-5">
            <div className="container">
                <div className="card">
                    <div className="card-header">Example</div>
                    <div className="card-body">
                        <Outlet />
                    </div>
                </div>
            </div>
        </main>
    );
}
