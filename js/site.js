function fizzBuzz() {
  let fizz = document.getElementById("fizzNum").value;
  let buzz = document.getElementById("buzzNum").value;

  //parse the numbers
  fizz = parseInt(fizz);
  buzz = parseInt(buzz);

  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  //parse the numbers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
    let numbersArray = generateNumbers(startValue, endValue);
    displayValues(numbersArray);
  } else {
    Swal.fire({
      backdrop: false,
      title: "Numbers Not Found.",
      text: "Please Enter Numbers",
    });
  }

  if (startValue > endValue) {
    Swal.fire({
      backdrop: false,
      title: "MUST BE: START < END.",
      text: "START must be a lower value than END",
    });
    // let numbersArray = generateNumbersBackwards(endValue, startValue);
    // displayValuesBackwards(numbersArray);
    
  }

  function generateNumbers(start, end) {
    let numbersArray = [];

    for (let i = start; i <= end; i++) {
      numbersArray.push(i);
    }
    return numbersArray;
  }

  // function generateNumbersBackwards(end, start) {
  //   let numbersArray = [];

  //   for (let i = end; i >= start; i--) {
  //     numbersArray.push(i);
  //   }
  //   return numbersArray;
  // }

  //display the list of numbers
  //View Function
  //Bold and red all even numbers
  //Make all odd numbers blue

  //reference #results
  function displayValues(numArray) {
    //<div class="col"></div>
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let index = 0; index < numArray.length; index++) {
      let tagDiv = document.createElement("div"); //create div tag

      tagDiv.innerHTML = numArray[index]; //get the value of the current array index

      tagDiv.classList.add("col"); //add class(es)

      if (numArray[index] % fizz == 0 && numArray[index] % buzz == 0) {
        tagDiv.classList.add("fizzbuzz");
        tagDiv.innerHTML = "FIZZBUZZ";
      }

      if (numArray[index] % fizz == 0 && numArray[index] % buzz !== 0) {
        tagDiv.classList.add("fizz");
        tagDiv.innerHTML = "FIZZ";
      }

      if (numArray[index] % fizz !== 0 && numArray[index] % buzz == 0) {
        tagDiv.classList.add("buzz");
        tagDiv.innerHTML = "BUZZ";
      }

      if (numArray[index] % fizz !== 0 && numArray[index] % buzz !== 0) {
        if (numArray[index] % 2 == 0) {
          tagDiv.classList.add("resultStyle");
        } else {
          tagDiv.classList.add("resultStyleLight");
        }
      }

      

      results.appendChild(tagDiv); //append to the page
    }
  }

  function displayValuesBackwards(numArray) {
    //<div class="col"></div>
    let results = document.getElementById("results");
    results.innerHTML = "";
    for (let index = numArray-1; index >= 1; index--) {
      let tagDiv = document.createElement("div"); //create div tag

      tagDiv.innerHTML = numArray[index]; //get the value of the current array index

      tagDiv.classList.add("col"); //add class(es)

      if (numArray[index] % fizz == 0 && numArray[index] % buzz == 0) {
        tagDiv.classList.add("fizzbuzz");
        tagDiv.innerHTML = "FIZZBUZZ";
      }

      if (numArray[index] % fizz == 0 && numArray[index] % buzz !== 0) {
        tagDiv.classList.add("fizz");
        tagDiv.innerHTML = "FIZZ";
      }

      if (numArray[index] % fizz !== 0 && numArray[index] % buzz == 0) {
        tagDiv.classList.add("buzz");
        tagDiv.innerHTML = "BUZZ";
      }

      if (numArray[index] % fizz !== 0 && numArray[index] % buzz !== 0) {
        if (numArray[index] % 2 == 0) {
          tagDiv.classList.add("resultStyle");
        } else {
          tagDiv.classList.add("resultStyleLight");
        }
      }

      results.appendChild(tagDiv); //append to the page
    }
  }




}
