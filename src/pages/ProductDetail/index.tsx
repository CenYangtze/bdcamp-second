import React from 'react';
import { useForm } from 'react-hook-form';

const ProductDetail = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // Handle successful form submission.
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('spec', { required: true })} />
            {errors.spec && <span>This field is required</span>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductDetail;