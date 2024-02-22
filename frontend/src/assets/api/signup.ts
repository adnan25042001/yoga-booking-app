const url = import.meta.env.VITE_API_URL;

export const signupHandler = async (signupData: SignupObj) => {
    let res = await fetch(`${url}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
    });

    let data = await res.json();

    if (data && data.authtoken && data.role) {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        document.cookie = `auth-token=${
            data.authtoken
        }; expires=${expiryDate.toUTCString()}; path=/`;
        document.cookie = `role=${
            data.role
        }; expires=${expiryDate.toUTCString()}; path=/`;
    } else {
        console.log(
            "Data is not defined or does not have the required properties"
        );
    }

    return data;
};
