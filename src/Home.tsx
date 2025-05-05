import { useCookies } from "react-cookie";

const Home = (_props: object)=>{
    const [cookie, _setCookie, _removeCookie] = useCookies(['usuario']);

    return(
        <main>
            <h1>Seja bem vindo {cookie.usuario}!</h1>
            <a href="/">Sair</a>
        </main>
    );
}

export default Home;