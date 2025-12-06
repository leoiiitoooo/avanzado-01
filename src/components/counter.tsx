import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [esPar, setEsPar] = useState(true);

    useEffect(() => {
        if (count % 2 === 0) {
            setEsPar(true);
        }else {
            setEsPar(false);
        }
    }, [count]);

    return (
        <div
        className={´w-screen text-[#FCFCFD] ${
        esPar ? "bg-orange-500" : "bg-[#3843D0]"
        } h-screen flex flex-col justify_center items-center py-10 px-4´
    >
        <h1 className="text-3xl mb-6 font-semibolt">Contador Educa</h1>
        <p className="text-6xl font-bold">{count}</p>
        <button
        className={´mt-8 px-6 py-2 ${
            esPar ? "text-orange-500" : "text-[#3843D0]"
        } border-2 bg-white font-medium rounded-lg hover:bg-[#FCFCFD] transition duration-150´}
        onclick={() => {
            setCount(count + 1);
        }}}
    >
        Sumar +1
        </button>
    </div>
    );
};

export default Counter;