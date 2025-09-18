// Traditional JavaScript using createElement API
function createContainer() {
  const container = document.createElement("div");
  container.className = "container";

  // Create red box
  const box1 = document.createElement("div");
  box1.className = "box red-box";
  box1.textContent = "Box 1";

  // Create blue box
  const box2 = document.createElement("div");
  box2.className = "box blue-box";
  box2.textContent = "Box 2";

  // Create green box
  const box3 = document.createElement("div");
  box3.className = "box green-box";
  box3.textContent = "Box 3";

  container.appendChild(box1);
  container.appendChild(box2);
  container.appendChild(box3);

  return container;
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const container = createContainer();
  app.appendChild(container);
});
