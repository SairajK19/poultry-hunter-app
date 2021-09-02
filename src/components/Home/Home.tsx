import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mapboxgl, { Map } from "mapbox-gl";
import { TestMap } from "../mapbox";

import "./Home.css";

// Icons and logo
import downArrow from "../../assets/images/icons/downArrow.svg";
import phLogoBrownBorder from "../../assets/images/logo/phLogoBrownBorder.svg";
import farmer from "../../assets/images/icons/farmer.svg";
import distributor from "../../assets/images/icons/distributor.svg";
import seller from "../../assets/images/icons/seller.svg";
import reportedSeller from "../../assets/images/vector-art/reportedSeller.svg";
import directContact from "../../assets/images/vector-art/directContact.svg";
import indirectContact from "../../assets/images/vector-art/indirectContact.svg";

const Home = () => {
  const [map, setMap] = useState<Map>();
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [dropDownScaleValue, setDropDownScaleValue] = useState("scaleY(0)");

  const handleDropDownToggle = () => {
    setDropDownToggle(!dropDownToggle);

    if (!dropDownToggle) {
      setDropDownScaleValue("scaleY(1)");
      console.log("showing");
    } else {
      setDropDownScaleValue("scaleY(0)");
      console.log("hiding");
    }
  };
  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          iconSize: [60, 60],
        },
        geometry: {
          type: "Point",
          coordinates: [73.792318, 15.583988],
        },
      },
    ],
  };
  useEffect(() => {
    const test = TestMap("home-page-map");

    for (const marker of geojson.features) {
      // Create a DOM element for each marker.
      const el = document.createElement("img");
      const width = marker.properties.iconSize[0];
      const height = marker.properties.iconSize[1];
      el.className = "marker";
      el.src = directContact;
      el.style.width = "50px";
      el.style.height = "50px";
      // Add markers to the map.
      new mapboxgl.Marker(el)
        .setLngLat([73.792318, 15.583988])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>testcdfsrss</h3><p>testfsdfdsfsd</p>`)
        )
        .addTo(test);
    }
  }, []);

  useEffect(() => {
    // setMap(TestMap("home-page-map"));
  }, []);

  return (
    <div className="home-page">
      <div id="home-page-map"></div>
      <div className="home-navbar-wrapper">
        <div className="home-navbar">
          <div className="home-navbar-logo">
            <img src={phLogoBrownBorder} />
            <h2>
              Poultry <span id="orange-text">Hunter</span>
            </h2>
          </div>
          <div className="home-navbar-navigations">
            <Link to="/">Home</Link>
            <Link to="/marketplace">MarketPlace</Link>
            <Link to="/enroll">Enroll</Link>
          </div>
          <div className="hone-navbar-dash-dropdown-wrapper">
            <div
              className="home-navbar-dash-dropdown"
              onClick={handleDropDownToggle}
            >
              <button>Dashboard</button>
              <img src={downArrow} />
            </div>
            <div
              className="navbar-dropdown-navigation"
              id="navbar-dropdown-navigation"
              style={{ transform: dropDownScaleValue }}
            >
              <div className="navbar-dropdown-navigation-button">
                <a href="/farm-dashboard" target="_blank">
                  Farmer
                </a>
                <img src={farmer} />
              </div>
              <div className="navbar-dropdown-navigation-button">
                <a href="/distributors-dashboard" target="_blank">
                  Distributor
                </a>
                <img src={distributor} />
              </div>
              <div className="navbar-dropdown-navigation-button">
                <a href="/sellers-dashboard" target="_blank">
                  Seller
                </a>
                <img src={seller} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-bottom-tracker">
        <div className="home-page-bottom-tracker--card">
          <h3>Affected Farmers</h3>
          <div className="bottom-tracker--card-count">
            <h1>50+</h1>
            <img src={farmer} />
          </div>
        </div>
        <div className="home-page-bottom-tracker--card">
          <h3>Affected Distributors</h3>
          <div className="bottom-tracker--card-count">
            <h1>20+</h1>
            <img src={distributor} />
          </div>
        </div>
        <div className="home-page-bottom-tracker--card" id="home-seller">
          <h3>Affected Sellers</h3>
          <div className="bottom-tracker--card-count">
            <h1>70+</h1>
            <img src={seller} />
          </div>
        </div>
      </div>
      <div className="home-page-map-navigations">
        <div className="home-page-map-navigations--card">
          <h3>Index</h3>
          <div className="map-index-list">
            <img src={reportedSeller} />
            <p>Reported Sellers</p>
          </div>
          <div className="map-index-list">
            <img src={directContact} />
            <p>Direct Contact</p>
          </div>
          <div className="map-index-list">
            <img src={indirectContact} />
            <p>Indirect Contact</p>
          </div>
        </div>
        <div className="home-page-map-navigations--card">
          <h3>Filter</h3>
          <div className="map-filter-buttons">
            <label className="map-filter-checkbox">
              <input type="checkbox" />
              Farm
            </label>
            <label className="map-filter-checkbox">
              <input type="checkbox" />
              Distributor
            </label>
            <label className="map-filter-checkbox">
              <input type="checkbox" />
              Seller
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
