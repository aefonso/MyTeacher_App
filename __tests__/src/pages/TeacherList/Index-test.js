import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Exibição', () => {
    it('Teste de Componentes da Tela TeacherList', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("btnAcessar"))
        fireEvent.press(getByTestId("btnSaibaMais"))
        expect(getByTestId("TituloTeacherList")).toBeTruthy();
        expect(getByTestId("ListProfessores")).toBeTruthy();
        expect(getByTestId("btnSaibaMaisTeacher")).toBeTruthy();
        expect(getByTestId("ImageTeacher")).toBeTruthy();
        
    })
})

describe('Teste de Navegação Saiba Mais', () => {
    it('Navegação de Saiba mais para AboutTeacher ', () => {
        const { getByTestId} = render(<App />);
        fireEvent.press(getByTestId("btnAcessar"))
        fireEvent.press(getByTestId("btnSaibaMais"));
        fireEvent.press(getByTestId("btnSaibaMaisTeacher"))
        expect(getByTestId("imageTeacher1")).toBeTruthy();
    })
}) 