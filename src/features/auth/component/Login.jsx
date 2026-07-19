import { useDispatch, useSelector } from 'react-redux'

import { useForm } from 'react-hook-form'
import { signup } from '../authSlice'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        dispatch(signup(data))
        navigate("/")
    }

    return (
        <div className="bg-gray-900 flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                    Sign in to your account
                </h2>
            </div>


            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    <div>
                        <label className="block text-sm/6 font-medium text-gray-100">
                            User name
                        </label>

                        <div className="mt-2">
                            <input
                                type="text"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-white/10"
                                {...register("username", {
                                    required: "Username is required"
                                })}
                            />

                            {errors.username && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.username.message}
                                </p>
                            )}
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm/6 font-medium text-gray-100">
                            Email address
                        </label>

                        <div className="mt-2">
                            <input
                                type="email"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-white/10"
                                {...register("email", {
                                    required: "Email is required"
                                })}
                            />

                            {errors.email && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                    </div>


                    <div>
                        <label className="block text-sm/6 font-medium text-gray-100">
                            Password
                        </label>

                        <div className="mt-2">
                            <input
                                type="password"
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-white outline-white/10"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 characters"
                                    }
                                })}
                            />

                            {errors.password && (
                                <p className="text-red-400 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                    </div>


                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
                        >
                            Sign in
                        </button>
                    </div>

                </form>


                <p className="mt-10 text-center text-sm text-gray-400">
                    Not a member?{' '}
                    <a href="#" className="font-semibold text-indigo-400">
                        Start a 14 day free trial
                    </a>
                </p>

            </div>
        </div>
    )
}

export default Login