import React from 'react';

import { NavLink } from 'react-router-dom';

import { useFormContext } from './form.context';

const Header = () => {
    const { profile, social } = useFormContext();

    return (
        <header className="step-links">
            <NavLink to="/">
                Profile <span />
            </NavLink>
            {profile.name ? (
                <NavLink to="/social">
                    Social <span />
                </NavLink>
            ) : (
                <a>
                    Social <span />
                </a>
            )}

            {social.Twitter ? (
                <NavLink style={{ float: 'right' }} to="/review">
                    Review <span />
                </NavLink>
            ) : (
                <a style={{ float: 'right' }}>
                    Review <span />
                </a>
            )}
        </header>
    );
};

export default Header;
