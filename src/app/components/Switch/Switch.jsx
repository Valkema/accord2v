import React from 'react';
import './Switch.scss';

function Switch(props) {
    const labelMode = props.mode === 'multiple' ? 'single' : 'multiple';

    return (
        <div className="switch">
            <input type="checkbox" id="switch" className="switch__input" onChange={props.modeToggler}>
            </input>
            <label htmlFor="switch" className="switch__label">
            <span className="switch__name">1</span>
            <span className="switch__name">2</span>
            <div className="switch__ball"></div>
            </label>
            <p className="switch__title">Change interface type to seen {labelMode} item</p>
        </div>
    );
}

export default Switch;