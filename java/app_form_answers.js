let db = PouchDB("answers");



      function showAnswers (err, doc) {
  let tableRows = "";
  doc.rows.forEach((row) => {
    let thisAnswer = row.doc;
    tableRows +=
      "<tr><td>" +
      thisAnswer.Fname +
      "</td><td>" +
      thisAnswer.Email +                            //created by following the lab sheet from 19 of the academic year 2021/2022
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
