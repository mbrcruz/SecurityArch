// Duration of your trace, in milliseconds
let TRACE_LENGTH;

// Array of length TRACE_LENGTH with your trace's values
let T;

// Value of performance.now() when you started recording your trace
let start;

function record() {
  // Create empty array for saving trace values
  console.log("Batatinha frita 1 2 3");
  
  T = new Array(TRACE_LENGTH);

  // Fill array with -1 so we can be sure memory is allocated
  T.fill(-1, 0, T.length);

  
  // TODO (Exercise 2-2): Record data for TRACE_LENGTH seconds and save values to T.
  for(let i = 0; i < TRACE_LENGTH; i++){
    // Save start timestamp
    start = performance.now();
    let v = T[i];
    end = performance.now();
    T[i] = start - end;
  }

  // Once done recording, send result to main thread
  postMessage(JSON.stringify(T));
}

// DO NOT MODIFY BELOW THIS LINE -- PROVIDED BY COURSE STAFF
self.onmessage = (e) => {
  if (e.data.type === "start") {
    TRACE_LENGTH = e.data.trace_length;
    setTimeout(record, 0);
  }
};
