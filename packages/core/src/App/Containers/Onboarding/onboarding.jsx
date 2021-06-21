import React from 'react';
import Platforms from './platforms.jsx';
import AccountSignup from './account-signup.jsx';

const Onboarding = () => {
    const [step, setStep] = React.useState('signup');

    return (
        <>
            {step === 'signup' && <AccountSignup setStep={setStep} />}
            {step === 'platforms' && <Platforms />}
        </>
    );
};

export default Onboarding;
