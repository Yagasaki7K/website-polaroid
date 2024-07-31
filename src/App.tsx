import { useState } from 'react'
import styled from 'styled-components'

function App() {
    const [url, setUrl] = useState<string>('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7MUGXFujgtYiDQNy3bhTSxIUH3OfTa4JCp55Dri398-JBxlt-5Xyck1JghKuDC7a8Cmrr5NEk7bcRJGloPMQ8fws6O61Qlmso8Sok0yL5WcLfP1C21l6I6Xk1CeKkytHwYQoGZnnibaIXW3x8fUTpr-oerzIVAegKmnzE6qdB7udQQ4p3WmE9VvWuE1g/s1500/kikis-delivery-service-510353d0e522c.jpg')

    return (
        <HomeDetails>
            <div className="overlay" />
            <div className="content">
                <h1>Welcome to Polaroid ⭐</h1>
                <i>Insert an image URL & take screenshot!</i>
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
            border-bottom: 5.4rem solid var(--white);
            border-left: 1rem solid var(--white);
            border-right: 1rem solid var(--white);
            width: 505px;
            height: 590px;
            object-fit: cover;
        }
    }
`