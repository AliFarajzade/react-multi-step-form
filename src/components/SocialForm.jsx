import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useFormContext } from './form.context';

const SocialForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const { social, setSocial } = useFormContext();

    const onSubmit = data => {
        setSocial(data);
        navigate('/review');
    };
    return (
        <form className="animated" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>How can we find you on social media?</h2>
            <input
                type="text"
                name="Twitter"
                placeholder="What's your Twitter?"
                defaultValue={social.twitter}
                {...register('Twitter', { required: true })}
            />
            {errors.Twitter && <p>Twitter is required.</p>}
            <input
                type="email"
                name="Facebook"
                defaultValue={social.facebook}
                placeholder="What's your Facebook?"
                {...register('Facebook', {
                    required: true,
                })}
            />
            {errors.Facebook && <p>Facebook is required.</p>}

            <input type="submit" value="Next" />
        </form>
    );
};

export default SocialForm;
