

export default function Lamp() {
    const trapezoidStyle = {
        clipPath: 'polygon(30% 0%, 70% 0%, 120% 120%, 0% 100%)',
        WebkitClipPath: 'polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)',
        width: '280px',
        height: '90px',
        background: 'linear-gradient(to bottom, #cecaff20 0%, transparent 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div className="flex flex-col items-center justify-center w-full relative">
            <div
                className={`w-full max-w-lg h-[400px] rounded-full bg-[#b2acd120] blur-3xl transition-all duration-300 absolute top-0 z-0`}
            ></div>

            <div style={trapezoidStyle} className="absolute top-0 z-0"> </div>

            <div className="w-[130px] max-w-xl z-0 sm:mb-20 mb-16">
                <div
                    className={`h-1 bg-[#cecaff] rounded-full transition-colors duration-300`}
                ></div>
            </div>
        </div>
    );
}
