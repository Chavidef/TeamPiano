import React, { useEffect } from 'react';

const Schedule = () => {

     useEffect(() => {
         var activeLink = document.getElementById("_schedule");
         console.log(activeLink);
         activeLink.className += " active";
    }, []);


    return (
        <>
            <h1>Schedule</h1>
        </>
    )
}
export default Schedule;