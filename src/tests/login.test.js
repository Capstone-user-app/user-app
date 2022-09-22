import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../components/login";

describe('Login test', () => {
    test('se logea usuario', () => {

        render(<Login/>);

        const inputEmail = screen.getByLabelText('Email');

        // userEvent.
    });
});