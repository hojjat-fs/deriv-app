import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@deriv/components';

const AccountCard = ({ title, description, button_text, buttonOnClick, icon }) => {
    return (
        <div className='account-types__box'>
            {icon}
            <Text as='h3' weight='bold' line_height='m' className='account-types__box-title'>
                {title}
            </Text>
            <Text as='p' size='xs' line_height='m' align='center' className='account-types__box-description'>
                {description}
            </Text>
            <Button className='account-TYPES__box-button' text={button_text} onClick={buttonOnClick} secondary />
        </div>
    );
};

AccountCard.propTypes = {
    button_text: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    buttonOnClick: PropTypes.func,
    icon: PropTypes.element,
};

export default AccountCard;
