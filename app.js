const url = `https://fdo.rocketlaunch.live/json/launches/next/5/`;
let flightData = "";

async function fetchData() {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    flightData = data.result;

    //console.log(flightData); ////////////////For checking log of ALL flights

    const filteredData = filterLaunches(flightData);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

function filterLaunches(data) {
  const localLaunches = [];
  data.forEach((flight) => {
    if (flight.pad.location.name.toLowerCase().includes("cape")) {
      localLaunches.push(flight);
    }
  });
  const len = localLaunches.length;
  if (len === 0) {
    console.log("No launches from Vandenberg found.");
  } else if (len === 1) {
    console.log(`1 Launch scheduled from Vandenberg found`, localLaunches);
  } else {
    console.log(
      localLaunches.length + ` launches scheduled from Vandenberg found`,
      localLaunches,
    );
  }
}
