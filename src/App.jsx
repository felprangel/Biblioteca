import styled from "styled-components"
import Cabecalho from "./components/Cabecalho"

function App() {
    return (
    <>
        <Cabecalho />
        <Main>

        </Main>
    </>
)
}

const Main = styled.div`
    background-color: #F0EEF1;
    box-shadow: inset 0px 5px 15px -3px rgba(0,0,0,0.1);
    height: 100vh;
`

export default App
