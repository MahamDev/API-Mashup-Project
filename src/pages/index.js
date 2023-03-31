import fetch from 'node-fetch';

export default function Home(props) {
    const { quote, weather } = props;
    return (
        <div>
            <h1>Weather in London</h1>
            <p>{weather.condition.text}</p>
            <p>{weather.temp_c}°C</p>
            <hr />

            <h1>Quote of the Day</h1>
            <p>{quote.content}</p>
            <p>{quote.author}</p>
        </div>
    );
}

export async function getStaticProps() {
    const quoteResponse = await fetch(
        'https://famous-quotes4.p.rapidapi.com/random?category=all&count=1',
        {
            headers: {
                'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
                'x-rapidapi-key': '19f6d070d4msh76af06e0a034039p16393ajsn6740f60e85e9',
            },
        }
    );
    const quoteData = await quoteResponse.json();
    console.log(quoteData);
    const quote = {
        content: quoteData[0].text,
        author: quoteData[0].author,
    };

    const weatherResponse = await fetch(
        'https://yahoo-weather5.p.rapidapi.com/weather?woeid=44418',
        {
            headers: {
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
                'x-rapidapi-key': '19f6d070d4msh76af06e0a034039p16393ajsn6740f60e85e9',
            },
        }
    );
    const weatherData = await weatherResponse.json();
    const weather = {
        condition: weatherData.current_observation.condition,
        temp_c: weatherData.current_observation.condition.temperature,
    };

    return {
        props: {
            quote,
            weather,
        },
    };
}
