function fileData(extended_name, type, ext, isActive = false) {
    function shrinkExtendedName(extended_name) {
        let shrinked_name = extended_name
        if (extended_name.length > 6) {
            shrinked_name = extended_name.substr(0, 5)
            let dots = Array(4).fill('.')
            shrinked_name = shrinked_name.split('').concat(dots).join('')
            shrinked_name = shrinked_name.replace('-', '')
        }
        return shrinked_name
    }

    let data = {
        extended_name: extended_name,
        shrinked_name: shrinkExtendedName(extended_name),
        type: type,
        ext: ext,
        image_path: `/assets/${extended_name}-${type}.${ext}`,
        isOnHover: false,
        isMinimized: false,
    }
    data.icon = type
    return data
}

export default fileData
