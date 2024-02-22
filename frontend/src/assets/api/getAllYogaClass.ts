const url = import.meta.env.VITE_API_URL;

export const getAllYogaClass = async () => {
    let res = await fetch(`${url}/yoga/getall`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    let data = await res.json();

    if (!data.success) {
        console.log(data);
    }

    const yogaClasses: YogaClass[] | null = data.yogaClass;

    return yogaClasses;
};
