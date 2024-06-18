import { useState } from 'react'
import styled from 'styled-components'

function App() {
    const [url, setUrl] = useState<string>('https://github.com/yagasaki7k.png')

    return (
        <HomeDetails>
            <div className="overlay" />
            <div className="content">
                <h1>Welcome to Polaroid</h1>
                <i>Insert an image URL, take screenshot and remove the background!</i>
                <input type="text" onChange={e => setUrl(e.target.value)} placeholder='Insert an image URL' />

                <img src={url} alt="Polaroid Style" />
            </div>
        </HomeDetails>
    )
}

export default App

const HomeDetails = styled.div`
    .content {
        margin-top: 8rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h1, h2, h3, h4 {
            color: var(--header);
            font-family: Inter, sans-serif;
        }

        p, i {
            color: var(--font);
            font-family: Inter, sans-serif;
        }

        input {
            background: var(--background-alt);
            color: var(--font);
            width: 30%;
            margin-top: 1rem;
            border: none;
            outline: none;
            padding: 0.5rem;
            font-size: 1rem;
            border-radius: 0.5rem;
            text-align: center;
        }

        img {
            margin-top: 4rem;
            transform: rotate(6deg);
            border-top: 2rem solid var(--white);
            border-bottom: 5rem solid var(--white);
            border-left: 1rem solid var(--white);
            border-right: 1rem solid var(--white);
            width: 505px;
            height: 590px;
        }
    }
`