const rootStyles = window.getComputedStyle(document.documentElement)
if (rootStyles.getPropertyValue('--book-cover-width-large') != null ){
    ready()
}


function ready(){

    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode,    
    )
    FilePond.setOptions({
        stylePanelAspectRatio: 150/100,
        imageResizeTargetWidth: 100,
        imageResizeTargetHeight: 150,
        
    })
    
    
    FilePond.parse(document.body);
}
