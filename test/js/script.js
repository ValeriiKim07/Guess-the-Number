      const input = document.querySelector("#input");
      const message = document.querySelector("#message");
      const go = document.querySelector('.GO');
      let compNumber = getRandomInt(1, 10);
    

      let counter = document.querySelector('.counter');
      let count = 0;

      const restart = document.querySelector('.restart')

      go.addEventListener("click", function () {
        let userNumber = Number(input.value);
        count++;
        countTries();
        if (isNaN(userNumber)) {
          message.innerHTML = "Not a number!!!!";
          message.classList.remove('_win');
          message.classList.remove('_try-again');
          message.classList.add('_isNAN');
        } else if (userNumber == compNumber) {
          message.innerHTML = "You win!";
          message.classList.remove('_try-again');
          message.classList.remove('_isNAN');
          message.classList.add('_win');
          this.disabled = true;
        } else if (userNumber > compNumber) {
          message.innerHTML = "Need less";
          message.classList.remove('_win');
          message.classList.remove('_isNAN');
          message.classList.add('_try-again');
        } else if (userNumber == '') {
          message.innerHTML = "Empty!!!";
          message.classList.remove('_win');
          message.classList.remove('_try-again');
          message.classList.add('_isNAN');
        } else {
          message.innerHTML = "Need more";
          message.classList.remove('_win');
          message.classList.remove('_isNAN');
          message.classList.add('_try-again');
        }
      });

    //   restart button
    restart.addEventListener('click', function() {
        compNumber = getRandomInt(1, 10);
        message.innerHTML = 'Input number from 1 to 10';
        input.value = '';
        counter.innerHTML = '';
        message.classList.remove('_try-again');
        message.classList.remove('_win');
        message.classList.remove('_isNAN');
        go.disabled = false;
        count = 0;
    });


    //   random num

      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min - 1) + min);
      };

    //   counter func

    function countTries() {
        if (count == 1) {
            counter.innerHTML = 'You used ' + count + ' try';
          } else {
            counter.innerHTML = 'You used ' + count + ' tries';
          }
    };