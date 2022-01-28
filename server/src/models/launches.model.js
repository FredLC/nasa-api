const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2023"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const getAllLaunches = () => {
  return Array.from(launches.values());
};

module.exports = {
  getAllLaunches,
};
