import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";
import { Routes, Route } from 'react-router-dom';
import Sobre from './Sobre';
import { useState } from "react";
import { useEffect } from 'react';

function App() {

  const [posts, setPosts] = useState(() =>{
    const salvos = localStorage.getItem("posts");
    return salvos ? JSON.parse(salvos) : [
    {titulo: "Meu primeiro Post Sobre React", texto: "Eis o meu primeiro post sobre React.", tag: "React"},
    {titulo: "Meu primeiro Post Sobre API Rest", texto: "Eis o meu primeiro post sobre APIs Rest", tag: "Backend"},
    {titulo: "Meu primeiro Post Sobre React", texto: "Eis os meus primeiros passos no react", tag: "React"},
  ];
})

  const [titulo, setTitulo] = useState("")
  const [texto, setTexto] = useState("")
  const [tag, setTag] = useState("")

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
   <>
      <Header />
      <input 
       type="text"
       value={titulo}
       onChange={(e) => setTitulo(e.target.value)}
       placeholder="Titulo do Post"
      />
      <input type="text"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
      placeholder="Texto do post" 
      />

      <input type="text"
      value={tag}
      onChange={(e) => setTag(e.target.value)}
      placeholder="Tag" 
      />

      <button onClick={() => {
        const novoPost = { titulo: titulo, texto: texto, tag: tag};
      setPosts([...posts, novoPost]);
      setTitulo("");
      setTexto("");
      setTag("");
      }}>
        Adicionar Post
        </button>
      
      <Routes>
        <Route path="/" element={ 
            <main>
             {posts.map((post) =>(
              <PostCard titulo = {post.titulo} texto ={post.texto} tag ={post.tag} />
              ))}
            </main>
          } /> 
          ++
          <Route path="/Sobre" element={<Sobre />} />
      </Routes>
      
      <Footer />
    </>
  )
}

export default App