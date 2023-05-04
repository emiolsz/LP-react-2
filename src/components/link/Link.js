/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';

function Link({ href, text }) {
    return (
        <a className="link" href={href}>{text}</a>
    );
}

export default Link;