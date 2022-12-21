const Model = (function Model() {
    let id_count = {}

    return function Model(class_name) {
        if(!id_count[class_name]) {
            id_count[class_name] = 1
        }
        this.id = id_count[class_name]++
    }
})()

module.exports = Model