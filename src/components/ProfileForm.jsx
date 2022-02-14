import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useFormContext } from './form.context';

const ProfileForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { profile, setProfile } = useFormContext();

    const onSubmit = data => {
        setProfile(data);
        navigate('/social');
    };

    return (
        <form className="animated" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Tell us about yourself</h2>
            <input
                type="text"
                name="name"
                defaultValue={profile.name}
                placeholder="What's your name?"
                {...register('name', { required: true })}
            />
            {errors.name && <p>Name is required.</p>}
            <input
                type="email"
                name="email"
                defaultValue={profile.email}
                placeholder="What's your email?"
                {...register('email', {
                    required: true,
                    pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
                })}
            />
            {errors.email && <p>A valid email is required.</p>}

            <input type="submit" value="Next" />
        </form>
    );
};

export default ProfileForm;
