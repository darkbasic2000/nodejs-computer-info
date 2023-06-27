const os = require('os')
const os_icon = require('../utils/util')

const index = (req, res) => {    
    const platform = os.platform()
    const cpus = os.cpus()    
    const freemem = os.freemem()
    
    const icon = os_icon(platform)
    res.render('index', {
        title: 'Home', 
        cpu: cpus[0].model, 
        freemem: (freemem / 1024 / 1024).toFixed(3) + ' MB',
        platform,
        icon
    })
}

const os_details = (req, res) => {    
    const platform = os.platform()
    const version = os.version()
    const icon = os_icon(platform)
    res.render('os', {
        title: 'OS (Details)',
        platform,
        version,
        icon
    })
}

const cpu_details = (req, res) => {    
    const cpus = os.cpus()
    const arch = os.arch()
    res.render('cpu', {
        title: 'CPU (Details)',
        cpus,
        arch
    })
}

const memory_details = (req, res) => {    
    const freemem = os.freemem()
    const totalmem = os.totalmem()
    res.render('memory', {
        title: 'Memory (Details)',
        freemem,
        totalmem
    })    
}

module.exports = {
    index, os_details, cpu_details, memory_details
}