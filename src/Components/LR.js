import React from 'react';
import * as math from 'mathjs';

function LR(a, b, c, d) {

    const inputs = [a, b, c, d];
    const weights = [
        [0.00477231, 1.3416132, 0.6130161, 0.9502527],
        [0.44284353, 1.0379936, 0.7680577, -0.1192392],
        [0.07408355, 1.1064067, -0.27424175, 0.6716246],
        [-0.12085315, 0.40104514, -0.14993678, 0.47301817]];
    const biases = [-0.15470666, 1.0727327, 0.10926036, 0.6458496]
    const results = math.multiply(inputs, weights);
    var sums = results.map((val, i) => val + biases[i])
    // console.log(sums);
    // console.log(sums[0]);
    return (
        math.abs(sums)
    )
}

export default LR