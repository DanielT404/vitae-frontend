const mockFileResponse = () => {
    const response = {
        "success": true,
        "files": [
            {
                "Id": "2abcsd213sdafv",
                "Type": "image", 
                "Key": "mariacrypto.jpg", 
                "ResourcePath": "https://picsum.photos/200/301",   
                "MaterialIcon": "image",
                "KeyShrinked": "mariacry...",
                "Extension": "jpg"
            },
            {
                "Id": "3asdvcxj21395sc",
                "Type": "image", 
                "Key": "imgtest.jpg", 
                "ResourcePath": "https://picsum.photos/200/302",   
                "MaterialIcon": "image",
                "KeyShrinked": "imgt...",
                "Extension": "jpg"
            },
            {
                "Id": "svxzvz3235152scxz",
                "Type": "image", 
                "Key": "weeeees.jpg", 
                "ResourcePath": "https://picsum.photos/200/303",   
                "MaterialIcon": "image",
                "KeyShrinked": "weeees...",
                "Extension": "jpg"
            },
            {
                "Id": "vxzcw230921",
                "Type": "image", 
                "Key": "deeeees.jpg", 
                "ResourcePath": "https://picsum.photos/200/304",   
                "MaterialIcon": "image",
                "KeyShrinked": "deeees...",
                "Extension": "jpg"
            },
            {
                "Id": "bbbzxco2u5nnko21",
                "Type": "image", 
                "Key": "ceeeees.jpg", 
                "ResourcePath": "https://picsum.photos/200/305",   
                "MaterialIcon": "image",
                "KeyShrinked": "ceeees...",
                "Extension": "jpg"
            },
            {
                "Id": "3xcxzvwqelsowepac",
                "Type": "image", 
                "Key": "aeeeees.jpg", 
                "ResourcePath": "https://picsum.photos/200/306",   
                "MaterialIcon": "image",
                "KeyShrinked": "aeeees...",
                "Extension": "jpg"
            },
            {
                "Id": "2009t9scxzcvb",
                "Type": "image", 
                "Key": "beeeees.jpg", 
                "ResourcePath": "https://picsum.photos/200/307",   
                "MaterialIcon": "image",
                "KeyShrinked": "beeees...",
                "Extension": "jpg"
            },
            
        ]
    }
    return JSON.parse(JSON.stringify(response));
}

export default mockFileResponse;