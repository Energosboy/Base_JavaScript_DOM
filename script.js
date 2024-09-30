// Задание 1. Поиск элементов и изменение содержимого. Создайте HTML-документ с элементами: заголовок (<h1>), абзац текста (<p>), список (<ul> с элементами <li>).
// Подсказка: Используйте метод document.querySelector() для поиска заголовка и измените его текст с помощью свойства .innerText. Найдите все элементы списка с помощью document.querySelectorAll() и добавьте к их тексту порядковый номер с помощью цикла.

// Найдём заголовок и изменим его текст
let header = document.querySelector("h1");
header.innerText = "Новый заголовок";

// Найдём абзац текста и изменим его текст
let paragraph = document.querySelector("p");
paragraph.innerText = "Новый абзац";

// Найдём список и добавим к его элементам порядковые номера
let list = document.querySelector("ul");
let listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
 listItems[i].innerText = `Элемент списка ${i + 1}`;
}

// Задание 2. Редактирование атрибутов. Добавьте на страницу изображение с атрибутом src. Подсказка: Для изменения атрибутов используйте метод .setAttribute(). Например, измените src у изображения на новый URL. Добавьте ссылку с атрибутом href, и через JS поменяйте её текст и URL с помощью setAttribute() и свойства .innerHTML.

// Найдём изображение и изменим его src
let image = document.querySelector("img");
image.setAttribute("src", "https://example.com/new_image.jpg");

// Найдём ссылку и изменим её текст и href
let link = document.querySelector("a");
link.setAttribute("href", "Новая ссылка");
link.innerHTML = "Новый текст ссылки";

// Задание 3. Манипуляции с элементами. Создайте кнопку на странице. При нажатии на неё с помощью JavaScript добавляйте новый элемент списка в ранее созданный <ul>.
// Подсказка: Для добавления элемента используйте методы createElement() и appendChild(). Добавьте ещё одну кнопку, которая будет удалять последний элемент списка. Для удаления используйте метод.removeChild().

// Найдём список и добавим в него новый элемент
let list_new = document.querySelector("ul");
let new_element = document.createElement("li");
new_element.innerHTML = "Новый элемент списка";
list_new.appendChild(new_element);

// Создадим кнопку и добавим новый элемент в список
let create_button = document.createElement("button");
create_button.innerHTML = "Добавить элемент";
create_button.addEventListener("click", function() {
 // Найдём последний элемент списка
 let last_element = list_new.lastElementChild;
 // Создадим новый элемент списка
 let new_element = document.createElement("li");
 new_element.innerHTML = "Новый элемент списка";
 // Добавим его в список
 list.appendChild(new_element);
});
list.appendChild(create_button);

// Создадим кнопку и удалим элемент из списка
let remove_button = document.createElement("button");
remove_button.innerHTML = "Удалить последний элемент";
remove_button.addEventListener("click", function() {
 // Найдём последний элемент списка
 let last_element = list_new.lastElementChild;
 // Удалим его
 list_new.removeChild(last_element);
});
list_new.appendChild(remove_button);

// Задание 4. Манипуляции со стилями CSS. Добавьте к абзацу текста стиль через CSS (например, цвет текста, размер шрифта).
// Подсказка: Для изменения стилей через JavaScript используйте свойство element.style. Например, element.style.color = 'blue';. Напишите JavaScript, который по нажатию на кнопку изменяет цвет текста абзаца на другой. Добавьте кнопку, которая будет скрывать или показывать абзац при каждом нажатии (используйте свойство display).

// Найдём абзац и добавим к нему стиль
let paragraph_new = document.querySelector("p");
paragraph_new.style.color = "blue";

// Найдём кнопку изменения цвета и добавим обработчик события click
let change_color = document.querySelector("#change-color");
change_color.addEventListener("click", function() {
 // Найдём абзац
 let paragraph = document.querySelector("#paragr");
 // Изменим цвет текста абзаца
 paragraph.style.color = "red";
});

// Найдём кнопку скрытия / показа и добавим обработчик события click
let show_hide = document.querySelector("#toggle-paragraph");
show_hide.addEventListener("click", function() {
 // Найдём абзац
 let paragraph = document.querySelector("#paragr");
 // Изменим свойство display абзаца
 paragraph.style.display = paragraph.style.display === "none" ? "block" : "none";
});

// Задание 5. Работа с геометрией элементов. Используя метод getBoundingClientRect(), определите координаты и размеры любого элемента на странице. Подсказка: Выведите размеры элемента с помощью console.log(), чтобы отладить и увидеть результат. Добавьте кнопку, которая будет выводить на экран ширину и высоту выбранного элемента, обновляя их при каждом нажатии.

// Найдём элемент и получим его размеры
let head_element = document.querySelector("h1");
let rect = head_element.getBoundingClientRect();

// Выведем размеры элемента в консоль
console.log(rect);

// Найдем кнопку и добавим обработчик события click
let button_wh = document.querySelector("#width-height");
button_wh.addEventListener("click", function() {
 // Получим размеры элемента
 let rect = head_element.getBoundingClientRect();
 // Выведем ширину и высоту элемента на экран
 console.log(`Ширина: ${rect.width}
Высота: ${rect.height}`);
});
