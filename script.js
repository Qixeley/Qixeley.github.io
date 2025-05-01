/* Global styles */
body {
  font-family: Arial, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
  padding: 20px;
}

/* Light Mode */
body.light-mode {
  background-color: #f5f5f5;
  color: #333;
}

/* Dark Mode */
body.dark-mode {
  background-color: #121212;
  color: #ccc;
}

.theme-switch {
  margin-bottom: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  border-radius: 50%;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.search-bar {
  margin-top: 20px;
}

.suggestions-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.suggestions-list li {
  padding: 8px;
  cursor: pointer;
  background-color: #f1f1f1;
  margin-top: 4px;
}

.suggestions-list li:hover {
  background-color: #ddd;
}

#itemSelector {
  margin-top: 10px;
  padding: 8px;
}
