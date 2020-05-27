import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Books() {
  return (
    <section className='books'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <h1>This is a book</h1>
      <CoverImage />
      <Title />
      <Author />
    </article>
  );
};

const CoverImage = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51cHCkvvKiL._SY498_BO1,204,203,200_.jpg'
      alt='donkey'
      width='200'
    />
  );
};

const Title = () => {
  return <h3>The Wonkey Donkey</h3>;
};

const Author = () => {
  return <p>by Craig Smith</p>;
};

ReactDOM.render(<Books />, document.getElementById("root"));
