fetch(
  "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json"
)
  .then((response) => response.json())
  .then((data) => {
    displayData(data);
  });

function displayData(data) {
  //Peanuts
  let tpPeanuts = 0;
  let tnPeanuts = 0;
  let fpPeanuts = 0;
  let fnPeanuts = 0;
  //Spaghetti
  let tpSpaghetti = 0;
  let tnSpaghetti = 0;
  let fpSpaghetti = 0;
  let fnSpaghetti = 0;
  //Weekend
  let tpWeekend = 0;
  let tnWeekend = 0;
  let fpWeekend = 0;
  let fnWeekend = 0;
  //Candy
  let tpCandy = 0;
  let tnCandy = 0;
  let fpCandy = 0;
  let fnCandy = 0;
  //Reading
  let tpReading = 0;
  let tnReading = 0;
  let fpReading = 0;
  let fnReading = 0;
  //Lasagna
  let tpLasagna = 0;
  let tnLasagna = 0;
  let fpLasagna = 0;
  let fnLasagna = 0;
  //Exercise
  let tpExercise = 0;
  let tnExercise = 0;
  let fpExercise = 0;
  let fnExercise = 0;
  //Computer
  let tpComputer = 0;
  let tnComputer = 0;
  let fpComputer = 0;
  let fnComputer = 0;
  //Pizza
  let tpPizza = 0;
  let tnPizza = 0;
  let fpPizza = 0;
  let fnPizza = 0;
  //Carrot
  let tpCarrot = 0;
  let tnCarrot = 0;
  let fpCarrot = 0;
  let fnCarrot = 0;
  //Dentist
  let tpDentist = 0;
  let tnDentist = 0;
  let fpDentist = 0;
  let fnDentist = 0;
  //BrusselSprouts
  let tpBrusselSprouts = 0;
  let tnBrusselSprouts = 0;
  let fpBrusselSprouts = 0;
  let fnBrusselSprouts = 0;

  for (let i = 0; i < data.length; i++) {
    const events = data[i].events;
    const squirrel = data[i].squirrel;
    insertRow(i + 1, events, squirrel);

    //Peanuts
    if (events.includes("peanuts") && squirrel) {
      tpPeanuts++;
    }

    if (events.includes("peanuts") && !squirrel) {
      fnPeanuts++;
    }
    if (!events.includes("peanuts") && squirrel) {
      fpPeanuts++;
    }

    if (!events.includes("peanuts") && !squirrel) {
      tnPeanuts++;
    }

    //Spaghetti
    if (events.includes("spaghetti") && squirrel) {
      tpSpaghetti++;
    }

    if (events.includes("spaghetti") && !squirrel) {
      fnSpaghetti++;
    }
    if (!events.includes("spaghetti") && squirrel) {
      fpSpaghetti++;
    }

    if (!events.includes("spaghetti") && !squirrel) {
      tnSpaghetti++;
    }

    //Weekend
    if (events.includes("weekend") && squirrel) {
      tpWeekend++;
    }

    if (events.includes("weekend") && !squirrel) {
      fnWeekend++;
    }
    if (!events.includes("weekend") && squirrel) {
      fpWeekend++;
    }

    if (!events.includes("weekend") && !squirrel) {
      tnWeekend++;
    }

    //Candy
    if (events.includes("candy") && squirrel) {
      tpCandy++;
    }

    if (events.includes("candy") && !squirrel) {
      fnCandy++;
    }
    if (!events.includes("candy") && squirrel) {
      fpCandy++;
    }

    if (!events.includes("candy") && !squirrel) {
      tnCandy++;
    }

    //Reading
    if (events.includes("reading") && squirrel) {
      tpReading++;
    }

    if (events.includes("reading") && !squirrel) {
      fnReading++;
    }
    if (!events.includes("reading") && squirrel) {
      fpReading++;
    }

    if (!events.includes("reading") && !squirrel) {
      tnReading++;
    }

    //Lasagna
    if (events.includes("lasagna") && squirrel) {
      tpLasagna++;
    }

    if (events.includes("lasagna") && !squirrel) {
      fnLasagna++;
    }
    if (!events.includes("lasagna") && squirrel) {
      fpLasagna++;
    }

    if (!events.includes("lasagna") && !squirrel) {
      tnLasagna++;
    }

    //Exercise
    if (events.includes("exercise") && squirrel) {
      tpExercise++;
    }

    if (events.includes("exercise") && !squirrel) {
      fnExercise++;
    }
    if (!events.includes("exercise") && squirrel) {
      fpExercise++;
    }

    if (!events.includes("exercise") && !squirrel) {
      tnExercise++;
    }

    //Computer
    if (events.includes("computer") && squirrel) {
      tpComputer++;
    }

    if (events.includes("computer") && !squirrel) {
      fnComputer++;
    }
    if (!events.includes("computer") && squirrel) {
      fpComputer++;
    }

    if (!events.includes("computer") && !squirrel) {
      tnComputer++;
    }

    //Pizza
    if (events.includes("pizza") && squirrel) {
      tpPizza++;
    }

    if (events.includes("pizza") && !squirrel) {
      fnPizza++;
    }
    if (!events.includes("pizza") && squirrel) {
      fpPizza++;
    }

    if (!events.includes("pizza") && !squirrel) {
      tnPizza++;
    }

    //Carrot
    if (events.includes("carrot") && squirrel) {
      tpCarrot++;
    }

    if (events.includes("carrot") && !squirrel) {
      fnCarrot++;
    }
    if (!events.includes("carrot") && squirrel) {
      fpCarrot++;
    }

    if (!events.includes("carrot") && !squirrel) {
      tnCarrot++;
    }

    //Dentist
    if (events.includes("dentist") && squirrel) {
      tpDentist++;
    }

    if (events.includes("dentist") && !squirrel) {
      fnDentist++;
    }
    if (!events.includes("dentist") && squirrel) {
      fpDentist++;
    }

    if (!events.includes("dentist") && !squirrel) {
      tnDentist++;
    }

    //Brussel sprouts
    if (events.includes("brussel sprouts") && squirrel) {
      tpBrusselSprouts++;
    }

    if (events.includes("brussel sprouts") && !squirrel) {
      fnBrusselSprouts++;
    }
    if (!events.includes("brussel sprouts") && squirrel) {
      fpBrusselSprouts++;
    }

    if (!events.includes("brussel sprouts") && !squirrel) {
      tnBrusselSprouts++;
    }
  }

  //Peanuts
  mccPeanuts =
    (tpPeanuts * tnPeanuts - fpPeanuts * fnPeanuts) /
    Math.sqrt(
      (tpPeanuts + fpPeanuts) *
        (tpPeanuts + fnPeanuts) *
        (tnPeanuts + fpPeanuts) *
        (tnPeanuts + fnPeanuts)
    );

  //Spaghetti
  mccSpaghetti =
    (tpSpaghetti * tnSpaghetti - fpSpaghetti * fnSpaghetti) /
    Math.sqrt(
      (tpSpaghetti + fpSpaghetti) *
        (tpSpaghetti + fnSpaghetti) *
        (tnSpaghetti + fpSpaghetti) *
        (tnSpaghetti + fnSpaghetti)
    );

  //Weekend
  mccWeekend =
    (tpWeekend * tnWeekend - fpWeekend * fnWeekend) /
    Math.sqrt(
      (tpWeekend + fpWeekend) *
        (tpWeekend + fnWeekend) *
        (tnWeekend + fpWeekend) *
        (tnWeekend + fnWeekend)
    );

  //Candy
  mccCandy =
    (tpCandy * tnCandy - fpCandy * fnCandy) /
    Math.sqrt(
      (tpCandy + fpCandy) *
        (tpCandy + fnCandy) *
        (tnCandy + fpCandy) *
        (tnCandy + fnCandy)
    );

  //Reading
  mccReading =
    (tpReading * tnReading - fpReading * fnReading) /
    Math.sqrt(
      (tpReading + fpReading) *
        (tpReading + fnReading) *
        (tnReading + fpReading) *
        (tnReading + fnReading)
    );

  //Lasagna
  mccLasagna =
    (tpLasagna * tnLasagna - fpLasagna * fnLasagna) /
    Math.sqrt(
      (tpLasagna + fpLasagna) *
        (tpLasagna + fnLasagna) *
        (tnLasagna + fpLasagna) *
        (tnLasagna + fnLasagna)
    );

  //Exercise
  mccExercise =
    (tpExercise * tnExercise - fpExercise * fnExercise) /
    Math.sqrt(
      (tpExercise + fpExercise) *
        (tpExercise + fnExercise) *
        (tnExercise + fpExercise) *
        (tnExercise + fnExercise)
    );

  //Computer
  mccComputer =
    (tpComputer * tnComputer - fpComputer * fnComputer) /
    Math.sqrt(
      (tpComputer + fpComputer) *
        (tpComputer + fnComputer) *
        (tnComputer + fpComputer) *
        (tnComputer + fnComputer)
    );

  //Pizza
  mccPizza =
    (tpPizza * tnPizza - fpPizza * fnPizza) /
    Math.sqrt(
      (tpPizza + fpPizza) *
        (tpPizza + fnPizza) *
        (tnPizza + fpPizza) *
        (tnPizza + fnPizza)
    );

  //Carrot
  mccCarrot =
    (tpCarrot * tnCarrot - fpCarrot * fnCarrot) /
    Math.sqrt(
      (tpCarrot + fpCarrot) *
        (tpCarrot + fnCarrot) *
        (tnCarrot + fpCarrot) *
        (tnCarrot + fnCarrot)
    );

  //Dentist
  mccDentist =
    (tpDentist * tnDentist - fpDentist * fnDentist) /
    Math.sqrt(
      (tpDentist + fpDentist) *
        (tpDentist + fnDentist) *
        (tnDentist + fpDentist) *
        (tnDentist + fnDentist)
    );

  //BrusselSprouts
  mccBrusselSprouts =
    (tpBrusselSprouts * tnBrusselSprouts -
      fpBrusselSprouts * fnBrusselSprouts) /
    Math.sqrt(
      (tpBrusselSprouts + fpBrusselSprouts) *
        (tpBrusselSprouts + fnBrusselSprouts) *
        (tnBrusselSprouts + fpBrusselSprouts) *
        (tnBrusselSprouts + fnBrusselSprouts)
    );

  const mccList = [
    { name: "peanuts", value: mccPeanuts },
    { name: "spaghetti", value: mccSpaghetti },
    { name: "weekend", value: mccWeekend },
    { name: "candy", value: mccCandy },
    { name: "reading", value: mccReading },
    { name: "lasagna", value: mccLasagna },
    { name: "exercise", value: mccExercise },
    { name: "computer", value: mccComputer },
    { name: "carrot", value: mccCarrot },
    { name: "pizza", value: mccPizza },
    { name: "dentist", value: mccDentist },
    { name: "brussel sprouts", value: mccBrusselSprouts },
  ];

  mccList.sort(function (a, b) {
    return b.value - a.value;
  });

  for (let i = 0; i < mccList.length; i++) {
    insertRowCorrelation(i + 1, mccList[i].name, mccList[i].value);
  }
}

function insertRow(id, events, squirrel) {
  var tbodyRef = document
    .getElementById("theTable")
    .getElementsByTagName("tbody")[0];
  // Find a <table> element with id="myTable":

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = tbodyRef.insertRow();

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = id;
  cell2.innerHTML = events;
  cell3.innerHTML = squirrel;

  if (squirrel == true) {
    row.style.backgroundColor = "#00ffd9";
  }
}

function insertRowCorrelation(id, event, correlation) {
  var tbodyRef = document
    .getElementById("theCorrelationsTable")
    .getElementsByTagName("tbody")[0];
  // Find a <table> element with id="myTable":

  // Create an empty <tr> element and add it to the 1st position of the table:
  var row = tbodyRef.insertRow();

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = id;
  cell2.innerHTML = event;
  cell3.innerHTML = correlation;
}
