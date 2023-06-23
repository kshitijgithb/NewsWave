import logo from './logo.svg';
import './App.css';
//rcc for shortuct of class based component
import Navbar from './components/Navbar';
import News from './components/News.js';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
const App = () => {
  const pageSize = 15;
  const apikey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/about" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="about" />} />
          <Route path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route path="/health" element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App;
