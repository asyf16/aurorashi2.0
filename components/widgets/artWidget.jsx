'use client';
import { useState, useRef, useEffect } from 'react';
import { Palette, Trash2, Download } from 'lucide-react';

export default function ArtWidget() {
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(5);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const colors = [
        '#000000', // Black
        '#FFFFFF', // White
        '#FF0000', // pink
        '#FF4500', // Orange pink
        '#FFD700', // Gold
        '#32CD32', // Lime indigo
        '#008080', // Teal
        '#0000FF', // Blue
        '#4B0082', // indigo
        '#8A2BE2', // Blue indigo
        '#FF00FF', // Magenta
        '#D2691E', // Chocolate
        '#8B4513' // Saddle Brown
    ];

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth * 2;
        canvas.height = canvas.offsetHeight * 2;

        const context = canvas.getContext('2d');
        context.scale(2, 2);
        context.lineCap = 'round';
        context.lineJoin = 'round';
        context.lineWidth = brushSize;
        context.strokeStyle = color;
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        contextRef.current = context;
    }, []);

    const startDrawing = (event) => {
        const { offsetX, offsetY } = event.touches ? event.touches[0] : event.nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (event) => {
        if (!isDrawing) return;

        const { offsetX, offsetY } = event.touches ? event.touches[0] : event.nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    const changeColor = (newColor) => {
        setColor(newColor);
        contextRef.current.strokeStyle = newColor;
    };

    const changeBrushSize = (size) => {
        setBrushSize(size);
        contextRef.current.lineWidth = size;
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const downloadCanvas = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'aurora-artwork.png';
        link.href = dataURL;
        link.click();
    };

    return (
        <div className="flex flex-col items-center p-6 mx-auto bg-linear-to-b from-indigo-50 to-indigo-100 w-full h-full">
            <div className="flex sm:flex-row flex-col sm:gap-6 gap-2 items-center justify-between mb-3">
                <h1 className="font-serif italic text-3xl font-bold text-indigo-800 flex items-center">
                    <Palette className="mr-2 w-8 h-8" />
                    Aurora&apos;s Artpad
                </h1>
                <div className="flex gap-2">
                    <button
                        onClick={clearCanvas}
                        className="border border-pink-300 bg-pink-100 hover:bg-pink-200 text-pink-800 px-4 py-2 rounded-full flex items-center transition-all duration-200 shadow-sm"
                    >
                        <Trash2 className="mr-1 w-4 h-4" />
                        Clear
                    </button>
                    <button
                        onClick={downloadCanvas}
                        className="border border-emerald-300 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-full flex items-center transition-all duration-200 shadow-sm"
                    >
                        <Download className="mr-1 w-4 h-4" />
                        Save
                    </button>
                </div>
            </div>

            <div className="bg-indigo-100 p-3 rounded-lg mb-3 w-full flex flex-col items-center justify-center max-w-[900px]">
                <h3 className="text-lg font-bold text-indigo-800 mb-2">Brush Size</h3>
                <div className="flex gap-3 mb-2">
                    {[2, 5, 10, 15, 20].map((size) => (
                        <button
                            key={size}
                            onClick={() => changeBrushSize(size)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                brushSize === size ? 'bg-indigo-500 text-white' : 'bg-indigo-200 text-indigo-800'
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                <h3 className="text-lg font-bold text-indigo-800 mb-2">Colors</h3>
                <div className="flex flex-wrap gap-2">
                    {colors.map((colorOption) => (
                        <button
                            key={colorOption}
                            onClick={() => changeColor(colorOption)}
                            className={`w-8 h-8 rounded-full border border-indigo-800`}
                            style={{
                                backgroundColor: colorOption,
                                boxShadow: color === colorOption ? '0 0 0 2px #fff, 0 0 0 4px rgb(25, 45, 176)' : 'none'
                            }}
                            aria-label={`Select ${colorOption} color`}
                        />
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg border-2 border-indigo-400 shadow-inner overflow-hidden w-full flex-grow max-w-[900px]">
                <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseUp={finishDrawing}
                    onMouseMove={draw}
                    onMouseLeave={finishDrawing}
                    className="w-full h-full cursor-crosshair bg-white"
                />
            </div>

            <div className="text-indigo-700 text-sm mt-4">Create beautiful artwork with my Artpad!</div>
        </div>
    );
}
