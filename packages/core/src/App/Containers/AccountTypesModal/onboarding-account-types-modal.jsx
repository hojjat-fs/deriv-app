import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Div100vhContainer, Modal, ThemedScrollbars, Text, Icon } from '@deriv/components';
import { isDesktop, isMobile, routes } from '@deriv/shared';
import { localize } from '@deriv/translations';
import { connect } from 'Stores/connect';
import SyntheticsIcon from 'Assets/SvgComponents/onboarding/synthetics.svg';
import FinancialIcon from 'Assets/SvgComponents/onboarding/financial.svg';
import 'Sass/app/modules/account-types-onboarding.scss';
import AccountCard from './onboarding-account-card.jsx';

const AccountTypesModal = ({
    history,
    is_onboarding_account_types_modal_visible,
    toggleOnboardingAccountTypesModal,
    toggleWelcomeModal,
    setOnboardingStatus,
    standpoint,
    openRealAccountSignup,
    is_uk,
}) => {
    const handleBackButton = () => {
        setOnboardingStatus({
            trade_type: null,
        });
        toggleOnboardingAccountTypesModal(false);
        toggleWelcomeModal(true);
    };

    const handleClick = account_type => {
        setOnboardingStatus({
            account_type,
        });
        history.push(routes.trade);
        toggleOnboardingAccountTypesModal(false);
    };

    const handleClickSynthetic = () => {
        handleClick('synthetics');

        if (is_uk) {
            openRealAccountSignup(standpoint.gaming_company);
        }
    };
    const handleClickFinancial = () => {
        handleClick('financial');
    };

    return (
        <Modal
            width='904px'
            className='account-types'
            is_open={is_onboarding_account_types_modal_visible}
            has_close_icon={false}
        >
            <ThemedScrollbars is_bypassed={isMobile()} autohide={false} height={'calc(100vh - 84px'}>
                <Div100vhContainer height_offset='120px' is_disabled={isDesktop()} className='account-types__container'>
                    <div className='account-types'>
                        <div className='account-types__header'>
                            <button className='account-types__header-back' onClick={handleBackButton}>
                                <Icon icon='IcArrowLeft' />
                            </button>
                            <Text
                                as='h2'
                                size={isMobile() ? 's' : 'm'}
                                weight='bold'
                                align='center'
                                className='account-types__header-title'
                            >
                                {localize('Please choose your account')}
                            </Text>
                        </div>
                        <div className='account-types__body'>
                            <AccountCard
                                title={localize('Synthetics')}
                                description={localize(
                                    'Get trading with Synthetics - the simulated market that’s always open'
                                )}
                                button_text={is_uk ? localize('Add real account') : localize('Add demo account')}
                                icon={<SyntheticsIcon className='account-types__box-icon' />}
                                buttonOnClick={handleClickSynthetic}
                            />
                            <AccountCard
                                title={localize('Financial')}
                                description={localize('Get trading forex, commodities, and cryptocurrencies.')}
                                button_text={localize('Add demo account')}
                                buttonOnClick={handleClickFinancial}
                                icon={<FinancialIcon className='account-types__box-icon' />}
                            />
                        </div>
                        <Text as='p' size='xxs' align='center' className='account-types__footer'>
                            {localize('You can switch between synthetics and financial account at any time.')}
                        </Text>
                    </div>
                </Div100vhContainer>
            </ThemedScrollbars>
        </Modal>
    );
};

AccountTypesModal.propTypes = {
    history: PropTypes.any,
    is_onboarding_account_types_modal_visible: PropTypes.bool,
    toggleOnboardingAccountTypesModal: PropTypes.func,
    toggleWelcomeModal: PropTypes.func,
    setOnboardingStatus: PropTypes.func,
};

export default withRouter(
    connect(({ ui, client }) => ({
        is_onboarding_account_types_modal_visible: ui.is_onboarding_account_types_modal_visible,
        toggleOnboardingAccountTypesModal: ui.toggleOnboardingAccountTypesModal,
        toggleWelcomeModal: ui.toggleWelcomeModal,
        setOnboardingStatus: ui.setOnboardingStatus,
        is_uk: client.is_uk,
        openRealAccountSignup: ui.openRealAccountSignup,
        standpoint: client.standpoint,
    }))(AccountTypesModal)
);
