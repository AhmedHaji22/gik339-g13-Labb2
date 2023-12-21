
const localUrl = "http://localhost:3000/users";

// Hämta användarinformation från URL:en
fetch(localUrl)
  .then((response) => response.json())
  .then((users) => {
    console.log("Användararray:", users);

    const newElement = document.createElement("ul");
    newElement.classList.add("new-element");

    users.forEach((user) => {
      const liElement = document.createElement("li");
      liElement.classList.add("custom-li-class", "other-class");
      liElement.style.backgroundColor = user.color;

      liElement.innerHTML = `
        <div>
          <h2>${user.firstName} ${user.lastName}</h2>
          <p>Username: ${user.username}</p>
        </div>
      `;

      newElement.appendChild(liElement);
    });

  
    document.body.appendChild(newElement);
  })
  .catch((error) => {
    console.error("Fel vid hämtning av data:", error);
  });
