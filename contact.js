
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const adminDiv = document.getElementById("adminMessages");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const pseudo = document.getElementById("pseudo").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      await addDoc(collection(db, "messages"), {
        pseudo,
        email,
        message,
        date: new Date()
      });
      alert("Message envoyé !");
      form.reset();
    });
  }

  if (adminDiv) {
    onSnapshot(collection(db, "messages"), (snapshot) => {
      adminDiv.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const msg = document.createElement("div");
        msg.innerHTML = `<strong>${data.pseudo}</strong> (${data.email})<br>${data.message}<hr>`;
        adminDiv.appendChild(msg);
      });
    });
  }
});
