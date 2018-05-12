import { homeworldNameData, homeworldPopulationData, personSpeciesData, planetResidents } from '../ApiCalls/ApiCalls'

const cleaner = ( data, category ) => {
  switch (category ) {
  
    case 'people':

      const cleanPeople = data.results.map( async person => {
        // console.log(person)
        return {
            name: `\${ person.name }`,
            data: {
                homeworld: `Homeworld: ${ await homeworldNameData(person.homeworld) }`,
                populationOfHomeworld: `Population: ${ await homeworldPopulationData(person.homeworld) }`,
                species: `Species: ${ await personSpeciesData(person.species) }`
            }
            
        }
      })
      // console.log(Promise.all(cleanPeople))
      return Promise.all(cleanPeople)

    case 'vehicles':

      const cleanVehicles = data.results.map(vehicle => {
        return {
            name: `${ vehicle.name }`,
            data: {
                model: `Model: ${ vehicle.model }`,
                class: `Class: ${ vehicle.class }`,
                NumberOfPassengers: `Passengers: ${ vehicle.passengers }`
            }
        }
      })
      return cleanVehicles;

    case 'films':

      const cleanFilms = data.results.map( film => {
        return {
          title: film.title, 
          crawl: film.opening_crawl,
          releaseDate: film.release_date
        }
      })
      return cleanFilms;


    case 'planets':

      const cleanPlanet = data.results.map( async planet => {
        
        const residents = planet.residents.map( async resident => {
          return planetResidents( resident )
        })
        
        const residentInfo = await Promise.all(residents)

        return {
            name: `${ planet.name }`,
            data: {
              Terrain: `Terrain: ${ planet.terrain }`,
              Population: `Population: ${ planet.population }`,
              Climate: `Climate: ${ planet.climate }`,
              Residents: `Residents: ${ residentInfo }`
            }
        } 
      })
      
      return Promise.all(cleanPlanet)
    default: return 'howdy';
  }
}

export default cleaner;