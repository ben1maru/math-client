import React from "react";
import "./styleRectangle.css";
import Navbar from "../../NavBar/NavBar";
function Rectangle() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <h1>Прямокутник. Формули та властивості прямокутника</h1>

        <div className="oms_definition">
          <div className="oms_definition0">Означення.</div>
          <b>Прямокутник</b> - це чотирикутник, у якого дві протилежні сторони
          рівні і всі чотири кути однакові (90 градусів).
        </div>

        <table style={{ margin: "auto", textAlign: "center", width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ width: "48%" }}>
                <img
                  style={{ width: "90%" }}
                  src="//ua.onlinemschool.com/pictures/rectangle/rectangle1.png"
                  alt="Зображення прямокутника з позначеннями"
                />
              </td>
              <td style={{ width: "4%" }}></td>
              <td style={{ width: "48%" }}>
                <img
                  style={{ width: "90%" }}
                  src="//ua.onlinemschool.com/pictures/rectangle/rectangle2.png"
                  alt="Зображення прямокутника з позначеннями"
                />
              </td>
            </tr>
            <tr>
              <td>Рис.1</td>
              <td></td>
              <td>Рис.2</td>
            </tr>
          </tbody>
        </table>
        <br />

        <div className="ramka">
          <h2 className="art">Основні властивості прямокутника</h2>
          <div className="oms_definition">
            Прямокутником можуть бути паралелограм, ромб або квадрат.
          </div>
          <div className="oms_spisok">
            <div>
              1. Протилежні сторони прямокутника мають однакову довжину, тобто
              вони рівні:
              <br />
              <p style={{ textAlign: "center" }}>AB = CD, BC = AD</p>
            </div>
            <div>
              2. Протилежні сторони прямокутника паралельні:
              <br />
              <p style={{ textAlign: "center" }}>AB || CD, BC || AD</p>
            </div>
            <div>
              3. Прилеглі сторони прямокутника завжди перпендикулярні:
              <p style={{ textAlign: "center" }}>
                AB <sub>┴</sub> BC,&nbsp;&nbsp;&nbsp;BC <sub>┴</sub>{" "}
                CD,&nbsp;&nbsp;&nbsp;CD <sub>┴</sub> AD,&nbsp;&nbsp;&nbsp;AD{" "}
                <sub>┴</sub> AB
              </p>
            </div>
            <div>
              4. Всі чотири кути прямокутника прямі:
              <p style={{ textAlign: "center" }}>
                ∠ABC = ∠BCD = ∠CDA = ∠DAB = 90°
              </p>
            </div>
            <div>
              5. Сума кутів прямокутника дорівнює 360 градусів:
              <p style={{ textAlign: "center" }}>
                ∠ABC + ∠BCD + ∠CDA + ∠DAB = 360°
              </p>
            </div>
            <div>
              6. Діагоналі прямокутника мають однакової довжини:
              <p style={{ textAlign: "center" }}>AC = BD</p>
            </div>
            <div>
              7. Сума квадратів діагоналі прямокутника дорівнюють сумі квадратів
              сторін:
              <p style={{ textAlign: "center" }}>
                2<span class="oms_formula">d</span>
                <sup>2</sup> = 2<span class="oms_formula">a</span>
                <sup>2</sup> + 2<span class="oms_formula">b</span>
                <sup>2</sup>
              </p>
            </div>
            <div>
              8. Кожна діагональ прямокутника ділить прямокутник на дві однакові
              фігури, а саме на прямокутні трикутники.
            </div>
            <div>
              9. Діагоналі прямокутника перетинаються і в точці перетину
              діляться навпіл:
              <table>
                <tbody>
                  <tr>
                    <td rowspan="2" class="fr_integer">
                      &nbsp;
                    </td>
                    <td rowspan="2" class="fr_integer">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </td>
                    <td rowspan="2" class="fr_integer">
                      AO = BO = CO = DO =&nbsp;
                    </td>
                    <td class="fr_numerator">
                      <span class="oms_formula">d</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="fr_denominator">2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              10. Точка перетину діагоналей називається центром прямокутника, а
              також є центром описаного кола
            </div>
            <div>11. Діагональ прямокутника є діаметром описаного кола</div>
            <div>
              12. Навколо прямокутника завжди можна описати коло, бо сума
              протилежних кутів дорівнює 180 градусів:
              <p style={{ textAlign: "center" }}>
                ∠ABC + ∠CDA = 180°&nbsp;&nbsp;&nbsp;∠BCD + ∠DAB = 180°
              </p>
            </div>
            <div>
              13. В прямокутник, у якого довжина не дорівнює ширині, не можна
              вписати коло, бо суми протилежних сторін не рівні між собою
              (вписати коло можно тільки в частинний випадок прямокутника -
              квадрат).
            </div>
          </div>
        </div>

        <div className="ramka">
          <h2 className="art">Периметр прямокутника</h2>
          <div className="oms_definition">
            <div className="oms_definition0">Означення.</div>
            <b>Периметром прямокутника</b> називається сума довжин всіх сторін
            прямокутника.
          </div>
          <div className="oms_spisok">
            <div>
              1. Формула периметру прямокутника через дві сторони:
              <p style={{ textAlign: "center" }}>P = 2a + 2b</p>
              <p style={{ textAlign: "center" }}>P = 2(a + b)</p>
            </div>
            <div>
              2. Формула периметру прямокутника через площу та будь-яку сторону:
              <table>
                <tbody>
                  <tr>
                    <td class="fr_integer" rowspan="2">
                      P&nbsp;=&nbsp;
                    </td>
                    <td class="fr_numerator">
                      2S + 2<span class="oms_formula">a</span>
                      <sup>2</sup>
                    </td>
                    <td class="fr_integer" rowspan="2">
                      &nbsp;=&nbsp;
                    </td>
                    <td class="fr_numerator">
                      2S + 2<span class="oms_formula">b</span>
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td class="fr_denominator">
                      <span class="oms_formula">a</span>
                    </td>
                    <td class="fr_denominator">
                      <span class="oms_formula">b</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              3. Формула периметру прямокутника через діагональ та будь-яку
              сторону:{" "}
              <p style={{ textAlign: "center" }}>
                P = 2(<span class="oms_formula">a</span> + √
                <span class="oms_sqrt">
                  <span class="oms_formula">d</span>
                  <sup>2</sup> - <span class="oms_formula">a</span>
                  <sup>2</sup>
                </span>
                ) = 2(<span class="oms_formula">b</span> + √
                <span class="oms_sqrt">
                  <span class="oms_formula">d</span>
                  <sup>2</sup> - <span class="oms_formula">b</span>
                  <sup>2</sup>
                </span>
                )
              </p>
            </div>
            <div>
              4. Формула периметру прямокутника через радіус описаного кола та
              будь-яку сторону:
              <p style={{ textAlign: "center" }}>
                P = 2(<span class="oms_formula">a</span> + √
                <span class="oms_sqrt">
                  4R<sup>2</sup> - <span class="oms_formula">a</span>
                  <sup>2</sup>
                </span>
                ) = 2(<span class="oms_formula">b</span> + √
                <span class="oms_sqrt">
                  4R<sup>2</sup> - <span class="oms_formula">b</span>
                  <sup>2</sup>
                </span>
                )
              </p>
            </div>
            <div>
              5. Формула периметру прямокутника через діаметр описаного кола та
              будь-яку сторону:{" "}
              <p style={{ textAlign: "center" }}>
                P = 2(<span class="oms_formula">a</span> + √
                <span class="oms_sqrt">
                  D<sub>o</sub>
                  <sup>2</sup> - <span class="oms_formula">a</span>
                  <sup>2</sup>
                </span>
                ) = 2(<span class="oms_formula">b</span> + √
                <span class="oms_sqrt">
                  D<sub>o</sub>
                  <sup>2</sup> - <span class="oms_formula">b</span>
                  <sup>2</sup>
                </span>
                )
              </p>
            </div>
          </div>
        </div>

        <div className="ramka">
          <h2 className="art">Площа прямокутника</h2>
          <div className="oms_definition">
            <div className="oms_definition0">Означення.</div>
            <b>Площею прямокутника</b> називається простір, який обмежений
            сторонами прямокутника, тобто в межах периметру прямокутника.
          </div>
          <div className="oms_spisok">
            <div>
              1. Формула площі прямокутника через дві сторони:
              <p style={{ textAlign: "center" }}>S = a · b</p>
              <div>
                2. Формула площі прямокутника через периметр та будь-яку
                сторону:
                <table>
                  <tbody>
                    <tr>
                      <td class="fr_integer" rowspan="2">
                        S&nbsp;=&nbsp;
                      </td>
                      <td class="fr_numerator">
                        P<span class="oms_formula">a</span> - 2
                        <span class="oms_formula">a</span>
                        <sup>2</sup>
                      </td>
                      <td class="fr_integer" rowspan="2">
                        &nbsp;=&nbsp;
                      </td>
                      <td class="fr_numerator">
                        P<span class="oms_formula">b</span> - 2
                        <span class="oms_formula">b</span>
                        <sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td class="fr_denominator">2</td>
                      <td class="fr_denominator">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                3. Формула площі прямокутника через діагональ та будь-яку
                сторону:
                <p style={{ textAlign: "center" }}>
                  S = <span class="oms_formula">a</span>√
                  <span class="oms_sqrt">
                    <span class="oms_formula">d</span>
                    <sup>2</sup> - <span class="oms_formula">a</span>
                    <sup>2</sup>
                  </span>{" "}
                  = <span class="oms_formula">b</span>√
                  <span class="oms_sqrt">
                    <span class="oms_formula">d</span>
                    <sup>2</sup> - <span class="oms_formula">b</span>
                    <sup>2</sup>
                  </span>
                </p>
              </div>
              <div>
                4. Формула площі прямокутника через діагональ та синус гострого
                кута між діагоналями:
                <table>
                  <tbody>
                    <tr>
                      <td class="fr_integer" rowspan="2">
                        S&nbsp;=&nbsp;
                      </td>
                      <td class="fr_numerator">
                        <span class="oms_formula">d</span>
                        <sup>2</sup> · <span class="oms_formula">sin β</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="fr_denominator">2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                5. Формула площі прямокутника через радіус описаного кола та
                будь-яку сторону:
                <p style={{ textAlign: "center" }}>
                  S = <span class="oms_formula">a</span>√
                  <span class="oms_sqrt">
                    4R<sup>2</sup> - <span class="oms_formula">a</span>
                    <sup>2</sup>
                  </span>{" "}
                  = <span class="oms_formula">b</span>√
                  <span class="oms_sqrt">
                    4R<sup>2</sup> - <span class="oms_formula">b</span>
                    <sup>2</sup>
                  </span>
                </p>
              </div>
              <div>
                6. Формула площі прямокутника через діаметр описаного кола та
                будь-яку сторону:
                <p style={{ textAlign: "center" }}>
                  S = <span class="oms_formula">a</span>√
                  <span class="oms_sqrt">
                    D<sub>o</sub>
                    <sup>2</sup> - <span class="oms_formula">a</span>
                    <sup>2</sup>
                  </span>{" "}
                  = <span class="oms_formula">b</span>√
                  <span class="oms_sqrt">
                    D<sub>o</sub>
                    <sup>2</sup> - <span class="oms_formula">b</span>
                    <sup>2</sup>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
      </body>
    </>
  );
}
export default Rectangle;
