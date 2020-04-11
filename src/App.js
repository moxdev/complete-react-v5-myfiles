const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Jimmy",
      animal: "Jackass",
      breed: "Donkey"
    }),
    React.createElement(Pet, {
      name: "Barnaby",
      animal: "Cat",
      breed: "Cartoon Cat"
    })
  );
};

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);