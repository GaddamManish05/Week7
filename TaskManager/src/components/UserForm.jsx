import { useForm} from 'react-hook-form'
import {useState} from 'react'

function UserForm(){
    const {register,setError,handleSubmit,formState : {errors}} = useForm()
    const [users,setUsers] = useState([]);
    const submitForm = (obj) => {
        setError("dob",{
            type : "custom",
            message : "Year must be less than 2020"
        })
        setUsers([...users,obj])
    }
    return(
        <div>
            <form onSubmit = {handleSubmit(submitForm)}>
                <h1 className='text-3xl mb-4'>User Registration Form</h1>
                <div className='mb-3'>
                    <input type="text" {...register("first",{required : true,minLength:3,maxLength:6})}placeholder=" FirstUsername" className="border-2 px-8 py-2" />
                    {
                        errors.first?.type === "required" && <p className="text-gray-500">First Name is Required</p>
                    }
                    {
                        errors.first?.type === "minLength" && <p className="text-gray-500">MinLength is Required</p>
                    }
                    {
                        errors.first?.type === "maxLength" && <p className="text-gray-500">MaxLength is Required</p>
                    }
                </div>
                <div className='mb-3'>
                    <input type="text" {...register("Last",{required : true,minLength:3,maxLength:6})} placeholder="Last Name" className="border-2 px-8 py-2" />
                    {
                        errors.Last?.type === "required" && <p className="text-gray-500">Last Name is Required</p>
                    }
                    {
                        errors.Last?.type === "minLength" && <p className="text-gray-500">MinLength is Required</p>
                    }
                    {
                        errors.Last?.type === "maxLength" && <p className="text-gray-500">MaxLength is Required</p>
                    }
                </div>
                <div className='mb-3'>
                    < input type="email" {...register("email" , {required : true})} placeholder='Email' className='border-2 px-8 py-2'/>
                    {
                        errors.email?.type === "required" && <p className="text-gray-500">Email is Required</p>
                    }
                </div>
                <div className='mb-3'>
                    <input type="date"{...register("dob" , {required : true})}/>
                    {
                        errors.dob?.type === "required" && <p className="text-gray-500">Email is Required</p>
                    }
                    {
                        errors.dob?.type === "custom" && <p className="text-gray-500">{errors.dob.message}</p>
                    }
                </div>
                <button className='px-3 py-1 bg-blue-400 text-amber-200' type='submit'>Register</button>
            </form>
            {/* User Table */}
            <h1>List Of Users</h1>
            <div className='text-center bg-red-300 p-10 m-10'>
                <table>
                    <thead>
                        <tr className='flex'>
                            <th className='border-2 px-20'>First Name</th>
                            <th className='border-2 px-20'>Last Name</th>
                            <th className='border-2 px-20'>Email</th>
                            <th className='border-2 px-20'>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.filter((userObj) => new Date(userObj.dob).getFullYear() < 2020).map((userObj,index) => <tr key={index}><td>{userObj.first}</td><td>{userObj.Last}</td><td>{userObj.email}</td><td>{userObj.dob}</td></tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserForm