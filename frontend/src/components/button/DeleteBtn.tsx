import { useEffect } from "react";

type Props = {
    id: string;
};

const DeleteBtn = ({ id }: Props) => {
    useEffect(() => {
        console.log(id);
    }, [id]);

    return (
        <button
            onClick={() => alert("Delete function will be added soon")}
            className="py-2 px-6 bg-mainClr text-sm xs:text-base text-white font-medium rounded-lg border-2 border-mainClr hover:bg-transparent hover:text-black cursor-pointer"
        >
            Delete
        </button>
    );
};

export default DeleteBtn;
