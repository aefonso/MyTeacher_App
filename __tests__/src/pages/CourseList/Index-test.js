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
        expect(getByTestId("btnSaibaMais")).toBeTruthy();
        
    })
})

describe('Teste de Navegação Saiba Mais', () => {
    it('Navegação de Saiba mais para TeacherList ', () => {
        const { getByTestId} = render(<App />);
        fireEvent.press(getByTestId("btnAcessar"))
        fireEvent.press(getByTestId("btnSaibaMais"));
        expect(getByTestId("TituloTeacherList")).toBeTruthy();
    })
}) 