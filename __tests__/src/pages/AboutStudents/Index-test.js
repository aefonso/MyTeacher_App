import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Exibição', () => {
    it('Teste de Componentes da Tela AboutStudents', () => {
      const { getByTestId } = render(<App />);
       fireEvent.press(getByTestId("btnTituloAcessarParaSaberMais"))
       expect(getByTestId("imageAluno")).toBeTruthy();
       expect(getByTestId("TituloAlunos")).toBeTruthy();
       expect(getByTestId("descriptionApp")).toBeTruthy();
       expect(getByTestId("nomeAlunos1")).toBeTruthy();
       expect(getByTestId("nomeAlunos2")).toBeTruthy();
       expect(getByTestId("nomeAlunos3")).toBeTruthy();        
    })
})


