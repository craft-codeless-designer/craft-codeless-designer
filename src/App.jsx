import React from 'react';
import styled from 'styled-components';
import { CraftDesigner } from './designer/CraftDesigner';

const Wrapper = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <Wrapper>
      <CraftDesigner></CraftDesigner>
    </Wrapper>
  );
}

export default App;
