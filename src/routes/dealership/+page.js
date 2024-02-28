export const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  try {
    const response = await fetch('https://wheels2go.onrender.com/api/dealership/getalldealership'
    );
    if (!response) {
      throw new Error('Failed to fetch data');
    }
    const postcodes = await response.json();
    
    return {
      postcodes
    };
    
  } catch (error) {
    console.error(error);

     


    return {
      postcodes: [],
      
    };
  }
};
