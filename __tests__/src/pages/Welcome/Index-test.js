import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Inicialização e Exibição', () => {
    it('Teste de Componentes da Tela Welcome', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("Logo")).toBeTruthy();
        expect(getByTestId("Titulo")).toBeTruthy();
        expect(getByTestId("btnTituloAcessarParaSaberMais")).toBeTruthy();
        expect(getByTestId("btnAcessar")).toBeTruthy();
    })
})

describe('Testes de Navegação', () => {
  it('Navegação de Welcome para CourseList', () => {
      const { getByText ,getByTestId} = render(<App />);
      
      fireEvent.press(getByTestId("btnAcessar"));
      expect(getByText("MyTeacher")).toBeTruthy();
  })
})

describe('Teste de Navegação Saiba Mais', () => {
    it('Navegação de Acesse para saber mais para AboutStudents ', () => {
        const {getByText, getByTestId} = render(<App />);

        fireEvent.press(getByTestId("btnTituloAcessarParaSaberMais"));
        expect(getByText(" Alunos, lindos!!")).toBeTruthy();
    })
})

