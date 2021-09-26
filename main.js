

fetch('https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/d91df4c8093c23c41dce6292d5c1ffce0f01a68b/newDatalog.json')
  .then(response => response.json())
  .then(data => {console.log("Type of Data: " + typeof(data) + " " + data); displayData(data);});

  function displayData(data) {
      let firstElement = data[0];
      console.log("firstElement " + firstElement);
      let firstSquirrel = firstElement.squirrel;
      console.log("firstSquirrel: " + firstSquirrel)

      for(let i = 0; i < data.length;i++)
      {
          document.write("id: " + i);
          document.write("Events: " + data[i].events);
          document.write("Squirrel: " + data[i].squirrel);
          document.write("<br>");
      }

  } 