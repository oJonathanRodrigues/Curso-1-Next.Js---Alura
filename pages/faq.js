import Head from 'next/head';
import Link from '../src/components/Link'

export async function getStaticProps() { // roda somente uma vez na montagem da página statica.. getServerSideProps.. carrega do servidor toda vez que carrega a página
    const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
        .then((respostaDoServidor) =>{
            return respostaDoServidor.json()
        })
        .then((resposta) => {
            return resposta
        })

    return {
        props: {
            faq
        }
    }
}

export default function FAQPage({faq}){
   /* const [faq, setFaq] = useState([])
    useEffect(() => {
       
    }) */

 
    return(
        <div>
            <Head>
                <title>Home - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Página de perguntas FAQ</h1>
            <Link href="/">
                Ir para HomePage
            </Link>
            <ul>
                {faq.map(({answer, question}) =>(
                    <li key={question}>
                        <article>
                        <h1>{question}</h1>
                        <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    )
}
