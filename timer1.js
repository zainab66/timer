const input = process.argv.slice(2)
  .filter(time => !isNaN(time))
  .filter(time => time >= 0);

input.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});