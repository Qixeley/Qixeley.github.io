// Sliders update
document.getElementById("hueSlider").addEventListener("input", updateHue);
document.getElementById("saturationSlider").addEventListener("input", updateSaturation);
document.getElementById("sizeSlider").addEventListener("input", updateSize);

function updateHue() {
  let hueValue = document.getElementById("hueSlider").value;
  document.getElementById("hueValue").value = hueValue;
}

function updateSaturation() {
  let saturationValue = document.getElementById("saturationSlider").value;
  document.getElementById("saturationValue").value = saturationValue;
}

function updateSize() {
  let sizeValue = document.getElementById("sizeSlider").value;
  document.getElementById("sizeValue").value = sizeValue;
}

// Add item to inventory
document.getElementById("addItem").addEventListener("click", function() {
  let item = document.getElementById("itemSelect").value;
  let hue = document.getElementById("hueValue").value;
  let saturation = document.getElementById("saturationValue").value;
  let size = document.getElementById("sizeValue").value;
  let count = document.getElementById("count").value;
  let container = document.getElementById("containerSelect").value;

  let itemHTML = `
    <li>
      ${item} (Hue: ${hue}, Saturation: ${saturation}, Size: ${size}, Count: ${count}, Container: ${container})
    </li>
  `;
  document.getElementById("inventoryItems").innerHTML += itemHTML;

  // Update JSON size (simulated)
  document.getElementById("jsonSizeIndicator").innerText = `JSON Size: ${document.getElementById("inventoryItems").children.length * 10} KB`;
});

// Download JSON
document.getElementById("downloadJson").addEventListener("click", function() {
  let items = [];
  document.querySelectorAll("#inventoryItems li").forEach(function(item) {
    items.push(item.innerText);
  });

  let jsonContent = JSON.stringify(items);
  let blob = new Blob([jsonContent], { type: "application/json" });
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "inventory.json";
  link.click();
});

// Light/Dark Mode toggle
document.getElementById("modeToggle").addEventListener("change", function() {
  document.body.classList.toggle("dark");
});
