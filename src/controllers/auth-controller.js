import axios from "axios";

class AuthController {
    async register(Fname, Lname, email, password) {
        try {
            let response = await axios.post('http://127.0.0.1:5000/api/user/signup',
                {
                    Fname: Fname,
                    Lname: Lname,
                    email: email,
                    password: password,
                    returnSecureToken: true,
                });
            return response;/*{ status: true, message: "registered successfully", token: response.data.idToken, }*/
        } catch (error) {
            return { status: false, message: "registration failed try again" }
        }
    }
}

export default AuthController;
