document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("Connexion réussie !");
        window.location.href = "index.html";
      } catch (error) {
        alert("Erreur : " + error.message);
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("signupEmail").value;
      const password = document.getElementById("signupPassword").value;
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        alert("Compte créé avec succès !");
        window.location.href = "index.html";
      } catch (error) {
        alert("Erreur : " + error.message);
      }
    });
  }
});