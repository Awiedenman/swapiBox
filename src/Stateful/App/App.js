import React, { Component } from 'react';
import './App.css';
import { starWarsData } from '../../ApiCalls/ApiCalls';
import ButtonContainer from '../../Stateless/ButttonContainer/ButtonContainer'

class App extends Component {
constructor() {
  super();
  this.state = {
    film : [],
    people : [],
    vehicles : [],
    planets: [],
    favorites: []
  }
}

// const renderLoader() {
    //if(!films.length){
    //render loader
// } else {
//   return filmText
// }

// render CardContainer = () => {
// }

// const renderContinueButton() {
//   if( !this.state.people.length &&
//       !this.state.vehicles.length &&
//       !this.state.planets.length ) {
//         render( 
              // <button 
                  // name='Continue'/>
                  // onClick= { renderCardContainer }
              // )
//       }
// }

// handleInput( category ){
//   const data = await starWarsData( category );
//   const cleanData = await cleanData( data )
//   this.setState( cleanData )
// }

async componentDidMount() {
  const filmDataCall = await starWarsData( 'films' )
    await this.setState({ film: filmDataCall})
  const peopleDataCall = await starWarsData('people')
    await this.setState({ people: peopleDataCall })
  const planetDataCall = await starWarsData( 'planets' )
    await this.setState({ planets: planetDataCall })
  const vehiclesDataCall = await starWarsData( 'vehicles' )
    await this.setState({ vehicles: vehiclesDataCall })

  // console.log(peopleDataCall)

  // console.log(peopleData)
  // console.log( apiCall )
}

  render() {
// {this.renderLoader}
// {this.renderButton}
  //}
    return (
      <div className="App">
        <header className='title'> swapi-box</header>
        <ButtonContainer />
        {/* <CardContainer /> */}
        
      </div>
    );
  }
}

export default App;
