export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  try {
    const response = await fetch('https://wheels2go.onrender.com/api/cars/getallcars'
    );
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    const cars = await response.json();
    console.log(cars)
    return {
      cars
    };
    
  } catch (error) {
    console.error(error);

     


    return {
      cars: [],
      
    };
  }
};
