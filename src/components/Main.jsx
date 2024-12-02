import Button from "../button/button";

export default function Main() {
  return (
    <>
      <main>
        <section className="conteiner-button">
          <Button />
        </section>
        <section>
          <div className="container-descrition">
            <h4 className="title">Titolo</h4>
            <p className="descrition">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              nisi architecto voluptatem corporis magni repellendus quidem aut
              in consectetur, qui vel eius ducimus placeat recusandae nulla
              magnam accusantium culpa numquam?
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
