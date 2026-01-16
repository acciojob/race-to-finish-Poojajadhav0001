window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`const promises = [];

    // Create 5 promises with random resolve times
    for (let i = 1; i <= 5; i++) {
      const promise = new Promise((resolve) => {
        // Random time between 1 and 5 seconds
        const randomTime = Math.floor(Math.random() * 5 + 1) * 1000;

        setTimeout(() => {
          resolve(`🏁 Promise ${i} finished in ${randomTime / 1000} seconds`);
        }, randomTime);
      });

      promises.push(promise);
    }

    // Use Promise.any to get the first resolved promise
    Promise.any(promises).then((result) => {
      const outputDiv = document.getElementById("output");
      outputDiv.textContent = result;
    });
