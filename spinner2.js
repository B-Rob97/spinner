let frames = ['|', '/', '-', '\\'];
let currentFrameIndex = 0;

const animationInterval = setInterval(() => {
  process.stdout.write(`\r${frames[currentFrameIndex]}   `);
  currentFrameIndex = (currentFrameIndex + 1) % frames.length;
}, 200);

setTimeout(() => {
  clearInterval(animationInterval);
  process.stdout.write('\nAnimation stopped.\n');
}, 10000);

