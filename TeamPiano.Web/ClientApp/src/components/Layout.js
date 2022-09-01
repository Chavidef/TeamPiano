
import React from 'react';

const Layout = (props) => {

    return (
        <>
            <header>
                <div className="topnav" id="_topnav">
                    <a href="/contactus" className="button">Book A Lesson</a>
                    <a href="/contactus" id="_contact" className="">Contact Us</a>
                    <a href="/FAQs" id="_faqs" className="">FAQs</a>
                    <a href="/schedule" id="_schedule" className="">Schedule</a>
                    <a href="/" id="_home" className="">About Us</a>
                </div>
            </header>
            <div className="container" style={{ marginTop: 80 }}>
                {props.children}
            </div>

        </>
    )
}

export default Layout;