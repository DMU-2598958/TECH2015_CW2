let db = new PouchDB("usersData");

      // This is the URL of the page, which contains the form parameters
      let url = document.URL;

      // searchParams allows us to identily all the parameters in the URL
      let paramaters = (new URL(url)).searchParams;

      // let's save the info in the database
      let theDate = new Date().toISOString();
      let user = {
        _id: theDate,
        name: paramaters.get("Fname"),
        name: paramaters.get("Email"),
        name: paramaters.get("Subject"),
        name: paramaters.get("Message"),
      };

      db.put(user);


      function showAnswers (err, doc) {
  let tableRows = "";
  doc.rows.forEach((row) => {
    let thisAnswer = row.doc;
    tableRows +=
      "<tr><td>" +
      thisAnswer.Fname +
      "</td><td>" +
      thisAnswer.Email +
      "</td><td>" +
      thisAnswer.Subject +
      "</td><td>" +
      thisAnswer.Message +
      "</td></tr>";
  });
  document.querySelector("#listofAnswers tbody").innerHTML = tableRows;
};

    function loadAnswers() {
      db.allDocs({ include_docs: true, descending: true }, showAnswers);
    };

    db.changes({
      since: "now",
      live: true,
    }).on("change", loadAnswers);

    loadAnswers();
