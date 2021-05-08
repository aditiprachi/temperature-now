import React, {useState, useEffect} from 'react'
import './css/style.css'
import axios from 'axios'

function TempApp() {
    const [city, setCity] = useState('Mumbai')
    const [result , setResult] = useState({temp:'', min:'', max:''})
    const [def , setDef] = useState('')

    const changeHandler = (e) => {
        setCity(e.target.value)
        
    }
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=44dc9ea8e39f5201664d59a3572a9d27`)
        .then(res => {
            console.log(res)
            setResult({
                temp: res.data.main.temp,
                min: res.data.main.temp_min,
                max: res.data.main.temp_max
            })
            setDef(res.data.main)
        })
        .catch(error => {
            console.log(error)
            setResult({
                temp: '',
                min: '',
                max: ''
            })
            setDef('')
        })
    },[city])
    return (
        <div>
            <div>
                <h1 className='heading'>Temperature Now</h1>
            </div>
            <div className='box'>
                <div className='inputData'>
                    <input className='inputFeild' type='text' onChange={changeHandler} value={city}>

                    </input>
                </div>   
                {!def ? 
                    (<h1 className='errorInfo'>No data found</h1>) :
                    (<div>
                        <div className='info'>
                            <h2 className='location'>
                                <i className="fas fa-map-marker-alt"></i>
                                {city}
                            </h2>
                            <h1 className='temp'>
                                {result.temp} 
                            </h1>
                            <h3 className='tempmin_max'>Max {result.max} | Min {result.min}</h3>
                        </div>
                    </div>)
                }
                <div className='wave'>
                </div>
            </div>
        </div>
    )
}

export default TempApp
