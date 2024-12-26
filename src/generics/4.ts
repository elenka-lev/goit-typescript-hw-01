type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial <User>) : User {
    // Оновлення користувача
    const newUser: User = {
        name: '',
        surname: '',
        email: '',
        password: '',
    }
    return { ...newUser, ...initialValues };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});