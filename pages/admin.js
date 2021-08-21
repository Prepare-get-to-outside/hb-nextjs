import axios from "axios"
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react"
import { Button } from "semantic-ui-react";

export default function Admin(){
    const router = useRouter(); 
    
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        axios.get('/api/isLogin')
        .then(res => {
            if(res.status === 200 && res.data.name){
                setIsLogin(true);
            }else{
                
                router.push("/login");
            }
        })
    })

    function logout () {
        axios.get('/api/logout')
        .then(res => {
            if(res.status === 200){
                router.push("/");
            }
        })
    }

    return (
        <>
            Admin 
            {isLogin && <Button onClick={logout}>Logout</Button>}
        </>
    )
}