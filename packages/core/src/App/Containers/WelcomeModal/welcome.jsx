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

const Welcome = props => {
    const {
        switchPlatform,
        toggleOnboardingAccountTypesModal,
        toggleWelcomeModal,
        standpoint,
        history,
        setOnboardingStatus,
        is_uk,
        openRealAccountSignup,
        is_synthetics_unavailable,
        is_eu_country,
    } = props;
    const handleTradeTypeClick = trade_type => {
        const should_show__synthetics_real_account = standpoint.iom && is_uk && trade_type === 'digital-options';
        const is_synthetics_unavailable_eu = is_synthetics_unavailable && is_eu_country;
        const should_show_account_type =
            !standpoint.svg && !should_show__synthetics_real_account && !is_synthetics_unavailable_eu;

        toggleWelcomeModal({ is_visible: false, should_persist: true });

        setOnboardingStatus({ trade_type, account_type: is_synthetics_unavailable_eu ? 'financial' : null });

        if (should_show_account_type) {
            toggleOnboardingAccountTypesModal(should_show_account_type);
        } else {
            history.push(routes.trade);
        }

        if (should_show__synthetics_real_account) {
            openRealAccountSignup(standpoint.gaming_company);
        }
    };

    return (
        <>
            <Text as='h2' weight='bold' align='center' color='prominent' className='welcome__title'>
                {localize('Where would you like to start?')}
            </Text>
            <div className='welcome__body'>
                <WelcomeItem
                    title={localize('CFDs')}
                    description={[
                        { text: 'Maximise returns ', bold: true },
                        { text: 'by ' },
                        { text: 'risking more ', bold: true },
                        { text: 'than you put in.' },
                    ]}
                    onClick={() => switchPlatform(routes.mt5)}
                    icon={<CFDs />}
                />
                <WelcomeItem
                    description={[
                        { text: 'Multiply returns ', bold: true },
                        { text: 'by ' },
                        { text: 'risking only ', bold: true },
                        { text: 'what you put in.' },
                    ]}
                    onClick={() => handleTradeTypeClick('multipliers')}
                    title={localize('Multipliers')}
                    icon={<Multipliers />}
                />
                <WelcomeItem
                    description={[
                        { text: 'Earn ' },
                        { text: 'fixed returns ', bold: true },
                        { text: 'by ' },
                        { text: 'risking only ', bold: true },
                        { text: 'what you put in.' },
                    ]}
                    onClick={() => handleTradeTypeClick('digital-options')}
                    title={localize('Digital Options')}
                    icon={<DigitalOptions />}
                />
                <WelcomeItem
                    description={[{ text: 'Let us introduce you to trading on Deriv. ' }]}
                    onClick={() => switchPlatform(routes.trade)}
                    title={localize('Not sure?')}
                    icon={<NotSure />}
                />
            </div>
        </>
    );
};

Welcome.propTypes = {
    switchPlatform: PropTypes.func,
    toggleOnboardingAccountTypesModal: PropTypes.func,
    toggleWelcomeModal: PropTypes.func,
    standpoint: PropTypes.object,
};

export default Welcome;
