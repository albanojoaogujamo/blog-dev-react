import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { useEffect } from "react";



function Sobre(){

    useEffect(() => {
    document.title = "Blog Dev - Sobre";
}, []);

    return(
        <>
        <Header />
        <h2>Sobre mim</h2>
        <p>Sou Albano João Gujamo, mas prefiro Júnior. Sou estudante de Engenharia Informática em Moçambique e este blog nasceu durante as férias, quando decidi dedicar-me totalmente a aprender desenvolvimento web full stack. Comecei do zero, estudando de forma autodidata e documentando cada etapa da minha evolução.</p>
        
        <p>Essa jornada teve início ainda no segundo ano da faculdade, na disciplina de Prática Técnico-Profissional, com o docente Armando Correia Júnior. Naquela altura, eu reproduzia código sem compreender verdadeiramente o que estava a fazer. Com o tempo, percebi que aprender de forma consciente era muito mais desafiante — e também muito mais recompensador. A paixão e o entusiasmo que o Armando demonstrava pela área inspiraram-me a seguir o mesmo caminho.</p>
        
        <p>Uma conversa com ele marcou profundamente a minha forma de aprender. Ao desabafar sobre a frustração de tentar desenvolver projetos que considerava "acima do meu nível", ouvi uma resposta que nunca mais esqueci:</p>
        
        <blockquote>"O teu nível é psicológico. A maior barreira está na tua própria mente, e a única forma de crescer é desafiar-te constantemente."</blockquote>
        
        <p>Esse conselho tornou-se um dos pilares da minha aprendizagem. Mais tarde, pedi-lhe orientação sobre o caminho a seguir como developer júnior. Entre os vários conselhos que recebi, um destacou-se: consistência vale mais do que acumular teoria. Construir projetos reais, com atenção aos detalhes e bem documentados, gera muito mais evolução do que tentar aprender tudo ao mesmo tempo. É essa filosofia que orienta este blog.</p>
        
        <p>Este Blog Dev é o registo dessa caminhada. Aqui partilho conquistas, dificuldades, erros, soluções, bugs que me fizeram perder horas e aqueles que consegui resolver depois de muita persistência. O objetivo é documentar o meu crescimento como desenvolvedor, reunir os projetos que construo e, quem sabe, ajudar outras pessoas que estejam a percorrer um caminho semelhante.</p>
        
        <h2>Vamos conversar? </h2>
        <p>Se tiveres interesse em trabalhar comigo, colaborar num projeto ou simplesmente trocar ideias sobre tecnologia, fica à vontade para entrar em contacto:</p>
        <p>E-mail: albanojoaogujamo@gmail.com</p>
        <p>GitHub: </p>
        <p></p>
        
        <Footer />
        </>
    )
}

export default Sobre