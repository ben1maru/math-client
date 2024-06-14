import React from 'react'
import NavBar from "../../NavBar/NavBar";
import './styleTriangle.css';

function Triangle() {
  return (
    <><NavBar />
    <body>
    
    <h2 className='title'>Типи трикутників</h2>
    <section>
        <div className="ramka">
        <div className="oms_definition">
        <h3 className="art" >За величиною кутів</h3>
        <ol>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_ostr.png" alt="Гострокутний трикутник" />
              </div>
              <b>Гострокутний трикутник</b> - всі кути трикутника гострі.
            </div>
          </li>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_tup.png" alt="Тупокутний трикутник" />
              </div>
              <b>Тупокутний трикутник</b> - один з кутів трикутника тупий (більше 90°).
            </div>
          </li>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_pr.png" alt="Прямокутний трикутник" />
              </div>
              <b>Прямокутний трикутник</b> - один із кутів трикутника прямий (рівний 90°).
            </div>
          </li>
        </ol>
      </div>

      <div className="oms_definition">
        <h3 className="art" >За кількістю рівних сторін</h3>
        <ol>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_ostr.png" alt="Різносторонній трикутник" />
              </div>
              <b>Різносторонній трикутник</b> - всі три сторони не рівні.
            </div>
          </li>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_sr_3.png" alt="Рівнобедрений трикутник" />
              </div>
              <b>Рівнобедрений трикутник</b> - дві сторони рівні.
            </div>
          </li>
          <li>
            <div className="oms_definition">
              <div className="oms_image_in_text">
                <img src="//ua.onlinemschool.com/pictures/triangle/tr_ravnosor.png" alt="правильний трикутник" />
              </div>
              <b>Рівносторонній трикутник</b> або <b>правильний трикутник</b> - всі три сторони рівні.
            </div>
          </li>
        </ol>
      </div>
        </div>
    </section>
<section>
<div className="ramka">
      <h2 className="art">Вершини, кути та сторони трикутника</h2>

      <div className="oms_spisok" >
        <div>
          <h3 className="art">Властивості кутів та сторін трикутника</h3>
        </div>
        <div>
          <div className="oms_image">
            <img src="//ua.onlinemschool.com/pictures/triangle/tr_side_angle.png" alt="Вершини та кути трикутника" />
          </div>
          <p>Сума кутів трикутника дорівнює 180°:</p>
          <p className="oms_definition">
            <span className="oms_formula">α</span> + <span className="oms_formula">β</span> + <span className="oms_formula">γ</span> = 180°
          </p>
          <div ></div>
        </div>
        <div>
          <p>У трикутнику проти більшої сторони лежить більший кут і навпаки. Проти рівних сторін лежать рівні кути:</p>
          <p >якщо <span className="oms_formula">α</span> &gt; <span className="oms_formula">β</span>, тоді <span className="oms_formula">a</span> &gt; <span className="oms_formula">b</span></p>
          <p >якщо <span className="oms_formula">α</span> = <span className="oms_formula">β</span>, тоді <span className="oms_formula">a</span> = <span className="oms_formula">b</span></p>
        </div>

        <div>
          <p>Сума довжин двох будь-яких сторін трикутника більша за довжину сторони, що залишилася:</p>
          <p className="oms_definition">
            <span className="oms_formula">a</span> + <span className="oms_formula">b</span> &gt; <span className="oms_formula">c</span><br />
            <span className="oms_formula">b</span> + <span className="oms_formula">c</span> &gt; <span className="oms_formula">a</span><br />
            <span className="oms_formula">c</span> + <span className="oms_formula">a</span> &gt; <span className="oms_formula">b</span>
          </p>
        </div>

        <div>
          <h3><span className="oms_definition1">Теорема косинусів</span></h3>
          <p><i>Квадрат будь-якої сторони трикутника дорівнює сумі квадратів двох інших сторін трикутника мінус подвійний добуток цих сторін на косинус кута між ними.</i></p>
          <p className="oms_definition"><span className="oms_formula">a</span><sup>2</sup> = <span className="oms_formula">b</span><sup>2</sup> + <span className="oms_formula">c</span><sup>2</sup> - 2<span className="oms_formula">bc</span>·<span className="oms_formula">cos α</span></p>

          <p className="oms_definition"><span className="oms_formula">b</span><sup>2</sup> = <span className="oms_formula">a</span><sup>2</sup> + <span className="oms_formula">c</span><sup>2</sup> - 2<span className="oms_formula">ac</span>·<span className="oms_formula">cos β</span></p>

          <p className="oms_definition"><span className="oms_formula">c</span><sup>2</sup> = <span className="oms_formula">a</span><sup>2</sup> + <span className="oms_formula">b</span><sup>2</sup> - 2<span className="oms_formula">ab</span>·<span className="oms_formula">cos γ</span></p>
        </div>

        <div>
          <h3><span className="oms_definition1">Теорема про проекції</span></h3>
          <p><i>Для остроугольного треугольника:</i></p>
          <p  className="oms_definition"><span className="oms_formula">a</span> = <span className="oms_formula">b cos γ</span> + <span className="oms_formula">c cos β</span></p>
          <p className="oms_definition"><span className="oms_formula">b</span> = <span className="oms_formula">a cos γ</span> + <span className="oms_formula">c cos α</span></p>
          <p  className="oms_definition"><span className="oms_formula">c</span> = <span className="oms_formula">a cos β</span> + <span className="oms_formula">b cos α</span></p>
        </div>
      </div>

      <div className="oms_spisok">
        <div><h3 className="art">Формули для обчислення довжин сторін трикутника</h3></div>
        <div>
          <i>Формули сторін через медіани</i>
          <p className="oms_definition"><span className="oms_formula">a</span> = <mfrac><mn>2</mn><mn>3</mn></mfrac>√<span className="oms_sqrt">2(<span className="oms_formula">m<sub>b</sub></span><sup>2</sup> + <span className="oms_formula">m<sub>c</sub></span><sup>2</sup>) - <span className="oms_formula">m<sub>a</sub></span><sup>2</sup></span></p>
          <p className="oms_definition"><span className="oms_formula">b</span> = <mfrac><mn>2</mn><mn>3</mn></mfrac>√<span className="oms_sqrt">2(<span className="oms_formula">m<sub>a</sub></span><sup>2</sup> + <span className="oms_formula">m<sub>c</sub></span><sup>2</sup>) - <span className="oms_formula">m<sub>b</sub></span><sup>2</sup></span></p>
          <p className="oms_definition"><span className="oms_formula">c</span> = <mfrac><mn>2</mn><mn>3</mn></mfrac>√<span className="oms_sqrt">2(<span className="oms_formula">m<sub>a</sub></span><sup>2</sup> + <span className="oms_formula">m<sub>b</sub></span><sup>2</sup>) - <span className="oms_formula">m<sub>c</sub></span><sup>2</sup></span></p>
        </div>
      </div>
    </div>
</section>
<section>
<div className="ramka">
      <h2 className="art">Периметр трикутника</h2>
      <div className="oms_image">
        <img src="//ua.onlinemschool.com/pictures/triangle/tr_side_angle.png" alt="Периметр трикутника" />
      </div>
      <div className="oms_definition" style={{ display: 'flow-root' }}>
        <p>
          <b>Периметр трикутника</b> <span style={{ fontSize: '1em' }}>∆</span>ABC дорівнює сумі довжин його сторін
        </p>
        <div style={{ textAlign: 'center' }} className="oms_definition">
          <b>P = <span className="oms_formula" style={{ color: '#0000ff' }}>a</span> + <span className="oms_formula" style={{ color: '#0000ff' }}>b</span> + <span className="oms_formula" style={{ color: '#0000ff' }}>c</span></b>
        </div>
      </div>
      <div className="link_blok">
        <a href="//ua.onlinemschool.com/math/assistance/figures_perimeter/triangle/">
          <span className="icon-omscalculator1"></span> Дивіться також онлайн калькулятор для розрахунку периметра трикутника
        </a>
      </div>
    </div>
</section>
<section>
<div className="ramka">
      <h2 className="art">Формули площі трикутника</h2>
      <div className="oms_image">
        <img src="//ua.onlinemschool.com/pictures/area/tr.png" alt="площа трикутника" />
      </div>
      <ol>
        <li>
          <div className="oms_definition" style={{ display: 'flow-root' }}>
            <b>Формула площі трикутника по стороні та висоті</b>
            <br />
            <b>Площа трикутника</b> дорівнює половині добутку довжини сторони трикутника на довжину проведеної до цієї сторони висоти
            <div className="oms_definition" style={{ textAlign: 'center' }}>
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">a&nbsp;·&nbsp;h<sub>a</sub></span><br />
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">b&nbsp;·&nbsp;h<sub>b</sub></span><br />
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">c&nbsp;·&nbsp;h<sub>c</sub></span>
            </div>
          </div>
          <div style={{ clear: 'both' }}></div>
        </li>
        <li>
          <div className="oms_definition">
            <b>Формула площі трикутника за трьома сторонами</b>
            <br />
            <h3>Формула Герона</h3>
            <div style={{ textAlign: 'center' }} className="oms_definition">
              S&nbsp;=&nbsp;√<span className="oms_sqrt"><span className="oms_formula">p</span>(<span className="oms_formula">p&nbsp;-&nbsp;a</span>)(<span className="oms_formula">p&nbsp;-&nbsp;b</span>)(<span className="oms_formula">p&nbsp;-&nbsp;c</span>)</span>
            </div>
            де <span className="oms_formula">p</span> = <mfrac><mn><span className="oms_formula">a</span> + <span className="oms_formula">b</span> + <span className="oms_formula">c</span></mn><mn>2</mn></mfrac> - напівпериметр трикутника.
          </div>
        </li>
        <li>
          <div className="oms_definition">
            <b>Формула площі трикутника за двома сторонами та кутом між ними</b>
            <br />
            <b>Площа трикутника</b> дорівнює половині добутка двох його сторін помноженого на синус кута між ними.
            <div className="oms_definition" style={{ textAlign: 'center' }}>
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">a&nbsp;·&nbsp;b&nbsp;·&nbsp;sin&nbsp;γ</span><br />
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">b&nbsp;·&nbsp;c&nbsp;·&nbsp;sin&nbsp;α</span><br />
              S&nbsp;=&nbsp;<mfrac><mn>1</mn><mn>2</mn></mfrac><span className="oms_formula">a&nbsp;·&nbsp;c&nbsp;·&nbsp;sin&nbsp;β</span>
            </div>
          </div>
        </li>
        <li>
          <div className="oms_definition">
            <b>Формула площі трикутника по трьох сторонах і радіусу описаного кола</b>
            <div className="oms_definition">
              <table style={{ margin: 'auto' }}>
                <tbody>
                  <tr>
                    <td className="fr_integer" rowspan="2">S&nbsp;=&nbsp;</td>
                    <td className="fr_numerator"><span className="oms_formula">a&nbsp;·&nbsp;b&nbsp;·&nbsp;с</span></td>
                  </tr>
                  <tr>
                    <td className="fr_denominator">4R</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
        <li>
          <div className="oms_definition">
            <b>Формула площі трикутника по трьох сторонах і радіусу вписаного кола</b>
            <br />
            <b>Площа трикутника</b> дорівнює добутку напівпериметра трикутника на радіус вписаного кола.
            <div className="oms_definition">
              <table style={{ margin: 'auto' }}>
                <tbody>
                  <tr>
                    <td>S&nbsp;=&nbsp;<span className="oms_formula">p</span>&nbsp;·&nbsp;<span className="oms_formula">r</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </li>
      </ol>
    </div>
    </section> 
    </body>
    </>
  )
};
export default Triangle;
