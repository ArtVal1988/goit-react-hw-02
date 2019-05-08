import React from 'react';
import Reader from './Reader/Reader';
import publications from './publications.json';

const App = () => <Reader items={publications} />;

export default App;
