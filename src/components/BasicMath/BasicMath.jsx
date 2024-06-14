import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../NavBar/NavBar";
import "./styleBasicMath.css";

function BasicMath() {
  return (
   
      <><Navbar /><body>
      <main>
        <section id="addition">
          <h2>Додавання</h2>
          <p>
            Додавання - це одна з основних арифметичних операцій, що
            використовується для об&#39;єднання двох або більше чисел в
            одне. У математиці, додавання позначається знаком &#39;+&#39; і
            виконується шляхом додавання чисел разом. Наприклад, додавання
            чисел 3 і 5 можна записати як 3 + 5 = 8.
          </p>
          <div className="example">
            <p>Приклад: 2 + 3 = 5</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FmEFSjSsPx8?si=vM9oBhZrjDm8xCsa"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
            <p>
              Додавання в стовпчик - це зручний спосіб складання чисел, що
              складаються з двох і більше цифр. Для цього числа записуються
              одне під одним з дотриманням розрядів, і додавання
              відбувається з права на ліво. Спочатку складаються одиниці,
              потім десятки, сотні і так далі. Сума кожного стовпчика
              записується під ним.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aBqT2u_nBXc?si=JbnbfQEVCIEipfHY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
          <hr />
        </section>
        <section id="subtraction">
          <h2>Віднімання</h2>
          <p>
            Віднімання - це арифметична операція, обернена до додавання. Вона
            використовується для визначення різниці між двома числами. У
            математиці віднімання позначається знаком &#39;-&#39; і виконується
            шляхом віднімання одного числа від іншого. Наприклад, віднімання
            чисел 8 і 3 можна записати як 8 - 3 = 5.
          </p>
          <div className="example">
            <p>Приклад: 8 - 3 = 5</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FqzlISjTRQU?si=nWh_uubNj4zYoKo8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
            <p>
              Віднімання в стовпчик - це зручний спосіб відінмання чисел, що
              складаються з двох і більше цифр. Для цього числа записуються
              одне під одним з дотриманням розрядів, і відінмання
              відбувається з права на ліво. Спочатку складаються одиниці,
              потім десятки, сотні і так далі. Сума кожного стовпчика
              записується під ним. Якщо зменшуване менше ніж від&#39;ємник то ми позичаємо з настопного з розрядів
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/onjaX-WD52o?si=NkrxsIpHQPAxdf9h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </section>
        <hr />
        <section id="multiplication">
          <h2>Множення</h2>
          <p> Множення - це арифметична операція, яка використовується для
            повтореного додавання одного і того ж числа декілька разів. У
            математиці множення позначається знаком &#39;*&#39; і виконується
            шляхом повтореного додавання числа до самого себе відповідну кількість
            разів. Наприклад, множення числа 3 на 4 можна записати як 3 * 4 = 12.</p>
          <div className="example">
            <p>Приклад: 3 * 4 = 12</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dx8zZvofV70?si=QHE3TCit_a4qW4Nu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
            <p>
              Метод множення в стовпчик також відомий як &#39;стовпчиковий метод&#39; або &#39;колонковий метод&#39;.
              Цей метод широко використовується для множення чисел, особливо великих чисел, оскільки він робить процес
              множення більш структурованим і менш витратним на час. Під час застосування
              методу множення в стовпчик, розряди чисел множаться послідовно,
              з обчисленням проміжних добутків, які потім додаються для отримання кінцевого результату.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/wykZiB5ZEVs?si=1kAK5oczAwEcFxKr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </section>
        <hr />
        <section id="division">
          <h2>Ділення</h2>
          <p> Ділення - це арифметична операція, яка визначає, скільки разів одне число (дільник)
            міститься в іншому числі (ділене). Це розподілення об&#39;єктів або значень на рівні групи. У математиці,
            як і в багатьох програмах, ділення розглядається як обернена операція до множення.</p>
          <div className="example">
            <p>Приклад: 12 / 4 = 3</p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/OqbGlWdEX5E?si=8zt_Dy6cwYdz8xiO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
            <p>
              Ділення в стовпчик - це метод обчислення частки і залишку, використовуючи структурований підхід до поділу чисел.
              Основна ідея полягає в тому, щоб послідовно ділити числа по розрядах, починаючи з найвищого розряду і продовжуючи до найменшого.
              Результати ділення і залишок обчислюються для кожного розряду і використовуються для обчислення кінцевого результату.
            </p>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/6TgjAVbvkjs?si=KkoRIoc1Us3RdwuD"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
              className="mb-3"
            ></iframe>
          </div>
        </section>
      </main>

    </body></>
  );
}

export default BasicMath;
