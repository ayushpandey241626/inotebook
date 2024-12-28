import React, { useState, useEffect } from "react";

function Alert(props) {
    const [alert, setAlert] = useState(props.message);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert("");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div
                className={`alert alert-primary ${alert ? "" : "d-none"}`}
                role="alert"
            >
                {alert}
            </div>
        </>
    );
}

export default Alert;
