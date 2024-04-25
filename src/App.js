import "./App.css";
import Orangepic from "./images/orange2.jpg";
import Peechpic from "./images/peech.jpg";
import Lemonpic from "./images/lemon.jpg";
import Beetrootpic from "./images/beetroot.jpg";
import Chillipic from "./images/chilli.jpg";
import Carrotpic from "./images/carrot.jpg";
import Leafpic from "./images/leaf.jpg";
import Leavespic from "./images/leaves.jpg";

function App() {
  return (
    <div className="container">
      <div className="menu">
        <div className="corner-images">
          <img src={Peechpic} className="corner-image top-left" alt="" />
          <img src={Lemonpic} className="corner-image top-right" alt="" />
          <img src={Beetrootpic} className="corner-image bottom-left" alt="" />
          <img src={Chillipic} className="corner-image bottom-right" alt="" />
          <img src={Carrotpic} className="corner-image top-left1" alt="" />
          <img src={Leafpic} className="corner-image bottom-left1" alt="" />
          <img src={Leavespic} className="corner-image bottom-right1" alt="" />
        </div>
        <img
          src={Orangepic}
          style={{ width: "110px", height: "100px" }}
          alt=""
        />
        <h1 className="heading">HEALTHY MENU</h1>
        <div className="section">
          <h2 className="gradient-underline">
            HEALTHY , NATURAL LOW CALORIE FOOD
          </h2>
          <p className="resdesign" style={{ color: "rgb(147 148 134)" }}>
            LOREM IPSUM DOLOR SIT AMET,CONSECTETUR ADIPISCING ELIT,SED
          </p>
          <p className="resdesign" style={{ color: "rgb(147 148 134)" }}>
            EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
          </p>
          <div class="item">
            <h3 className="subtitle">SALADS</h3>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$9.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$8.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$6.00</strong>
            </p>
          </div>
          <div class="item">
            <h3 className="subtitle">CHICKEN</h3>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$7.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$6.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$9.00</strong>
            </p>
          </div>
        </div>
        <div className="section">
          <div class="item">
            <h3 className="subtitlelastbefore">SOUP</h3>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$9.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$8.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$6.00</strong>
            </p>
          </div>
          <div class="item">
            <h3 className="subtitlelast">BEVERAGES</h3>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$7.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$6.00</strong>
            </p>
            <p class="price">
              LOREM IPSUM......................
              <strong style={{ color: "#cfe083" }}>$9.00</strong>
            </p>
          </div>
        </div>
        <div className="section">
          <p>www.restaurant.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
