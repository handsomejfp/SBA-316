document.addEventListener("DOMContentLoaded", () => {
  
  const userForm = document.getElementById("user-form");
  const errorMessageElement = document.getElementById("error-message");
  const userDataContainer = document.getElementById("user-data");
  const infoContainer = document.getElementById("info");

  const refreshBtn = document.getElementById("refresh-btn");
  const newWindowBtn = document.getElementById("new-window-btn");

  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const id = document.getElementById("id").value.trim();
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    const genderRadios = document.querySelectorAll(
      '#gender-options input[type="radio"]'
    );

    let selectedGender;
    for (const radio of genderRadios) {
      if (radio.checked) {
        selectedGender = radio.value;
        break;
      }
    }

    // Validation logic
    let errorMessage = "";
    if (!id) {
      errorMessage += "User ID is required. ";
    }
    if (!firstName) {
      errorMessage += "First Name is required. ";
    }
    if (!lastName) {
      errorMessage += "Last Name is required. ";
    }
    if (!selectedGender) {
      errorMessage += "Please select your gender. ";
    }

    
    if (errorMessage) {
      errorMessageElement.textContent = errorMessage;
      return;
    }

    
    errorMessageElement.textContent = "";

    const userDataTitle = document.createElement("h2");
    userDataTitle.textContent = "User Information";

    const userIdLabel = document.createElement("p");
    userIdLabel.textContent = `User ID: ${id}`;

    const userNameLabel = document.createElement("p");
    userNameLabel.textContent = `Name: ${firstName} ${lastName}`;

    const userGenderLabel = document.createElement("p");
    userGenderLabel.textContent = `Gender: ${selectedGender}`;

    userDataContainer.textContent = "";

    userDataContainer.appendChild(userDataTitle);
    for (const element of [userIdLabel, userNameLabel, userGenderLabel]) {
      userDataContainer.appendChild(element);
    }


    // Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
    const firstChild = userDataContainer.firstChild;
    console.log("First child of user data:", firstChild.textContent);

    const lastChild = userDataContainer.lastChild;
    console.log("Last child of user data:", lastChild.textContent);

    const userIdSibling = userIdLabel.nextElementSibling;
    console.log("Sibling of user ID label:", userIdSibling.textContent);
  });






  // Display browser and screen information
  function displayInfo() {
    const browserInfo = `Browser: ${navigator.userAgent}`;
    const onlineStatus = `Online: ${navigator.onLine ? "Yes" : "No"}`;
    const screenInfo = `Screen: ${screen.width}x${screen.height}`;

    infoContainer.textContent = `${browserInfo}\n${onlineStatus}\n${screenInfo}`;
  }

  window.addEventListener("online", displayInfo);
  window.addEventListener("offline", displayInfo);
  window.addEventListener("resize", displayInfo);
  refreshBtn.addEventListener("click", () => location.reload());
  newWindowBtn.addEventListener("click", () => {
    window.open("https://www.google.com", "newWindow", "width=600,height=400");
  });

  displayInfo();
});
