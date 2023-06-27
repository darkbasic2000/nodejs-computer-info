module.exports = function(os)  {
    let icon
    switch(os) {
        case 'linux':
            icon = '<i class="fa-brands fa-linux fa-4x"></i>'
            break        
        default:
            icon = '<i class="fa-solid fa-laptop-code fa-4x"></i>'
            break     
    }
    return icon
}