import {render, fireEvent} from '@testing-library/react-native';
import App from "../../../../App";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe('Testes de Exibição', () => {
    it('Teste de Componentes da Tela AboutTeacher', () => {
        const { getByTestId } = render(<App />);
        fireEvent.press(getByTestId("btnAcessar"));
        fireEvent.press(getByTestId("btnSaibaMais"));
        fireEvent.press(getByTestId("btnSaibaMaisTeacher"))
        expect(getByTestId("imageTeacher1")).toBeTruthy();
        expect(getByTestId("nameTeacher")).toBeTruthy();
        expect(getByTestId("descriptionTeacher")).toBeTruthy();
       
        
    })
})
