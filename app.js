const url = `https://fdo.rocketlaunch.live/json/launches/next/5/`;

async function fetchData() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json(); 
    console.log(data);

    const filteredData = filterLaunches(data);


  } catch (error) {
    console.error('Fetch error:', error);
  }
}



function filterLaunches(data) {
          const localLancnches = [];
    data.result.forEach(flight => {
        
  

        if(flight.pad.location.name.includes("Vandenberg")) {
            localLancnches.push(flight);}

    });
        localLancnches.length === 0 ? console.log("No launches from Vandenberg found.") : console.log(localLancnches);
}