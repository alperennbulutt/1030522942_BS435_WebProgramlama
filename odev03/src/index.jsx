import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kediSira: Math.floor(Math.random() * 3),
      durum: undefined,
      kart: ['img/ArkaKapak.png', 'img/ArkaKapak.png', 'img/ArkaKapak.png'],
      sayac: 0,
      son: false,
    };
  }

  kediSec = (inx) => {
    const { kart, kediSira, sayac, son } = this.state;

    if (!son) {
      const yeniKart = [...kart];
      let durum;

      if (kediSira === inx) {
        yeniKart[inx] = 'img/Kedi.jpg';
        durum = 'Kazandınız!';
      } else {
        yeniKart[inx] = 'img/Kopek.jpg';
        if (sayac === 1) {
          durum = 'Kaybettiniz.';
        }
      }
      this.setState({
        kart: yeniKart,
        sayac: this.state.sayac + 1,
        durum,
      });

      if (durum) {
        this.setState({
          son: true,
        });
      }
    }
  };

  oyun = () => {
    this.setState({
      kediSira: Math.floor(Math.random() * 3),
      durum: undefined,
      kart: ['img/ArkaKapak.png', 'img/ArkaKapak.png', 'img/ArkaKapak.png'],
      sayac: 0,
      son: false,
    });
  };

  render() {
    const { kart, durum } = this.state;
    return (
      <div>
        <p>
          Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk
          tercihte Kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.
        </p>
        <img
          className="kart"
          src={kart[0]}
          onClick={() => {
            this.kediSec(0);
          }}
        />
        <img
          className="kart"
          src={kart[1]}
          onClick={() => {
            this.kediSec(1);
          }}
        />
        <img
          className="kart"
          src={kart[2]}
          onClick={() => {
            this.kediSec(2);
          }}
        />
        <div className="mesaj">
          <p>
            {durum
              ? durum
              : 'Kedi kartını bulmak için kartın üzerine tıklamalısın.'}
          </p>
          {durum && (
            <p>
              Yeni bir oyun oynamak istersen{' '}
              <span onClick={this.oyun} className="link">
                buraya
              </span>{' '}
              tıklayınız.
            </p>
          )}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
