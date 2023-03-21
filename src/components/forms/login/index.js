import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {schema} from './schema';

function LoginForm() {
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
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <p><label htmlFor="userName">First Name: </label></p>
                <input {...register('userName')} />
                <p className={'error'}>{errors.userName?.message}</p>

                <p><label htmlFor="password">Password: </label></p>
                <input {...register('password')} />
                <p className={'error'}>{errors.password?.message}</p>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;