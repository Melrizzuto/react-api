import { useState } from "react";
import Card from "./Card";
import FormContainer from "./FormContainer";
import { posts, tags } from "../data/posts";

function Main() {
    const [postsList, setPostsList] = useState(posts);
    const [tagsSelected, setTagsSelected] = useState([]);
    const tagList = tags(); // Ottieni la lista dei tag

    // Funzione per aggiungere un post
    const handleAddPost = (newPost) => {
        setPostsList([...postsList, newPost]);
    };

    // Funzione per eliminare un post tramite id
    const handleDeletePost = (id) => {
        const updatedPosts = postsList.filter((post) => post.id !== id);
        setPostsList(updatedPosts);
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