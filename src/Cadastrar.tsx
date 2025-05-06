import { useState } from "react";
import routes from "./api/routes";
import { useNavigate } from "react-router-dom";

const Cadastrar = (_props: object) => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [failMsg, setFailMsg] = useState('');

    async function handleSubmit(event: React.MouseEvent){
        event.preventDefault();

        const cadastrarRequest = await fetch(routes.cadastrar, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                senha: senha
            })
        });

        const response = await cadastrarRequest.json();

        if (response.success){
            navigate('/');
        }else{
            setFailMsg(response.msg);
        }
    }

    return (
        <>
            <form>
                <input type="text" onChange={(e) => setNome(e.target.value)} />
                <input type="password" onChange={(e) => setSenha(e.target.value)} />
                <button type="submit" onClick={(e) => handleSubmit(e)}>Cadastrar</button>
            </form>
            <div>{failMsg}</div>
        </>
    );
};

export default Cadastrar;