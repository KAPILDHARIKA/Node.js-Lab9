function checkPrime(number) {

    var result = {}
    number = parseInt(number)

    if (Number.isInteger(number) && number >= 0 && number != undefined) {

        result["prime"] = ""
        result["notPrime"] = ""

    }

    if (number <= 1) {

        result.notPrime = number + " is NOT a prime number";
        return result
    }

    if (number == 2) {

        result.prime = number + " is a prime number"
        return result

    } else {

        for (var i = 2; i < number; i++) {

            if (number % i == 0) {

                result.notPrime = number + " is not a prime number"
                return result
            }
        }

        result.prime = number + " is a prime number"
        return result
    }
}




document.querySelector('button').addEventListener("click", (event) => {
    event.preventDefault();



    // hide containers by default
    // errorContainer.classList.add("hidden");
    // resultContainer.classList.add("hidden");

    // Values come from inputs as strings, no matter what :(
    const firstNumberValue = parseInt(document.getElementById("Primenumber").value);


    if (firstNumberValue === undefined || firstNumberValue === null || isNaN(firstNumberValue)) {

        document.getElementById("errortext").textContent = "Please enter a value!"
            // event.preventDefault();

    } else if (firstNumberValue < 0) {
        document.getElementById("errortext").textContent = "Please enter a positive value!"

    } else {
        const parsedFirstNumberValue = parseInt(firstNumberValue);
        let result = checkPrime(parsedFirstNumberValue);
        var list = document.getElementById("attempts");

        if (result.prime != undefined && result.prime != null && result.prime != "") {
            list.innerHTML += '<li><span class="is-prime"> ' + result.prime + '</span></li>'
        } else {
            list.innerHTML += '<li><span class="not-prime"> ' + result.notPrime + '</span></li>'
        }

        document.getElementById("Primenumber").value = ""
        document.getElementById("errortext").textContent = ""
    }



});