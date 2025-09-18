// Traditional JavaScript with routing and inline styles
function createContainer() {
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "20px";
  container.style.padding = "20px";

  // Get current path from hash (for file:// URLs)
  const path = window.location.hash.replace("#", "") || "/";

  console.log("Path:", path);

  if (path === "/red") {
    // Create red box
    const box1 = document.createElement("div");
    box1.style.width = "100px";
    box1.style.height = "100px";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.color = "white";
    box1.style.fontWeight = "bold";
    box1.style.backgroundColor = "#ff6b6b";
    box1.textContent = "Red Box";
    container.appendChild(box1);
  } else if (path === "/blue") {
    // Create blue box
    const box2 = document.createElement("div");
    box2.style.width = "100px";
    box2.style.height = "100px";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.color = "white";
    box2.style.fontWeight = "bold";
    box2.style.backgroundColor = "#4ecdc4";
    box2.textContent = "Blue Box";
    container.appendChild(box2);
  } else if (path === "/green") {
    // Create green box
    const box3 = document.createElement("div");
    box3.style.width = "100px";
    box3.style.height = "100px";
    box3.style.display = "flex";
    box3.style.alignItems = "center";
    box3.style.justifyContent = "center";
    box3.style.color = "white";
    box3.style.fontWeight = "bold";
    box3.style.backgroundColor = "#45b7d1";
    box3.textContent = "Green Box";
    container.appendChild(box3);
  } else {
    // Default: show all boxes
    const box1 = document.createElement("div");
    box1.style.width = "100px";
    box1.style.height = "100px";
    box1.style.display = "flex";
    box1.style.alignItems = "center";
    box1.style.justifyContent = "center";
    box1.style.color = "white";
    box1.style.fontWeight = "bold";
    box1.style.backgroundColor = "#ff6b6b";
    box1.textContent = "Box 1";

    const box2 = document.createElement("div");
    box2.style.width = "100px";
    box2.style.height = "100px";
    box2.style.display = "flex";
    box2.style.alignItems = "center";
    box2.style.justifyContent = "center";
    box2.style.color = "white";
    box2.style.fontWeight = "bold";
    box2.style.backgroundColor = "#4ecdc4";
    box2.textContent = "Box 2";

    const box3 = document.createElement("div");
    box3.style.width = "100px";
    box3.style.height = "100px";
    box3.style.display = "flex";
    box3.style.alignItems = "center";
    box3.style.justifyContent = "center";
    box3.style.color = "white";
    box3.style.fontWeight = "bold";
    box3.style.backgroundColor = "#45b7d1";
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
