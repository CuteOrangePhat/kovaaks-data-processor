function csvToJson(csv) {
    const lines = csv.split("\n");
    let headers, values;
    let result = {Score: '', Scenario: ''}

    for (let i = 1; i < lines.length; i++) {
        if (lines[i].includes('Weapon,Shots,Hits')) {
            headers = lines[i]
            values = lines[i + 1]
        }
        if (lines[i].includes('Score')) {
            result.Score = lines[i].split(',')[1].replace(/[\n\r]+/g, '')
        }
        if (lines[i].includes('Scenario')) {
            result.Scenario = lines[i].split(',')[1].replace(/[\n\r]+/g, '')
        }
    }

    if(!headers || !values) {
        return;
    }

    const splitValues = values.split(',')

    return {
        ...result,
        ...headers.split(',')
            .map((head, i) => ({[head]: splitValues[i]})) // Map header values to value... values?
            .filter(data => !!data[Object.keys(data)[0]] && data[Object.keys(data)[0]] !== '\r' ) // Filter out undefined values or values that are only return carriages
            .reduce((acc, curr) => ({...acc, ...curr}), {}) // Reduce Array of objects to single object
    };

}

module.exports = csvToJson;
