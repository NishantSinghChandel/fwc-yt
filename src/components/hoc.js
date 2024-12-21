import { useState, useEffect } from "react";

export default function HOC() {
    const [isAuthorized, setIsAuthorized] = useState(true);


    const isAuthenticated = (...props) => {
        const Component = props[0];
        const data = props[1];
        if (data.isAuthenticated) {
            return <Component {...props} />
        } else {
            return <p> Not Authorized</p>
        }
    }

    const SecretComponent = () => (
        <p> Secret Component</p>
    )

    const WrapComponent = (props) => isAuthenticated(SecretComponent, props);

    return (
        <div>
            <h3>High Order Components</h3>
            <WrapComponent isAuthenticated={true} />
        </div>

    )

}