import { Bottomwarning } from "../components/Bottomwarning"
import { Buttoncom } from "../components/ButtonCom"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { Subheader } from "../components/Subheader"


export const Signup=()=>{
        return <div className=" bg-slate-300  h-screen flex justify-center" >
            <div className="flex flex-col justify-center ">
                <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Header label={"Sign up"}></Header>
                    <Subheader label={"Create an account"}></Subheader>
                    <InputBox label={"FirstName"} placeholder={"Enter your FirstName"}></InputBox>
                    <InputBox label={"LastName"} placeholder={"Enter your Lastname"}></InputBox>
                    <InputBox label={"Email"} placeholder={"Enter your Email"}></InputBox>
                    <InputBox label={"Password"} placeholder={"Enter password"}></InputBox>
                    <Buttoncom label={"Signup"} ></Buttoncom>
                    <Bottomwarning label={"Already have an account?"} label2={"Signin"} to={'/signin'}></Bottomwarning>
                </div>
            </div>
        </div>
                
                
}