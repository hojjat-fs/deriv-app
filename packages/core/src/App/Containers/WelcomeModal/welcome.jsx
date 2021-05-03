import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { Text } from '@deriv/components';
import CFDs from 'Assets/SvgComponents/onboarding/cfd.svg';
import Multipliers from 'Assets/SvgComponents/onboarding/multipliers.svg';
import DigitalOptions from 'Assets/SvgComponents/onboarding/digital-options.svg';
import NotSure from 'Assets/SvgComponents/onboarding/not-sure.svg';
import WelcomeItem from './welcome-item.jsx';

const Welcome = ({ switchPlatform, toggleAccountTypesModal, toggleWelcomeModal }) => (
    <>
        <Text as='h2' weight='bold' align='center' color='prominent' className='welcome__title'>
            {localize('Where would you like to start?')}
        </Text>
        <div className='welcome__body'>
            <WelcomeItem
                title={localize('CFDs')}
                description={localize('Maximise returns by risking more than you put in.')}
                onClick={() => switchPlatform(routes.mt5)}
                icon={<CFDs className='welcome-item__icon' />}
            />
            <WelcomeItem
                description={localize('Multiply returns by risking only what you put in.')}
                onClick={() => {
                    toggleWelcomeModal({ is_visible: false, should_persist: true });
                    toggleAccountTypesModal(true, 'multipliers');
                }}
                title={localize('Multipliers')}
                icon={<Multipliers className='welcome-item__icon' />}
            />
            <WelcomeItem
                description={localize('Earn fixed returns by risking only what you put in.')}
                onClick={() => {
                    toggleWelcomeModal({ is_visible: false, should_persist: true });
                    toggleAccountTypesModal(true, 'digital-options');
                }}
                title={localize('Digital Options')}
                icon={<DigitalOptions className='welcome-item__icon' />}
            />
            <WelcomeItem
                description={localize('Let us introduce you to trading on Deriv.')}
                onClick={() => switchPlatform(routes.trade)}
                title={localize('Not sure?')}
                icon={<NotSure className='welcome-item__icon' />}
            />
        </div>
    </>
);

Welcome.propTypes = {
    switchPlatform: PropTypes.func,
    toggleAccountTypesModal: PropTypes.func,
    toggleWelcomeModal: PropTypes.func,
};

export default Welcome;
