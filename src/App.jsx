import { useState } from "react";
import { languages as posts } from "./components/languages";

function App() {
  //array di categorie
  const categories = posts.map((lang) => lang.title);

  //setto la prima categoria come "attiva"
  const activeCategory = categories[0];

  //trovo il post corrispondente da visualizzare come primo post
  const defultPost = posts.find((post) => post.title === activeCategory);

  //setto uno stato che traccia il post attivo
  const [activePost, setActivePost] = useState(defultPost);

  //gestisco il cambio di categoria
  const hadleCategoryChange = (category) => {
    const newPost = posts.find((post) => post.title === category);
    setActivePost(newPost);
  };

  return (
    <>
      <header>
        <h1>Learn Web Development</h1>
      </header>
      <main>
        <section className="conteiner-button">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => hadleCategoryChange(category)}
              className="btn"
            >
              {category}
            </button>
          ))}
        </section>

        <section>
          <div className="container-descrition">
            <h4 className="title">{activePost.title}</h4>
            <p className="descrition">{activePost.description}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
