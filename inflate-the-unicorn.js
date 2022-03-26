  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

// getting the ID's . adding the click event listener to call the respective functions
let unicorn1 = document.getElementById('unicornOne');
unicorn1.addEventListener('click', unicornOneCount);

let unicorn2 = document.getElementById('unicornTwo');
unicorn2.addEventListener('click', unicornTwoCount);

let unicorn3 = document.getElementById('unicornThree')
unicorn3.addEventListener('click', unicornThreeCount)

// playing around with audio. when function is called when clicked, plays the sound.
function play() {
  let audio = new Audio("horsey.mp3")
  audio.play()
}
function playTwo() {
  let audio = new Audio("horsey2.wav")
  audio.play()
}
function playThree() {
  let audio = new Audio('horsey3.wav')
  audio.play()
}

// set the counter to 0, then with each click and call of the function it adds to the count
let counter1 = 0;
function unicornOneCount() {
  counter1++;
  unicornOne();
}

let counter2 = 0;
function unicornTwoCount() {
  counter2++;
  unicornTwo();
}

let counter3 = 0;
function unicornThreeCount() {
  counter3++;
  unicornThree();
}

// showing the conditionals. if clicked on, increase the  count thus changing the images.
function unicornOne() {
// let counter1 = 0;

  if (counter1 == 0) {
    unicorn1.src = "./images/unicorn-0.png"
    console.log(`You clicked on the horsie1 ${counter1} times`);
    play();
  } else if (counter1 == 1) {
    unicorn1.src = "./images/unicorn-1.png";
    console.log(`You clicked on the horsie1 ${counter1} times`);
    play();
  } else if (counter1 == 2) {
    unicorn1.src = "./images/unicorn-2.png";
    console.log(`You clicked on the horsie1 ${counter1} times`);
    play();
  } else if (counter1 == 3) {
    unicorn1.src = "./images/unicorn-3.png"
    console.log(`You clicked on the horsie1 ${counter1} times`);
    play();
  } else if (counter1 == 4) {
    console.log(`You clicked on the horsie1 ${counter1} times`);
    alert("Stop clicking on unicornOne!!")
    play()
    document.body.style.backgroundColor = "red"
  } else if (counter1 == 5) {
    console.log(`You clicked on the horsie1 ${counter1} times`);
    unicorn1.src = "./images/unicorn-0.png"
    document.body.style.backgroundColor = "lightpink"
    counter1 == 0;
    play()
  }
}

function unicornTwo() {
  if (counter2 == 0) {
    unicorn2.src = "./images/unicorn-0.png"
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
  } else if (counter2 == 1) {
    unicorn2.src = "./images/unicorn-1.png"
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
  } else if (counter2 == 2) {
    unicorn2.src = "./images/unicorn-2.png"
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
  } else if (counter2 == 3) {0
    unicorn2.src = "./images/unicorn-3.png"
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
  } else if (counter2 == 4) {
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
    alert("stop clicking on unicornTwo!!")
  } else if (counter2 == 5) {
    unicorn2.src = "./images/unicorn-0.png"
    console.log(`You clicked on the horsie2 ${counter2} times`);
    playTwo();
  }
}

function unicornThree() {
  if (counter3 == 0) {
    unicorn3.src = "./images/unicorn-0.png"
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
  } else if (counter3 == 1) {
    unicorn3.src = "./images/unicorn-1.png"
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
  } else if (counter3 == 2) {
    unicorn3.src = "./images/unicorn-2.png"
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
  } else if (counter3 == 3) {
    unicorn3.src = "./images/unicorn-3.png"
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
  } else if (counter3 == 4) {
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
    alert("Thank you for clicking on unicornThree")
  } else if (counter3 == 5) {
    unicorn3.src = "./images/unicorn-0.png"
    console.log(`You clicked on the horsie3 ${counter3} times`);
    playThree();
  }
}