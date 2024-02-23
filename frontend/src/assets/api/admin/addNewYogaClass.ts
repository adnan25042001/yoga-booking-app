const url = import.meta.env.VITE_API_URL;

export const addNewYogaClassHandler = async (yogaData: YogaClass) => {
    const cookies: { [key: string]: string } = document.cookie
        .split(";")
        .reduce((cookies, item) => {
            const [name, value] = item.split("=");
            cookies[name.trim()] = value;
            return cookies;
        }, {} as { [key: string]: string });

    let res = await fetch(`${url}/yoga/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "auth-token": cookies["auth-token"],
        },
        body: JSON.stringify(yogaData),
    });

    let data = await res.json();

    if (!data || !data.success) {
        console.log(data);
    }

    return data.yogaClass;
};
