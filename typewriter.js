const sentence = "hello there from lighthouse labs\n";

const typeWriter = function (sen) {
  let delay = 0;
  for (const char of sen) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay)
    delay += 50;
  }
}

typeWriter(sentence);