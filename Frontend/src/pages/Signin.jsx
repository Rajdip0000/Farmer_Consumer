import { Bottomwarning } from "../components/Bottomwarning"
import { Buttoncom } from "../components/ButtonCom"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { Subheader } from "../components/Subheader"


export const Signin=()=>{
    return <div className=" bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center ">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Header label={"Sign in"}></Header>
                <Subheader label={"Welcome back"}></Subheader>
                <InputBox label={"Email"} placeholder={"Enter your Email"}></InputBox>
                <InputBox label={"Password"} placeholder={"Enter password"}></InputBox>
                <Buttoncom label={"Signin"} ></Buttoncom>
                <Bottomwarning label={"Don't have an account?"} label2={"Signup"} to={'/signup'}></Bottomwarning>
            </div>
        </div>
    </div>
}