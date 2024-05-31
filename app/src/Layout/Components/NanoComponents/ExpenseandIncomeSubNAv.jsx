import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const submenuNav = [
    { title: "Expenses", path: "/expense" },
    { title: "Income", path: "/income "},
    { title: "Additional Income", path: "/extraincome "},
]
class ExpenseNAv extends Component {
    render() {
        return (
            <header className="text-base lg:text-sm">
            <nav className="border-b">
                <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
                    {
                        submenuNav.map((item,idx) => {
                            return (
                                // Replace [idx == 0] with [window.location.pathname == item.path]
                                <li key={idx} className={`py-1 ${idx == this.props.id ? "border-b-2 border-indigo-600" : ""}`}>
                                    <Link to={item.path} className="block py-2 px-3 rounded-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150">
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
        );
    }
}

export default ExpenseNAv;
