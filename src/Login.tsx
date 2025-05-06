import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import routes from "./api/routes";
import { useNavigate } from "react-router-dom";

const Login = (_props: object)=>{
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [loginFailMsg, setLoginFailMsg] = useState('');
    const [_cookies, setCookie, removeCookie] = useCookies(['usuario']);
    const navigate = useNavigate();

    useEffect(() => {
        removeCookie('usuario', { path: '/' });
    }, [])

    async function login(){
        const response = await fetch(routes.login, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha
            })
        })
        const res = await response.json();
        if(res.success){
            setCookie('usuario', nome, { path: '/' });
            navigate('/home');
        }else{
            setLoginFailMsg(res.msg);
        }
    }


    return (
        <>
            <div>
                <input type="text" onChange={(e) => {setNome(e.target.value)}} />
                <input type="password" onChange={(e) => {setSenha(e.target.value)}} />
                <button type="button" onClick={login}>Fazer Login</button>
            </div>
            <div>
                <a href="/cadastrar">Cadastrar</a>
            </div>
            <div>{loginFailMsg}</div>
        </>
    );
}

export default Login;