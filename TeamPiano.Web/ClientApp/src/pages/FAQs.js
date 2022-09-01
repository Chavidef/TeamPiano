import React, { useEffect } from 'react';

const FAQs = () => {

    useEffect(() => {
        var activeLink = document.getElementById("_faqs");
        console.log(activeLink);
        activeLink.className += " active";
    }, []);


    return (
        <>
            <h1>FAQs</h1>
        </>
    )
}
export default FAQs;