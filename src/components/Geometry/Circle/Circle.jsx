import React from "react";
import NavBar from "../../NavBar/NavBar";
import "./styleCircle.css";
function Circle() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        
          <h1>Коло, круг, сегмент, сектор. Формули та властивості кола</h1>
          <table align="center">
            <tbody>
              <tr>
                <td style={{ width: "32%", textAlign: "center" }}>
                  <img
                    style={{ width: "95%" }}
                    src="//ua.onlinemschool.com/pictures/circle/circumference_1.png"
                    alt="Зображення кола, радіуса, діаметра, хорди, дуги, січної та дотичної"
                  />
                </td>
                <td style={{ width: "32%", textAlign: "center" }}>
                  <img
                    style={{ width: "95%" }}
                    src="//ua.onlinemschool.com/pictures/circle/circumference_2.png"
                    alt="Зображення сектора і сегмента"
                  />
                </td>
                <td style={{ width: "32%", textAlign: "center" }}>
                  <img
                    style={{ width: "95%" }}
                    src="//ua.onlinemschool.com/pictures/circle/circumference_3.png"
                    alt="Зображення центрального і вписанного кута"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <div className="oms_definition" >
            <span className="oms_definition0">Означення.</span>
            <b>Коло</b> — це сукупність усіх точок на площині, які знаходяться
            на однаковій відстані від заданої точки <b>О</b>, яка називається{" "}
            <b>центром кола</b>.
          </div>
          <div className="oms_definition">
            <span className="oms_definition0">Означення.</span>
            <b>Одиничне коло</b> - коло, радіус якого дорівнює одиниці.
          </div>
          <div className="oms_definition" >
            <span className="oms_definition0">Означення.</span>
            <b>Круг</b> - частина площини, обмежена колом.
          </div>
          <div className="oms_definition">
            <span className="oms_definition0">Означення.</span>
            <b>Радіус кола R</b> - відстань від центра кола <b>О</b> до
            будь-якої точки кола.
          </div>
          <div className="oms_definition" >
            <span className="oms_definition0">Означення.</span>
            <b>Діаметр кола D</b> - відрізок, який сполучає дві точки кола та
            проходить через його центр.
          </div>
          <div className="oms_spisok">
            <h2 className="art">
              Основні властивості кола
            </h2>
            <div>
              1. Діаметр кола дорівнює двом радіусам.
              <p style={{ textAlign: "center" }}>
                D = 2<span className="oms_formula">r</span>
              </p>
            </div>
            <div>
              2. Найкоротша відстань від центра кола до січної (хорди) завжди
              менша радіуса.
            </div>
            <div>
              3. Через три точки, які не лежать на одній прямій, можна провести
              тільки одне коло.
            </div>
            <div>
              4. Серед всіх замкнених кривих з однаковою довжиною, коло має
              найбільшу площу.
            </div>
            <div>
              5. Якщо два кола дотикаються в одній точці, то ця точка лежить на
              прямій, що проходить через центри цих кіл.
            </div>
          </div>
          <div className="ramka" >
      <h2 className="art">Формули довжини кола та площі круга</h2>
      <div className="oms_spisok">
        <h3 className="art">Формули довжини кола</h3>
        <div>1. Формула довжини кола через діаметр:
          <p style={{ textAlign: 'center' }}>L = <span className="oms_formula">π</span>D</p>
        </div>
        <div>2. Формула довжини кола через радіус:
          <p style={{ textAlign: 'center' }}>L = 2<span className="oms_formula">πr</span></p>
        </div>
      </div>

      <div className="oms_spisok">
        <h3 className="art">Формули площі круга</h3>
        <div>1. Формула площі круга через радіус:
          <p style={{ textAlign: 'center' }}>S = <span className="oms_formula">πr</span><sup>2</sup></p>
        </div>
        <div>2. Формула площі круга через діаметр:
          <p style={{ textAlign: 'center' }}>S = <span className="oms_formula">π</span>D<sup>2</sup> / 4</p>
        </div>
      </div>
    </div>
    <div className="ramka" id="h5">
      <h2 className="art">Формули довжини кола та площі круга</h2>
      <div className="oms_spisok">
        <h3 className="art">Формули довжини кола</h3>
        <div>1. Формула довжини кола через діаметр:
          <p style={{ textAlign: 'center' }}>L = <span className="oms_formula">π</span>D</p>
        </div>
        <div>2. Формула довжини кола через радіус:
          <p style={{ textAlign: 'center' }}>L = 2<span className="oms_formula">πr</span></p>
        </div>
      </div>

      <div className="oms_spisok">
        <h3 className="art">Формули площі круга</h3>
        <div>1. Формула площі круга через радіус:
          <p style={{ textAlign: 'center' }}>S = <span className="oms_formula">πr</span><sup>2</sup></p>
        </div>
        <div>2. Формула площі круга через діаметр:
          <p style={{ textAlign: 'center' }}>S = <span className="oms_formula">π</span>D<sup>2</sup> / 4</p>
        </div>
      </div>
    </div>
      </body>
    </>
  );
}

export default Circle;
