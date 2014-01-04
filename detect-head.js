// Timing detection part 1 (goes to <head>)
var perf = window.performance;
var start = perf.timing.requestStart; // just before page is requested
var end = perf.timing.responseStart; // first byte received
var total_time = end - start;