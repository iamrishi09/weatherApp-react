import React from 'react';
import './App.css'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
const API_KEY = '3141f64b39da909a28457884ce966ceb'

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    humidity: undefined,
    des: undefined,
    temp: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    if (city && country) {
      console.log(data)
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        des: data.weather[0].description,
        error: ''
      })
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        des: undefined,
        error: 'Please enter the value'
      })
    }
  }
  render() {
    return (
      <div class='hello'>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          des={this.state.des}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default App;
