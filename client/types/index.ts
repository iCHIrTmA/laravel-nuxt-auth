declare global {
    interface LoginForm {
        email: string;
        password: string;
    }

    interface RegisterForm {
        name: string;
        email: string;
        password: string;
    }

    interface User {
        id: number;
        name: string;
        email: string;
    }
}
