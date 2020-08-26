import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Memegenerator.css';

const MemeGenerator = ({ actualizarTextos }) => {


    const [generator, setGenerator] = useState({
        topText: '',
        bottomText: '',
    });

    const [imagen, setImagen] = useState('')

    const { topText, bottomText, img } = generator

    const updateGenerator = e => {
        setGenerator({
            ...generator,
            [e.target.name]: e.target.value
        })
    };


    useEffect(() => {
        const getData = async () => {
            const response = await axios.get("https://api.imgflip.com/get_memes");
            const random = Math.floor(Math.random(response.data.data.memes) * 55)
            console.log(random)
            const memes = response.data.data.memes[`${random}`].url
            setImagen(memes)
        }

        getData()
    }, [])


    const actualizarMeme = e => {
        e.preventDefault()
        console.log('enviando')
        actualizarTextos(generator)
    }


    return (
        <div className='generator'>
            <form onSubmit={actualizarMeme}>
                <label>Write your first word</label>
                <input
                    type='text'
                    name='topText'
                    placeholder='Write here'
                    value={topText}
                    onChange={updateGenerator}
                />
                <label>Write your second word</label>
                <input
                    type='text'
                    name='bottomText'
                    placeholder='Write here'
                    value={bottomText}
                    onChange={updateGenerator}
                />
                <button
                    type='submit'
                >Generate Now!</button>

                <img
                    className='memeImg'
                    src={imagen}
                />
            </form>

            {
                topText ? <p>{topText}</p> : null
            }
        </div>
    )
}

export default MemeGenerator;
