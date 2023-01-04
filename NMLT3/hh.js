@charset "utf-8";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 16px;
}
body {
  background-color: #f2bf59;
  color: #3d3935;
  font-family: futura-pt, sans-serif;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
}
.box {
  width: 100%;
  max-width: 600px;
  padding: 15px;
}
.box h1 {
  margin: 10px 0;
  color: inherit;
  font-size: 2.5rem;
  letter-spacing: 2px;
  text-align: center;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}
.card {
  width: 32%;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 3px;
  transition: transform .3s;
}
.card a {
  color: inherit;
  text-decoration: none;
}
.card-thumb {
  width: 100%;
  text-align: center;
}
.card-thumb img {
  width: 80px;
}
.card-title {
  margin: 5px 0;
  font-size: 1.25rem;
  letter-spacing: 1px;
  text-align: center;
}
.card-excerpt {
  font-size: .75rem;
  letter-spacing: 1px;
  text-align: center;
}
.card:hover {
  box-shadow: 0px 0px 20px -5px rgba(0, 0, 0, .2);
	transform: translateY(-4px);
}
@media screen and (max-width: 540px) {
  #container {
    height: auto;
  }
  .box {
    padding: 20px;
  }
  .card {
    width: 49%;
  }
}
@media screen and (max-width: 480px) {
  .box h1 {
    font-size: 1.5rem
  }
  .cards {
    justify-content: center;
  }
  .card {
    margin-bottom: 20px;
    width: 80%;
  }
}