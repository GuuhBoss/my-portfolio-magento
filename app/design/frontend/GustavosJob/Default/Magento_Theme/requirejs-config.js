var config = {
    paths: {
        'bootstrap':'Magento_Theme/js/bootstrap.bundle',
        'typedjs':'Magento_Theme/js/typed.min'
    },
    shim: {
        'bootstrap': {
            'deps': ['jquery']
        }
    },
    deps: [
        'bootstrap'
    ]
}
