
const darkCard = document.querySelector("#dark-card");
const darkBottom = document.querySelector("#dark-bottom");
const darkTodo = document.querySelector("#dark-todo");
const darkTodoHeader = document.querySelector("#dark-todo-header");
const darkList = document.querySelector("#dark-list");
const darkInputBox = document.querySelector("#dark-input-box");
const darkBorders = document.querySelectorAll(".dark-border");
const darkFooter = document.querySelector("#dark-footer");
const moon = document.querySelector("#moon-icon");
const submitbButton = document.querySelector("#submit-btn");
const darklist = document.querySelector("#dark-list");
const deleteButton = document.querySelector("#delete-btn");
const donebutton = document.querySelector("#done-btn");

moon.addEventListener("click", () => {
  darkCard.classList.toggle("bg-[#11111f]");
  darkCard.classList.toggle("bg-gray-200");

  darkBottom.classList.toggle("bg-[#11111f]");
  darkBottom.classList.toggle("bg-gray-200");

  darkTodo.classList.toggle("bg-[#24263a]");
  darkTodo.classList.toggle("bg-white");

  darkTodoHeader.classList.toggle("text-white");
  darkTodoHeader.classList.toggle("text-black");

  darkList.classList.toggle("text-white");
  darkList.classList.toggle("text-black");

  darkInputBox.classList.toggle("text-white");
  darkInputBox.classList.toggle("text-black");
  darkInputBox.classList.toggle("border-white/20");
  darkInputBox.classList.toggle("border-gray-300");

  darkBorders.forEach((item) => {
    item.classList.toggle("border-white/20");
    item.classList.toggle("border-gray-300");
  });

  darkFooter.classList.toggle("text-white/60");
  darkFooter.classList.toggle("text-black");

  moon.classList.toggle("text-white");
  moon.classList.toggle("text-black");

  deleteButton.classList.toggle("text-white");
  deleteButton.classList.toggle("text-black");
});

submitbButton.addEventListener("click", () => {
  const text = darkInputBox.value.trim();

  if (text === "") return;

  const item = document.createElement("div");
  item.className =
    "dark-border flex items-center gap-2 border border-white/20 rounded-md p-2";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "w-3 h-3";

  const span = document.createElement("span");
  span.textContent = text;

  item.appendChild(checkbox);
  item.appendChild(span);

  darkList.appendChild(item);
  darkInputBox.value = "";
});
deleteButton.addEventListener("click", () => {
  const items = document.querySelectorAll("#dark-list .dark-border");

  items.forEach((item) => {
    const checkbox = item.querySelector("input[type='checkbox']");

    if (checkbox && checkbox.checked) {
      item.remove();
    }
  });
});
donebutton.addEventListener("click", () => {
  const items = document.querySelectorAll("#dark-list .dark-border");
  const title = document.querySelector(".done-todo");

  title.innerHTML= `${items.length} to-do's`;
  
});
