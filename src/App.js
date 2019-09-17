import React from 'react';
import Story from './components/Story';
import styled from 'styled-components';

const Paragraph = styled.p`
      font-size: 28px
      padding-left: 25px;
`
function App() {
  return (
    <div className="App">
      <Paragraph>
          <Story/>
      </Paragraph>

      

    </div>
  );
}

export default App;
