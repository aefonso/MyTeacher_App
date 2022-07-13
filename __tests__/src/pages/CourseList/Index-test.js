import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Exibição', () => {
    it('Teste de Componentes da Tela CourseList', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("btnAcessar"))
        expect(getByTestId("TituloMyteacher2")).toBeTruthy();
        expect(getByTestId("TituloListaCursos")).toBeTruthy();
        expect(getByTestId("TituloDispositosMoveis")).toBeTruthy();
        expect(getByTestId("TituloSI")).toBeTruthy();
        //expect(getByTestId("btnSaibaMais")).toBeTruthy();
        expect(getByTestId("TituloTesteDeSoftware")).toBeTruthy();
        expect(getByTestId("TituloSI2")).toBeTruthy();
        
    })
})

//describe('Teste de Navegação Saiba Mais', () => {
  //  it('Navegação de Saiba mais para AboutTeacher ', () => {
    //    const {getByText, getByTestId} = render(<App />);

      //  fireEvent.press(getByTestId("btnSaibaMais"));
        //expect(getByText("MyTeacher")).toBeTruthy();
 //   })
//}) 

