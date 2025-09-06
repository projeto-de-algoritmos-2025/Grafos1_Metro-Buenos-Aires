import { Station, Graphs } from '@/app/station';

export function findShortestPath(startId: string, endId: string): Station[] | null {
  if (startId === endId) {
    const station = Graphs.find(s => s.id === startId);
    return station ? [station] : null;
  }
  const stationsObj: { [id: string]: Station } = {};
  for (const station of Graphs) {
    stationsObj[station.id] = station;
  }

  const queue: string[][] = [[startId]];
  const visited: { [id: string]: boolean } = { [startId]: true };

  while (queue.length > 0){
    const path = queue.shift()!;
    const currentId = path[path.length - 1];
    const currentNode = stationsObj[currentId];

    if (currentNode) {
      for (const neighborId of currentNode.list_neighbor) {
        const neighborIdStr = neighborId.toString();

        if (!visited[neighborIdStr]) {
          visited[neighborIdStr] = true;
          const newPath = [...path, neighborIdStr];

          if (neighborIdStr === endId) {
            return newPath.map(id => stationsObj[id]);
          }

          queue.push(newPath);
        }
      }
    }
  }

  return null;
}