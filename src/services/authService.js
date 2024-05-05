
class AuthService{

    // signup(data){
    //     // const data = {
    //     //     full_name: "test name",
    //     //     email: "e.karray@reactdev.com",
    //     //     password: "123456789"
    //     // }
    //     fetch('/api/accounts/signup', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //           },
    //         body: JSON.stringify(data)
    //     }).then(res => {
    //           return res.json()
    //     })
    //     .then(data => {
    //         console.log(data.data.account)
    //         return data.data
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }
    

    // login(data){
    //     // const data = {
    //     //     email: "e.karray@reactdev.com",
    //     //     password: "123456789"
    //     // }
    //     fetch('/api/accounts/login', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //           },
    //         body: JSON.stringify(data)
    //     }).then(res => {
    //         if (res.status !== 200) {
                
    //             throw new Error('Invalid Credentials');
    //         }
    //         console.log(res.status)
    //         return res.json();
    
    //     })
    //     .then(data => {
    //         console.log(data)
    //         return data.data
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }

    async signup(data) {
        try {
            const res = await fetch('/api/accounts/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (res.status !== 201) {
                throw new Error('Invalid credentials entered');
            }
            const responseData = await res.json();
            console.log(responseData);
            return responseData.data;
        } catch (error) {
            console.error('Login error:', error.message);
            throw error; // Re-throw the error to be handled by the caller
        }
    }

    async login(data) {
        try {
            const res = await fetch('/api/accounts/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (res.status !== 200) {
                throw new Error('Invalid credentials');
            }
            const responseData = await res.json();
            console.log(responseData);
            return responseData.data;
        } catch (error) {
            console.error('Login error:', error.message);
            throw error; // Re-throw the error to be handled by the caller
        }
    }
}
const authService = new AuthService()
export default authService