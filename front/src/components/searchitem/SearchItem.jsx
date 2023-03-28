import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square200/59076227.webp?k=09dd68cc88d202f01744d41318329142767e59af1228b9b46e602e7cec452be8&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>

        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport taxt</span>
        <span className="siSubtitle">
          Studio Apartment with air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancallation</span>
        <span className="siCancelOpSubtitle">
          You can canel later, lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellenct</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
