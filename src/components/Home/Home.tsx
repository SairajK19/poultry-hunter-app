import React, { useEffect } from "react";

import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-material-ui";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Link } from "react-router-dom";
import { TestMap } from "../mapbox";

const Home = () => {
  const { connection } = useConnection();
  const { connected, publicKey } = useWallet();

  const click = () => {
    console.log(connection);
    console.log(`Public Key ${publicKey?.toBase58()}`);
    console.log(`Connected ${connected}`);
  };

  useEffect(() => {
    const map = TestMap("map");
  }, []);

  return (
    <>
      <div>
        <WalletMultiButton color="primary" />
        <button onClick={click}>Log wallet details</button>
        <Link to="/getting-started">Getting started page</Link>
      </div>
      <div id="map" style={{ width: "500px", height: "500px" }}></div>
    </>
  );
};

export default Home;
