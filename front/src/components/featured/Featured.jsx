// rsc
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/620029.webp?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/620029.webp?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>523 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/620029.webp?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
