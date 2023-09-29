'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import React from "react";
import lotteryBallsImg from '/public/img/lottery-balls.png'

export default function Page() {

    const [drawLaunched, setDrawLaunched] = useState<boolean>(false)
    const [deployInProgress, setDeployInProgress] = useState<boolean>(false);
    const [cid, setCid] = useState<string>('');
    const [deployError, setDeployError] = useState<string>('');

    useEffect(() => {
        if (!drawLaunched) {
            return;
        }

        let ignore = false;

        const drawTitle = "aze";
        const drawRules = "qsd";
        const drawParticipants = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        const drawNbWinners = 5;
        const drawScheduledAt = 1695994069; // in seconds
        setDeployInProgress(true);

        let jsonBody = {
            code: 'demo-smartplay',
            drawTitle,
            drawRules,
            drawParticipants,
            drawNbWinners,
            drawScheduledAt
        }

        fetch("/api/draw/deploy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonBody),
        })
            .then(res => res.json())
            .then(data => {
                if (!ignore) {

                    setDeployInProgress(false)

                    if (data.response.cid) {
                        setCid(data.response.cid);
                    }

                    if (data.error) {
                        setDeployError(data.error.message);
                    }

                }

            });

        return () => {
            ignore = true;
        };
    }, [drawLaunched])


    function newDraw() {
        setDrawLaunched(true)
    }


    return (
        <div className="mx-auto max-w-7xl px-6 pt-24 sm:pt-32 lg:px-8 min-h-full">


            <p className="mt-0 text-xl font-normal tracking-tight mb-16 text-gray-900 sm:text-lg text-center">
                Because transparency matters to our clients,<br />we have created the first lottery on Earth which is 100% transparent. ✨
            </p>

            <button
                onClick={() => { newDraw() }}
                type="button"
                className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                <Image
                        className="w-28 m-auto"
                        src={lotteryBallsImg}
                        alt="Lottery balls"
                    />

                <span className="mt-2 block text-sm font-semibold text-gray-900">New lottery drawing</span>
            </button>

        </div>
    )
}