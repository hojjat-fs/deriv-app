import React from 'react';
import { withRouter } from 'react-router';
import { Modal, ThemedScrollbars } from '@deriv/components';
import { connect } from 'Stores/connect';
import Welcome from './welcome.jsx';

const WelcomeModal = ({ toggleWelcomeModal, history, toggleAccountTypesModal }) => {
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
                    toggleAccountTypesModal={toggleAccountTypesModal}
                    toggleWelcomeModal={toggleWelcomeModal}
                />
            </ThemedScrollbars>
        </Modal>
    );
};

export default withRouter(
    connect(({ ui }) => ({
        toggleWelcomeModal: ui.toggleWelcomeModal,
        toggleAccountTypesModal: ui.toggleAccountTypesModal,
    }))(WelcomeModal)
);
