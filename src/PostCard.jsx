import { useState } from "react"

function PostCard(props) {
    const [aberto, setAberto] = useState(false)
    return (
        <article className="Post-card">
            <h2>{props.titulo}</h2>
            {aberto && <p className="Content">{props.texto}</p>}
            <span className="tag">{props.tag}</span>
            <button className="toggle-btn"
            onClick={() => setAberto(!aberto)}>{aberto ? "Ler menos" : "Ler mais"}</button>
        </article>
    )
}

export default PostCard