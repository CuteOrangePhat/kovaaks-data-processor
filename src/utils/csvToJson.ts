const csvToJson = (csv: string) => {
    const lines = csv.split("\n");
    const result = {score: '', name: '', hash: ''}
    let headers, values;


    for (let i = 1; i < lines.length; i++) {
        if (lines[i].includes('Weapon,Shots,Hits')) {
            headers = lines[i]
            values = lines[i + 1]
        }
        if (lines[i].includes('Score')) {
            result.score = lines[i].split(',')[1].replace(/[\n\r]+/g, '')
        }
        if (lines[i].includes('Scenario')) {
            result.name = lines[i].split(',')[1].replace(/[\n\r]+/g, '')
        }
    }

    if(!headers || !values) {
        return;
    }

    const splitValues = values.split(',')

    return {
        ...result,
        ...headers.split(',')
            .map(
                (head, i) => ({[head.toLowerCase()]: splitValues[i]})
            ) // Map header values to value... values?
            .filter(data => !!data[Object.keys(data)[0]] && data[Object.keys(data)[0]] !== '\r' ) // Filter out undefined values or values that are only return carriages
            .reduce((acc, curr) => ({...acc, ...curr}), {}) // Reduce Array of objects to single object
    };

}

export default csvToJson;
