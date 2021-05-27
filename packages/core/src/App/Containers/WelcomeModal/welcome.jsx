import React from 'react';
import PropTypes from 'prop-types';
import { routes } from '@deriv/shared';
import { Localize, localize } from '@deriv/translations';
import { Text } from '@deriv/components';
import CFDs from 'Assets/SvgComponents/onboarding/cfd.svg';
import Multipliers from 'Assets/SvgComponents/onboarding/multipliers.svg';
import DigitalOptions from 'Assets/SvgComponents/onboarding/digital-options.svg';
import NotSure from 'Assets/SvgComponents/onboarding/not-sure.svg';
import WelcomeItem from './welcome-item.jsx';

const Welcome = ({ switchPlatform }) => (
    <>
        <Text as='h2' weight='bold' align='center' color='prominent' className='welcome__title'>
            {localize('Where would you like to start?')}
        </Text>
        <div className='welcome__body'>
            <WelcomeItem
                title={localize('CFDs')}
                description={
                    <Localize
                        i18n_default_text='<0>Maximise returns </0> by <0>risking more</0> than you put in.'
                        components={[<Text key={0} weight='bold' as='strong' color='prominent' />]}
                    />
                }
                onClick={() => switchPlatform(routes.mt5)}
                icon={<CFDs />}
                options={['Forex', 'Synthetics', 'Stocks and indices', 'Cryptocurrencies', 'Commodities']}
            />
            <WelcomeItem
                description={
                    <Localize
                        i18n_default_text='<0>Multiply returns </0> by <0>risking only</0> what you put in.'
                        components={[<Text key={0} weight='bold' as='strong' color='prominent' />]}
                    />
                }
                onClick={() => switchPlatform(routes.trade)}
                title={localize('Multipliers')}
                icon={<Multipliers />}
                options={['Forex', 'Synthetics']}
            />
            <WelcomeItem
                description={
                    <Localize
                        i18n_default_text='Earn <0>fixed returns </0> by <0>risking only <0/>what you put in.'
                        components={[<Text key={0} weight='bold' as='strong' color='prominent' />]}
                    />
                }
                onClick={() => switchPlatform(routes.trade)}
                title={localize('Digital Options')}
                icon={<DigitalOptions />}
                options={['Forex', 'Synthetics', 'Stocks and indices', 'Commodities']}
            />
            <WelcomeItem
                description={
                    <Localize
                        i18n_default_text='Let us introduce you to trading on Deriv.'
                        components={[<Text key={0} weight='bold' as='strong' color='prominent' />]}
                    />
                }
                onClick={() => switchPlatform(routes.trade)}
                title={localize('Not sure?')}
                icon={<NotSure />}
            />
        </div>
    </>
);

Welcome.propTypes = {
    switchPlatform: PropTypes.func.isRequired,
    toggleWelcomeModal: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default Welcome;
