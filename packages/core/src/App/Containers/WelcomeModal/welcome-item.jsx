import React from 'react';
import PropTypes from 'prop-types';
import { Text, Icon, MobileWrapper, DesktopWrapper } from '@deriv/components';
import { localize } from '@deriv/translations';

const Description = ({ items }) => (
    <Text as='p' color='prominent'>
        {items.map(({ text, bold }) => {
            return bold ? <Text weight='bold'>{localize(text)}</Text> : localize(text);
        })}
    </Text>
);

Description.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
};

const WelcomeItem = ({ title, description, onClick, icon }) => (
    <div className='welcome-item' onClick={onClick}>
        <div className='welcome-item__icon'>{icon}</div>
        <div className='welcome-item__body'>
            <Text as='h3' weight='bold' color='prominent'>
                {title}
            </Text>
            <DesktopWrapper>
                <Description items={description} />
            </DesktopWrapper>
            <MobileWrapper>
                <Description items={description} />
            </MobileWrapper>
        </div>
        <div className='welcome-item__arrow'>
            <Icon icon='IcChevronRight' size={16} />
        </div>
    </div>
);

WelcomeItem.propTypes = {
    description: PropTypes.arrayOf(PropTypes.object).isRequired,
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

export default WelcomeItem;
