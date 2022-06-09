window.onload = () => {
  main();
};

function main() {
  const bg = document.querySelector("#bg");
  const btn = document.querySelector(".btn");

  btn.addEventListener( 'click', function(){
  const color = colorGenerator();
  bg.style.backgroundColor = color;
  });

}

function colorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}
