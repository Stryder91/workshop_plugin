import React from 'react';

import {FormattedMessage} from 'react-intl';

import MyAccordeon from '../myCompo/Accordeon';

export default class RHSView extends React.PureComponent {

    render() {
        return (
            <div style={style.rhs}>
                <MyAccordeon />
            </div>
        );
    }
}

const style = {
    rhs: {
        padding: '10px',
    },
};
