import React from "react";
import Navbar from "../../NavBar/NavBar";
import "./styleSquare.css";

function Square() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
    <h2 className='title'>Квадрат</h2>
    <div className="oms_definition">
      <div className="oms_definition0">Означення.</div> <b>Квадрат</b> - це чотирикутник, у якого всі чотири сторони та кути однакові. 
Квадрати відрізняються між собою тільки довжиною сторони, але всі чотири кути у них прямі, тобто по 90°.</div>
  
    <table><tbody>
	<tr>
		<td ><img src="//ua.onlinemschool.com/pictures/area/square1.png" alt="Зображення квадрату з позначеннями"/></td>
		<td ></td>
		<td ><img src="//ua.onlinemschool.com/pictures/area/square2.png" alt="Зображення квадрату з позначеннями"/></td>
	</tr><tr>
		<td>Рис.1</td>
		<td></td>
		<td>Рис.2</td>
	</tr>
</tbody></table>
<section>

    <div className="ramka">
      <h2 className="art">Основні властивості квадрату</h2>
      <div className="oms_definition">Квадратом також можуть бути паралелограм, ромб або прямокутник, якщо вони мають однакові довжини діагоналей, сторін та однакові кути.</div>
      <div className="oms_spisok">
        <div>1. Всі чотири сторони квадрата мають однакову довжину, тобто вони рівні:<br /><p >AB = BC = CD = AD</p></div>
        <div>2. Протилежні сторони квадрата паралельні:<br /><p >AB||CD,&nbsp;&nbsp;&nbsp;BC||AD</p></div>
        <div>3. Всі чотири кути квадрата прямі:<br /><p>∠ABC = ∠BCD = ∠CDA = ∠DAB = 90°</p></div>
        <div>4. Сума кутів квадрата дорівнює 360 градусів:<br /><p>∠ABC + ∠BCD + ∠CDA + ∠DAB = 360°</p></div>
        <div>5. Діагоналі квадрата мають однакову довжини:<br /><p>AC = BD</p></div>
        <div>6. Кожна діагональ квадрата ділить квадрат на дві однакові симетричні фігури</div>
        <div>7. Діагоналі квадрата перетинаються під прямим кутом, і розділяють одна одну навпіл:<br /><br />
          <table>
            <tbody>
              <tr>
                <td rowspan="2" className="fr_integer">AC<span>┴</span>BD</td>
                <td rowspan="2" className="fr_integer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td rowspan="2" className="fr_integer">AO = BO = CO = DO =&nbsp;</td>
                <td className="fr_numerator"><span className="oms_formula">d</span></td>
              </tr>
              <tr><td className="fr_denominator">2</td></tr>
            </tbody>
          </table>
        </div>
        <div>8. Точка перетину діагоналей називається центром квадрату і також є центром вписаного та описаного кола</div>
        <div>9. Кожна діагональ ділить кут квадрату навпіл, тобто вони є бісектрисами кутів квадрату:<br /><p >ΔABC = ΔADC = ΔBAD = ΔBCD<br />∠ACB = ∠ACD = ∠BDC = ∠BDA = ∠CAB = ∠CAD = ∠DBC = ∠DBA = 45°</p></div>
        <div>10. Обидві діагоналі розділяють квадрат на чотири рівні трикутника, до того ж ці трикутники одночасно і рівнобедрені, і прямокутні:<br /><p style={{ textAlign: 'center' }}>ΔAOB = ΔBOC = ΔCOD = ΔDOA</p></div>
      </div>
    </div>
</section>
<section>
<div className="ramka">
      <h2 className="art">Периметр квадрата</h2>
      <div className="oms_definition">
        <div className="oms_definition0">Означення.</div> 
        <b>Периметром квадрата</b> називається сума довжин всіх сторін квадрату.
      </div>
      <h3 className="art">Формули визначення довжини периметра квадрата</h3>
      <div className="oms_spisok">
        <div>1. Формула периметра квадрата через сторону квадрата: <p >P = 4<span className="oms_formula">a</span></p></div>
        <div>2. Формула периметра квадрата через площу квадрата: <p>P = 4√<span className="oms_sqrt">S</span></p></div>
        <div>3. Формула периметра квадрата через діагональ квадрата: <p >P = 2<span className="oms_formula">d</span>√<span className="oms_sqrt">2</span></p></div>
        <div>4. Формула периметра квадрата через радіус описаного кола: <p>P = 4R√<span className="oms_sqrt">2</span></p></div>
        <div>5. Формула периметра квадрата через діаметр описаного кола: <p >P = 2D<sub>о</sub>√<span className="oms_sqrt">2</span></p></div>
        <div>6. Формула периметра квадрата через радіус вписаного кола: <p >P = 8<span className="oms_formula">r</span></p></div>
        <div>7. Формула периметра квадрата через діаметр вписаного кола: <p >P = 4D<sub>в</sub></p></div>
        <div>8. Формула периметра квадрата через довжину відрізка <span className="oms_formula">l</span>:
          <table>
            <tbody>
              <tr>
                <td className="fr_integer" rowspan="2">P&nbsp;=&nbsp;<span className="oms_formula">l</span>&nbsp;</td>
                <td className="fr_numerator">8</td>
              </tr>
              <tr>
                <td className="fr_denominator">√<span className="oms_sqrt">5</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</section>
<section><div className="ramka">
      <h2 className="art">Площа квадрата</h2>
      <div className="oms_definition">
        <div className="oms_definition0">Означення.</div> 
        <b>Площею квадрата</b> називається простір який обмежений сторонами квадрата, тобто в межах периметру квадрата.
      </div>
      <div className="oms_definition">Площа квадрата більша площі будь-якого чотирикутника з таким же периметром.</div>
      <h3 className="art">Формули площі квадрата</h3>
      <div className="oms_spisok">
        <div>1. формула площі квадрата через сторону квадрата:<p>S = <span className="oms_formula">a</span><sup>2</sup></p></div>
        <div>2. Формула площі квадрата через периметр квадрата:
          <table>
            <tbody>
              <tr>
                <td className="fr_integer" rowspan="2">S&nbsp;=&nbsp;</td>
                <td className="fr_numerator">P<sup>2</sup></td>
              </tr>
              <tr>
                <td className="fr_denominator">16</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>3. Формула площі квадрата через діагональ квадрата:
          <table>
            <tbody>
              <tr>
                <td className="fr_integer" rowspan="2">S&nbsp;=&nbsp;</td>
                <td className="fr_numerator"><span className="oms_formula">d</span><sup>2</sup></td>
              </tr>
              <tr>
                <td className="fr_denominator">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>4. Формула площі квадрата через радіус описаного кола:<p>S = 2R<sup>2</sup></p></div>
        <div>5. Формула площі квадрата через діаметр описаного кола:
          <table >
            <tbody>
              <tr>
                <td className="fr_integer" rowspan="2">S&nbsp;=&nbsp;</td>
                <td className="fr_numerator">D<sub>o</sub><sup>2</sup></td>
              </tr>
              <tr>
                <td className="fr_denominator">2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>6. Формула площі квадрата через радіус вписаного кола: <p>S = 4<span className="oms_formula">r</span><sup>2</sup></p></div>
        <div>7. Формула площі квадрата через діаметр вписаного кола: <p>S = D<sub>в</sub><sup>2</sup></p></div>
        <div>8. Формула площі квадрата через довжину відрізка <span className="oms_formula">l</span>:
          <table>
            <tbody>
              <tr>
                <td className="fr_integer" rowspan="2">S&nbsp;=&nbsp;<span className="oms_formula">l</span>&nbsp;<sup>2</sup>&nbsp;</td>
                <td className="fr_numerator">16</td>
              </tr>
              <tr>
                <td className="fr_denominator">√<span className="oms_sqrt">5</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div></section>
      </body>
    
    </>
  );
}
export default Square;
