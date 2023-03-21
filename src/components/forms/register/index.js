import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './schema';

function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><label htmlFor="firstName">First Name: </label></p>
                <input {...register('firstName')} />
                <p className={'error'}>{errors.firstName?.message}</p>

                <p><label htmlFor="lastName">Last Name: </label></p>
                <input {...register('lastName')} />
                <p className={'error'}>{errors.lastName?.message}</p>

                <p><label htmlFor="password">Password: </label></p>
                <input {...register('password')} />
                <p className={'error'}>{errors.password?.message}</p>

                <p><label htmlFor="age">Age: </label></p>
                <input {...register('age')} />
                <p className={'error'}>{errors.age?.message}</p>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;