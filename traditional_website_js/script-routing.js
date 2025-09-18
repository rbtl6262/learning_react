// Traditional JavaScript with routing
function createBox(text, className) {
  const box = document.createElement("div");
  box.className = `box ${className}`;
  box.textContent = text;
  return box;
}

function createContainer() {
  const container = document.createElement("div");
  container.className = "container";

  // Get current path from hash (for file:// URLs)
  const path = window.location.hash.replace("#", "") || "/";

  console.log("Path:", path);

  if (path === "/red") {
    // Create red box
    const box1 = document.createElement("div");
    box1.className = "box red-box";
    box1.textContent = "Red Box";
    container.appendChild(box1);
  } else if (path === "/blue") {
    // Create blue box
    const box2 = document.createElement("div");
    box2.className = "box blue-box";
    box2.textContent = "Blue Box";
    container.appendChild(box2);
  } else if (path === "/green") {
    // Create green box
    const box3 = document.createElement("div");
    box3.className = "box green-box";
    box3.textContent = "Green Box";
    container.appendChild(box3);
  } else {
    // Default: show all boxes
    const box1 = document.createElement("div");
    box1.className = "box red-box";
    box1.textContent = "Box 1";

    const box2 = document.createElement("div");
    box2.className = "box blue-box";
    box2.textContent = "Box 2";

    const box3 = document.createElement("div");
    box3.className = "box green-box";
    box3.textContent = "Box 3";

    container.appendChild(box1);
    container.appendChild(box2);
    container.appendChild(box3);
  }

  return container;
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  const container = createContainer();
  app.appendChild(container);
});
