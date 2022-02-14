import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import ProfileForm from './ProfileForm';
import ReviewSection from './ReviewSection';
import SocialForm from './SocialForm';
import Header from './Header';

const SignUpForm = () => {
    const location = useLocation();

    return (
        <div className="signup-form">
            {/* Header */}
            <Header />

            {/* Forms */}
            <Routes localtion={location} key={location.pathname}>
                <Route path="/" element={<ProfileForm />} />
                <Route path="/social" element={<SocialForm />} />
                <Route path="/review" element={<ReviewSection />} />
            </Routes>
        </div>
    );
};

export default SignUpForm;
