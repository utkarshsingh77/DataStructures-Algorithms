
var RecentCounter = function() {
    this.pings = [];
};

RecentCounter.prototype.ping = function(t) {
    this.pings.push(t);
    let minTime = t - 3000;
    let counter = 0;
    for (const num of this.pings) {
        if (num >= minTime) counter++;
    }
    return counter;
};
