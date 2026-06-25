function predictStudent() {

    let attendance =
    parseFloat(document.getElementById("attendance").value);

    let assignment =
    parseFloat(document.getElementById("assignment").value);

    let test =
    parseFloat(document.getElementById("test").value);

    let average =
    (attendance + assignment + test) / 3;

    let result =
    document.getElementById("result");

    if(average >= 60){

        result.innerHTML=
        `
        <p class="success">
        Prediction: PASS
        <br>
        Status: NOT AT RISK
        </p>
        `;
    }

    else{

        result.innerHTML=
        `
        <p class="danger">
        Prediction: FAIL
        <br>
        Status: AT RISK
        </p>
        `;
    }
}
