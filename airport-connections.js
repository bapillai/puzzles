//Airport Connections:
//To write a function that returns the minimum number of connections that needs to be added to airports so that someone can reach every airport in the airport list from a starting airport. 
class AirportNode{
    constructor(airport){
      this.airport = airport;
      this.isReachable = true;
      this.connections = [];
      this.unreachableConnections = [];
    }
  }
  
  function createAirportGraph(airports,routes){
    let airportGraph = {};
    for(const airport of airports){
      airportGraph[airport] = new AirportNode(airport);
    }
    for(const route of routes){
      const [airport,connection] = route;
      airportGraph[airport].connections.push(connection);
    }
    return airportGraph;
  }
  
  function getUnreachableAirportNodes(airportGraph,airports,startingPoint){
    let visitedAirports = {};
    let unreachableAirportNodes = [];
    depthFirstSearchAirports(airportGraph,startingPoint,visitedAirports);
    for(const airport of airports){
      if(airport in visitedAirports){
        continue;
      }
      const airportNode = airportGraph[airport];
      airportNode.isReachable = false;
      unreachableAirportNodes.push(airportNode);
    }
    return unreachableAirportNodes;
  }
  
  function markUnreachableAirportConnections(airportGraph,unreachableAirportNodes){
    for(const airportNode of unreachableAirportNodes){
      const {airport} = airportNode;
      const unreachableConnections = [];
      depthFirstSearchConnections(airportGraph,airport,unreachableConnections,{});
      airportNode.unreachableConnections = unreachableConnections;
    }
  }
  
  function getMinNumberOfAirportConnections(airportGraph,unreachableAirportNodes){
    unreachableAirportNodes.sort((a,b) => b.unreachableConnections.length - a.unreachableConnections.length);
    let unreachableConnectionCount = 0;
    for(const airportNode of unreachableAirportNodes){
      if(airportNode.isReachable){
        continue;
      }
      unreachableConnectionCount++;
      for(const connection of airportNode.unreachableConnections){
        airportGraph[connection].isReachable = true;
      }
    }
    return unreachableConnectionCount;
  }
  
  function depthFirstSearchAirports(airportGraph,airport,visitedAirport){
    if(airport in visitedAirport){
      return;
    }
    visitedAirport[airport] = true;
    const {connections} = airportGraph[airport];
    for(const connection of connections){
      depthFirstSearchAirports(airportGraph,connection,visitedAirport);
    }
  }
  
  function depthFirstSearchConnections(airportGraph,airport,unreachbleConnections,visitedAirports){
    if(airportGraph[airport].isReachable){
      return;
    }
    if(airport in visitedAirports){
      return;
    }
    visitedAirports[airport] = true;
    unreachbleConnections.push(airport);
    const {connections} = airportGraph[airport];
    for(const connection of connections){
      depthFirstSearchConnections(airportGraph,connection,unreachbleConnections,visitedAirports)
    }
  }
  
  function airportConnections(airports,routes,startingPoint){
    let airportGraph = createAirportGraph(airports,routes);
    let unreachableAirportNodes = getUnreachableAirportNodes(airportGraph,airports,startingPoint);
    markUnreachableAirportConnections(airportGraph,unreachableAirportNodes);
    return getMinNumberOfAirportConnections(airportGraph,unreachableAirportNodes);
  }
  
  const AIRPORTS = [
    'BGI',
    'CDG',
    'DEL',
    'DOH',
    'DSM',
    'EWR',
    'EYW',
    'HND',
    'ICN',
    'JFK',
    'LGA',
    'LHR',
    'ORD',
    'SAN',
    'SFO',
    'SIN',
    'TLV',
    'BUD',
  ];
  
  const STARTING_AIRPORT = 'LGA';
  
  const routes = [
      ['LGA', 'DSM'],
      ['DSM', 'ORD'],
      ['LGA', 'EYW'],
      ['EYW', 'JFK'],
      ['EYW', 'EWR'],
      ['JFK', 'ICN'],
  ];
  
  
  console.log(airportConnections(AIRPORTS,routes,STARTING_AIRPORT))
  
  