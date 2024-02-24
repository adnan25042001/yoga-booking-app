import { Link } from "react-router-dom";

type Props = {
    id: string;
};

const JoinBtn = ({ id }: Props) => {
    return (
        <Link
            to={`/yoga-class/${id}`}
            className="py-2 px-8 bg-mainClr text-sm xs:text-base text-white font-medium rounded-lg border-2 border-mainClr hover:bg-transparent hover:text-black cursor-pointer"
        >
            Join
        </Link>
    );
};

export default JoinBtn;
