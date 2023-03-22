// javascriptde bir kod çalıştırmak için öncelikle yazmamız gereken kod bloğu.

window.onload = function () {

    let selectedOperator = "";
    let leftPart = "";
    let rightPart = "";

    let numbers = document.querySelectorAll(".num");
    for (let i = 0; i < numbers.length; i++) {

        numbers[i].addEventListener("click", function () {

            //innerHTML - html içerisinden çek elementi demektir. 
            document.getElementById("resultInner").innerHTML += this.value;

            if (selectedOperator == "") {
                leftPart += this.value;
                // alert(leftPart);
            }

            else if (selectedOperator != "") {
                rightPart += this.value;
                // alert(rightPart);
            }

        }, false);
    }


    let operators = document.querySelectorAll(".operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function () {
            selectedOperator = this.value;

            document.getElementById("resultInner").innerHTML += this.value;



        }, false);
    }
    //  getelementByid - istediğimiz elementi çekmemizi sağlar. addEventListener("click", function()) ise tıklama efektini vermeyi sağlar.
    document.getElementById("equation").addEventListener("click", function () {

        if (selectedOperator == "+") {
            document.getElementById("resultInner").innerHTML = parseInt(leftPart) + parseInt(rightPart);
        }

        else if (selectedOperator == "-") {
            document.getElementById("resultInner").innerHTML = parseInt(leftPart) - parseInt(rightPart);

        }

        else if (selectedOperator == "*") {
            document.getElementById("resultInner").innerHTML = parseInt(leftPart) * parseInt(rightPart);

        }

        else if (selectedOperator == "/") {
            document.getElementById("resultInner").innerHTML = parseInt(leftPart) / parseInt(rightPart);

        }

        else if (selectedOperator == "%") {
            document.getElementById("resultInner").innerHTML = parseInt(leftPart) % parseInt(rightPart);

        }


    }, false);

    document.getElementById("delete").addEventListener("click", function () {

        selectedOperator = "";
        leftPart = "";
        rightPart = "";
        document.getElementById("resultInner").innerHTML = "";

    }, false);

};