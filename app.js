const btn = document.querySelector("button");
const newH3 = document.createElement("h3");

const getDadJoke = async () => {
  const config = { headers: { Accept: "application/json" } };
  const res = await axios.get("https://icanhazdadjoke.com/", config);
  let newJoke = res.data.joke;
  btn.after(newH3);
  newH3.innerText = newJoke;
};

btn.addEventListener("click", getDadJoke);
