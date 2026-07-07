import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import PostCard from "./PostCard";

function App() {
  const posts =[
    {titulo: "Meu primeiro Post Sobre React", texto: "Eis o meu primeiro post sobre React.", tag: "React"},
    {titulo: "Meu primeiro Post Sobre API Rest", texto: "Eis o meu primeiro post sobre APIs Rest", tag: "Backend"},
    {titulo: "Meu primeiro Post Sobre React", texto: "Eis os meus primeiros passos no react", tag: "React"},
  ]
  return (
    <>
 {posts.map((post) =>(
  <PostCard titulo = {post.titulo} texto ={post.texto} tag ={post.tag} />
 ))}
 </>
  )
}

export default App