function clock(n, isCountingUp, callback) {
    let i = isCountingUp ? 0 : n;
    let interval = setInterval(() => {
      if (isCountingUp && i === n) {
        clearInterval(interval);
        callback("Đếm xuôi đến " + n);
      } else if (!isCountingUp && i === 0) {
        clearInterval(interval);
        callback("Đếm ngược đến 0");
      } else {
        callback(i);
        if (isCountingUp) {
          i++;
        } else {
          i--;
        }
      }
    }, 1000);
  }
  
  function countDown(n) {
    clock(n, false, (i) => console.log(`Đang đếm ngược: ${i}`));
  }
  
  function countUp(n) {
    clock(n, true, (i) => console.log(`Đang đếm lên: ${i}`));
  }
  
  countDown(10);
  countUp(10);