const fs = require('fs')

const stats = fs.readdirSync('C:\\Program Files (x86)\\Steam\\steamapps\\common\\FPSAimTrainer\\FPSAimTrainer\\stats')


window.addEventListener('DOMContentLoaded', () => {
    console.log(stats)
})
