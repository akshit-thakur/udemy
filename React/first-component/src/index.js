import React from "react";
import ReactDom from "react-dom";

function People() {
  const friends = [
    { name: "Akshit", job: "Developer", age: 22, company: "Microsoft" },
    { name: "Abhijeet", job: "Designer", age: 22, company: "Adobe" },
    { name: "Aadhar", job: "Analyst", age: 22, company: "Google" },
  ];
  return (
    <section>
      <Person person={friends[0]}>
        <h4>Some More Info</h4>
        <p>Gibberish</p>
      </Person>
      <Person person={friends[1]} />
      <Person person={friends[2]} />
    </section>
  );
}

const Person = (props) => {
  const { name, job, age, company } = props.person;
  const { children } = props;
  return (
    <article>
      <h1>{name}</h1>
      {children}
      <p>{job}</p>
      <p>{age}</p>
      <p>{company}</p>
      <hr />
    </article>
  );
};

ReactDom.render(<People />, document.querySelector("#root"));

// import "./index.css";

// function Books() {
//   return (
//     <section className="books">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <CoverImage />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const CoverImage = () => {
//   return (
//     <img
//       src="http://covers.booktopia.com.au/big/9781780228228/gone-girl.jpg"
//       height="350px"
//       alt="Gone Girl"
//     />
//   );
// };

// const Title = () => <h2>Gone Girl</h2>;
// const Author = () => <h4>Gillian Flynn</h4>;

// ReactDom.render(<Books />, document.getElementById("root"));
