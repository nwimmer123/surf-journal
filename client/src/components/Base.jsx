import React from 'react';
import {Link, IndexLink} from 'react-router';

class Base extends React.Component {
    render() {
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <IndexLink to="/">Surf Journal</IndexLink>
                    </div>

                <div className="top-bar-right">
                    <Link to="/login">Log in</Link>
                    <Link to="signup">Sign up</Link>
                </div>

            </div>
            {}
            {this.props.children}

        </div>
        );
    }
}

export default Base;