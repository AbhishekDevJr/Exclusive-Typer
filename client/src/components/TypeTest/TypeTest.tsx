'use client';

import { randomWords } from "@/helpers/constants";
import { useState } from "react";

interface charCheck {
    [key: number]: boolean,
}

export default function TypeTest() {
    const [input, setInput] = useState('');
    const [currIndex, setCurrIndex] = useState(0);
    const [charCheck, setCharCheck] = useState<charCheck>({});

    const handleInput = (val: string) => {
        setCurrIndex(val.length);
        setInput(val);
        const currUserIn: number = val.length - 1;

        if (randomWords.join(' ')[val.length] === val[val.length - 1]) {
            setCharCheck({ ...charCheck, [currUserIn]: true })
        }
        else {
            setCharCheck({ ...charCheck, [currUserIn]: false });
        }
    }

    return (
        <>
            <main className="container-type-test main-text-color text-[24px] flex justify-start items-center outline outline-[1px] outline-[cyan] flex-wrap gap-[10px]">
                {randomWords.map((item, index) => {
                    return (
                        <div className="relative">
                            {index === 0 && <span className="absolute left-[29.1666px]">|</span>}
                            {item.split('').map((itemC, index: number) => (
                                <>
                                    <span className={`${charCheck[index] === true ? 'color-[green]' : charCheck[index] === false ? 'color-[red]' : undefined}`}>{itemC}</span>
                                </>
                            ))}
                        </div>
                    )
                })}
            </main>
            <input value={input} onChange={(e) => handleInput(e.target.value)} />
        </>
    );
}