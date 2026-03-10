import { useForm } from "react-hook-form";

function FormDemo(){
    const {register,handleSubmit , formState : {errors}} = useForm()
// create a submit function
// submit function will receive form data as an argument
    const submitForm = (obj) => {
        console.log(obj)
    }
    return(
        <div className="">
            <form onSubmit= {handleSubmit(submitForm)}>
                <h1 className="mb-3 text-3xl">Form</h1>
                <div className="mb-3 t">
                    <input type="text" {...register("username",{required : true , minLength : 3})} placeholder="Username"className="border-2 px-8 py-2" />
                    {
                        errors.username?.type === "required" && <p className="text-gray-500">Username is Required</p>
                    }
                    {
                        errors.username?.type === "minLength" && <p className="text-gray-500">Minlength Should be 3</p>
                    }
                </div>
                <div className="mb-3">
                    <input type="email" {...register("email")} placeholder="email" className="border-2 mb-3 px-8 py-2" required/>
                </div>
                <button type="submit" className="bg-blue-400 text-lime-200 px-3 py-1">Login</button>
            </form>
        </div>
    )
}

export default FormDemo;