import React from 'react';
import { withRouter } from 'react-router';
import { Modal, ThemedScrollbars } from '@deriv/components';
import { connect } from 'Stores/connect';
import Welcome from './welcome.jsx';

const WelcomeModal = props => {
    const {
        toggleWelcomeModal,
        history,
        toggleOnboardingAccountTypesModal,
        standpoint,
        setOnboardingStatus,
        is_uk,
        openRealAccountSignup,
        is_eu_country,
        is_synthetics_unavailable,
    } = props;
    const switchPlatform = React.useCallback(
        route => {
            toggleWelcomeModal({ is_visible: false, should_persist: true });
            history.push(route);
        },
        [toggleWelcomeModal, history]
    );

    return (
        <Modal width='760px' className='welcome' is_open={true} has_close_icon={false} has_outer_content={true}>
            <ThemedScrollbars height={700}>
                <Welcome
                    switchPlatform={switchPlatform}
                    toggleOnboardingAccountTypesModal={toggleOnboardingAccountTypesModal}
                    toggleWelcomeModal={toggleWelcomeModal}
                    standpoint={standpoint}
                    history={history}
                    setOnboardingStatus={setOnboardingStatus}
                    is_uk={is_uk}
                    openRealAccountSignup={openRealAccountSignup}
                    is_eu_country={is_eu_country}
                    is_synthetics_unavailable={is_synthetics_unavailable}
                />
            </ThemedScrollbars>
        </Modal>
    );
};

export default withRouter(
    connect(({ ui, client }) => ({
        toggleWelcomeModal: ui.toggleWelcomeModal,
        toggleOnboardingAccountTypesModal: ui.toggleOnboardingAccountTypesModal,
        standpoint: client.standpoint,
        setOnboardingStatus: ui.setOnboardingStatus,
        is_uk: client.is_uk,
        is_synthetics_unavailable: client.is_synthetics_unavailable,
        is_eu_country: client.is_eu_country,
        openRealAccountSignup: ui.openRealAccountSignup,
    }))(WelcomeModal)
);
