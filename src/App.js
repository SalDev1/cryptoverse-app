import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  CryptoCurriences,
  News,
  CryptoDetails,
  Homepage,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='app'>
      {/* Navbar */}

      <div className='navbar'>
        <Navbar />
      </div>
      {/* Our Main Content */}

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/cryptocurrencies' element={<CryptoCurriences />} />
              <Route path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route path='/news' element={<News />} />
              <Route path='/exchanges' element={<Exchanges />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Space>
            <Link to='/'>Home</Link>
            <Link to='/exchanges'>Exchanges</Link>
            <Link to='/news'>News</Link>
          </Space>
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}>
            CryptoVerse <br /> All rights reserved.
          </Typography.Title>
        </div>
      </div>
    </div>
  );
};

export default App;
