'use client';
import { useEffect, useRef, useState } from 'react';

export default function GameWidget() {
    const sharkRef = useRef();
    const obstacleRef = useRef();
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const [start, setStart] = useState(true);

    const jump = () => {
        if (sharkRef.current && sharkRef.current.classList != 'jump') {
            sharkRef.current.classList.add('jump');
            setTimeout(function () {
                sharkRef.current.classList.remove('jump');
            }, 300);
        }
    };

    useEffect(() => {
        const isAlive = setInterval(function () {
            const sharkTop = parseInt(getComputedStyle(sharkRef.current).getPropertyValue('top'));

            let obstacleLeft = parseInt(getComputedStyle(obstacleRef.current).getPropertyValue('left'));

            let obstacleTop = parseInt(getComputedStyle(obstacleRef.current).getPropertyValue('top'));

            if (obstacleLeft < 100 && obstacleLeft > 50 && sharkTop + 50 >= obstacleTop) {
                setGameOver(true);
                setStart(false);
            } else {
                setScore(score + 1);
            }
        }, 10);
        return () => clearInterval(isAlive);
    });

    useEffect(() => {
        document.addEventListener('keydown', jump);
        return () => document.removeEventListener('keydown', jump);
    }, []);

    useEffect(() => {
        document.addEventListener('click', jump);
        return () => document.removeEventListener('click', jump);
    }, []);

    return (
        <div className="relative w-full h-full bg-blue-100 overflow-hidden text-black text-center">
            {start ? (
                <div>
                    <div>Start</div>
                    <button
                        onClick={() => {
                            setGameOver(false);
                            setScore(0);
                        }}
                    >
                        Start game
                    </button>
                </div>
            ) : gameOver ? (
                <div>
                    <div>Game Over</div>
                    <div>Score: {score}</div>
                    <button
                        onClick={() => {
                            setGameOver(false);
                            setScore(0);
                        }}
                    >
                        Start again
                    </button>
                </div>
            ) : (
                <>
                    Score : {score}
                    <div
                        id="shark"
                        ref={sharkRef}
                        className="z-[999] w-[50px] h-[50px] relative top-[calc(50%-72px)] left-[50px] bg-blue-500"
                    ></div>
                    <div
                        id="obstacle"
                        ref={obstacleRef}
                        className="obstacle z-[999] w-[20px] h-[40px] relative top-[calc(50%-112px)] left-[100%] bg-red-500"
                    ></div>
                    <div className="w-full h-[50%] absolute bottom-0 bg-emerald-300"></div>
                </>
            )}
        </div>
    );
}
