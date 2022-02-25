import styled from 'styled-components';
import { CraftDesigner } from './designer/CraftDesigner';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
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
