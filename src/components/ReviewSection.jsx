import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useFormContext } from './form.context';

const ReviewSection = () => {
    const { profile, social, setProfile, setSocial } = useFormContext();

    const navigate = useNavigate();
    console.log(social);

    return (
        <form
            className="animated"
            onSubmit={e => {
                e.preventDefault();
                alert('Done!');
                setProfile({});
                setSocial({});
                return navigate('/');
            }}
        >
            <h2>Review All Your Info</h2>
            <p>
                Your Name:<strong>{profile.name}</strong>
            </p>
            <p>
                Your Email:<strong>{profile.email}</strong>
            </p>
            <p>
                Your Twitter:<strong>{social.Twitter}</strong>
            </p>
            <p>
                Your Facebook:<strong>{social.Facebook}</strong>
            </p>
            <input type="submit" value="Submit All Data" />
        </form>
    );
};

export default ReviewSection;
