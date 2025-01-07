import { useState, useEffect } from "react";
import Card from "./Card";
import FormContainer from "./FormContainer";
import axios from "axios";

function Main() {
    const [postsList, setPostsList] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const tagList = [];

    // Recupero i posts dal mio server con la mia API 
    useEffect(() => {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPostsList(res.data.data);
                console.log(res.data.data)
            })
            .catch(console.error);
    }, []);
    // Funzione per aggiungere un post
    const handleAddPost = (newPost) => {
        setPostsList([...postsList, newPost]);
    };

    // Funzione per eliminare un post tramite id
    const handleDeletePost = (id) => {
        axios.delete(`http://localhost:3000/posts/${id}`)
            .then(() => {
                const updatedPosts = postsList.filter((post) => post.id !== id);
                setPostsList(updatedPosts);
            })
            .catch((err) => {
                console.error("Failed to delete post", err);
            });
    };

    // Funzione per gestire i tag di un singolo post
    const handleTags = (tag) => {
        setTagsSelected((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    return (
        <main className="container d-flex flex-wrap justify-content-center p-4 mt-4">
            {/* Renderizza i post pubblicati */}
            {postsList
                .filter((post) => post.published)
                .map((post) => (
                    <Card
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                        published={post.published}
                        onDelete={handleDeletePost}
                    />
                ))}

            {/* Componente FormContainer per gestire il form */}
            <FormContainer
                onAddPost={handleAddPost}
                posts={postsList}
                onTags={handleTags}
                tagsSelected={tagsSelected}
                setTagsSelected={setTagsSelected}
                tagList={tagList}
            />
        </main>
    );
}

export default Main;