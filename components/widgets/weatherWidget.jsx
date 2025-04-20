'use client';
import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Droplets, Wind, CloudFog, CloudLightning, CloudSnow } from 'lucide-react';

export default function WeatherWidget() {
    const [weatherData, setWeatherData] = useState({
        description: 'Loading...',
        temp: 0,
        tempMin: 0,
        tempMax: 0,
        humidity: 0,
        windSpeed: 0,
        location: 'Waterloo',
        country: 'CA',
        icon: 'clear'
    });
    const [loading, setLoading] = useState(true);

    const getWeather = async (lat, lon) => {
        try {
            const result = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}&units=metric`
            );
            const data = await result.json();

            return {
                description: data?.weather?.[0]?.description || 'No data found',
                temp: Math.round(data?.main?.temp) || 0,
                tempMin: Math.round(data?.main?.temp_min) || 0,
                tempMax: Math.round(data?.main?.temp_max) || 0,
                humidity: data?.main?.humidity || 0,
                windSpeed: data?.wind?.speed || 0,
                location: 'Waterloo',
                country: data?.sys?.country || '',
                icon: data?.weather?.[0]?.main?.toLowerCase() || 'clear'
            };
        } catch (e) {
            console.log(e);
            return {
                description: 'No data found',
                temp: 0,
                tempMin: 0,
                tempMax: 0,
                humidity: 0,
                windSpeed: 0,
                location: 'Error',
                country: '',
                icon: 'clear'
            };
        }
    };

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            const data = await getWeather('43.47', '80.52');
            setWeatherData(data);
            setLoading(false);
        };
        fetchWeather();
    }, []);
    
    const getWeatherIcon = (iconType) => {
        switch (iconType.toLowerCase()) {
            case 'clear':
                return <Sun size={37} className="text-yellow-300" />;
            case 'clouds':
                return <Cloud size={37} className="text-gray-200" />;
            case 'rain':
                return <CloudRain size={37} className="text-gray-200" />;
            case 'drizzle':
                return <Droplets size={37} className="text-blue-200" />;
            case 'thunderstorm':
                return <CloudLightning size={37} className="text-gray-200" />;
            case 'snow':
                return <CloudSnow size={37} className="text-white" />;
            case 'mist':
            case 'fog':
            case 'haze':
                return <CloudFog size={37} className="text-gray-200" />;
            default:
                return <Sun size={37} className="text-yellow-300" />;
        }
    };
    
    if (loading) {
        return (
            <div className="p-6 bg-gradient-to-br from-blue-600 to-cyan-200 h-full w-full flex flex-col items-center justify-center text-white">
                <p className="text-xl font-medium">Loading weather data...</p>
            </div>
        );
    }

    return (
        <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-200 h-full w-full text-white flex flex-col justify-between">
            <div className="text-center">
                <h3 className="text-2xl font-semibold">{weatherData.location}</h3>
                <p className="text-lg opacity-80">{weatherData.description}</p>
            </div>
            
            <div className="flex justify-center items-center gap-2">
                <div className="">
                    {getWeatherIcon(weatherData.icon)}
                </div>
                <div className="text-2xl font-bold">{weatherData.temp}°</div>
            </div>
            
            <div className="flex justify-center">
                <div className="flex items-center">
                    <span className="text-md mr-1">H: {weatherData.tempMax}°</span>
                    <span className="text-md mx-2">|</span>
                    <span className="text-md ml-1">L: {weatherData.tempMin}°</span>
                </div>
            </div>
        </div>
    );
}