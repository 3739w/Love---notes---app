document.getElementById("noteForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const message = document.getElementById("message").value;
  const date = document.getElementById("date").value;

  const note = {
    title,
    message,
    date,
  };

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("noteForm").reset();
  displayNotes();
});

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <h3>${note.title}</h3>
      <p>${note.message}</p>
      <small>${note.date}</small><br>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    container.appendChild(div);
  });
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

// Page load par notes dikhaye
displayNotes();
