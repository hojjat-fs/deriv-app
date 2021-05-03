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
    account_types_onboarding_item,
    history,
    is_account_types_modal_visible,
    toggleAccountTypesModal,
    toggleWelcomeModal,
}) => {
    const closeModal = () => {
        toggleAccountTypesModal(false);
    };

    const handleBackButton = () => {
        toggleAccountTypesModal(false, '');
        toggleWelcomeModal(true);
    };

    const handleSyntheticsClick = () => {
        history.push(routes.trade);
        if (account_types_onboarding_item === 'multipliers') {
            // @TODO: After redirect :
            // 1) default asset: volatility 75 index
            // 2) trade type: multipliers
        } else if (account_types_onboarding_item === 'digital-options') {
            // @TODO: After redirect :
            // 1) in trade container: default asset: AUD/JPY
            // 2) in trade container: trade type: multipliers
        }
        closeModal();
    };

    const handleFinancialClick = () => {
        history.push(routes.trade);
        if (account_types_onboarding_item === 'multipliers') {
            // @TODO: After redirect :
            // 1) default asset: volatility 75 index
            // 2) trade type: multipliers
        } else if (account_types_onboarding_item === 'digital-options') {
            history.push(routes.trade);
            // @TODO: After redirect :
            // 1) in trade container: default asset: AUD/JPY
            // 2) in trade container: trade type: rise/fall
        }
        closeModal();
    };

    return (
        <Modal
            width='904px'
            className='account-types'
            is_open={is_account_types_modal_visible}
            toggleModal={closeModal}
            has_close_icon={false}
        >
            <ThemedScrollbars is_bypassed={isMobile()} autohide={false} height={'calc(100vh - 84px'}>
                <Div100vhContainer height_offset='120px' is_disabled={isDesktop()} className='account-types__container'>
                    <div className='account-types'>
                        <div className='account-types__header'>
                            <button className='account-types__header-back' onClick={handleBackButton}>
                                <Icon icon='IcArrowLeft' />
                            </button>
                            <Text as='h2' size='m' weight='bold' align='center' className='account-types__header-title'>
                                {localize('Please choose your account')}
                            </Text>
                        </div>
                        <div className='account-types__body'>
                            <AccountCard
                                title={localize('Synthetics')}
                                description={localize(
                                    'Get trading with Synthetics - the simulated market that’s always open'
                                )}
                                button_text={localize('Add demo account')}
                                icon={<SyntheticsIcon className='account-types__box-icon' />}
                                buttonOnClick={handleSyntheticsClick}
                            />
                            <AccountCard
                                title={localize('Financial')}
                                description={localize('Get trading forex, commodities, and cryptocurrencies.')}
                                button_text={localize('Add demo account')}
                                buttonOnClick={handleFinancialClick}
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
    account_types_onboarding_item: PropTypes.string,
    history: PropTypes.any,
    is_account_types_modal_visible: PropTypes.bool,
    toggleAccountTypesModal: PropTypes.func,
    toggleWelcomeModal: PropTypes.func,
};

export default withRouter(
    connect(({ ui }) => ({
        account_types_onboarding_item: ui.account_types_onboarding_item,
        is_account_types_modal_visible: ui.is_account_types_modal_visible,
        toggleAccountTypesModal: ui.toggleAccountTypesModal,
        toggleWelcomeModal: ui.toggleWelcomeModal,
    }))(AccountTypesModal)
);
