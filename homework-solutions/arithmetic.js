/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let currentSegment = '';
    let stack = [];
    let sum = 0;

    for(let c of s) {
        if(c === ' ') continue;

        else if(c === '(') {
            // push current segment, begin new segment
            stack.push(currentSegment);
            currentSegment = '';
        }
        else if(c === ')') {
            // handle current segment, pop old segment
            let prevSegment = stack.pop();
            let segmentValue = handleSegment(currentSegment);
            currentSegment = prevSegment + String(segmentValue);
        }
        else {
            currentSegment += c;
        }
    }

    sum += handleSegment(currentSegment);
    return sum;
};

var handleSegment = function(segment) {
    let sum = 0;
    let currentNumber = '';
    let signModifier = 1;
    let lastCharWasSub = false;

    for(let c of segment) {
        if(c === '+') {
            sum += signModifier * Number(currentNumber);
            signModifier = 1;
            currentNumber = '';
            lastCharWasSub = false;
        }
        else if(lastCharWasSub && c === '-') {
            signModifier = signModifier * -1;
            lastCharWasSub = true;
        }
        else if(c === '-') {
            sum += signModifier * Number(currentNumber);
            signModifier = -1;
            currentNumber = '';
            lastCharWasSub = true;
        }
        else  {
            currentNumber += c;
            lastCharWasSub = false;
        }
    }

    return sum + (signModifier * Number(currentNumber));
};
