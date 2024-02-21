const url = import.meta.env.VITE_API_URL;

export const signupHandler = async (signupData: SignupObj) => {

    console.log(signupData)

    const expiryDate = new Date();

    let res = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
    });

    let data = await res.json();

    if (data.success) {
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `auth-token=${data.authtoken}; role=${
            data.role
        }; expires=${expiryDate.toUTCString()}; path=/`;

        console.log(data);
    } else {
        console.log(data);
    }

    return data;
};
