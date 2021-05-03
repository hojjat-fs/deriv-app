import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon } from '@deriv/components';

const WelcomeItem = ({ title, description, onClick, icon }) => (
    <div className='welcome-item' onClick={onClick}>
        {icon}
        <div className='welcome-item__body'>
            <Text as='h3' weight='bold' color='prominent'>
                {title}
            </Text>
            <Text as='p' color='prominent'>
                {description}
            </Text>
        </div>
        <div className='welcome-item__arrow'>
            <Icon icon='IcChevronRight' size={16} />
        </div>
    </div>
);

WelcomeItem.propTypes = {
    description: PropTypes.string,
    icon: PropTypes.element,
    onClick: PropTypes.func,
    title: PropTypes.string,
};

export default WelcomeItem;
