
//Explanation:

// This implementation of a circular linked list is used to keep track of the number of waiting vehicles at each traffic signal. 
// Each node in the list represents a signal and contains the number of waiting vehicles.
// The list is circular, meaning that the last node's next pointer points to the first node.

class TrafficSignalNode {
  constructor(waitingVehicles) {
    this.waitingVehicles = waitingVehicles;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  addNode(waitingVehicles) {
    const newNode = new TrafficSignalNode(waitingVehicles);

    if (!this.head) {
      this.head = newNode;
      newNode.next = newNode; // Circular reference
    } else {
      const current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  findLongestQueuePosition() {
    let longestQueuePosition = 1;
    let maxWaitingVehicles = 0;
    let current = this.head;
    let position = 1;

    do {
      if (current.waitingVehicles > maxWaitingVehicles) {
        maxWaitingVehicles = current.waitingVehicles;
        longestQueuePosition = position;
      }

      current = current.next;
      position++;
    } while (current !== this.head);

    return longestQueuePosition;
  }
}



// Example usage:
const trafficSignals = new CircularLinkedList();
trafficSignals.addNode(10);
trafficSignals.addNode(5);
trafficSignals.addNode(8);
trafficSignals.addNode(12);
trafficSignals.addNode(7);

const longestQueuePosition = trafficSignals.findLongestQueuePosition();
console.log("Position of the signal with the longest queue:", longestQueuePosition);