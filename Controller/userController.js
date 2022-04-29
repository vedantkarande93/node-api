let array=  [
    {
        id: 1,
        name: 'abc'
    },
    {
        id: 2,
        name: 'def'
    }
]
exports.get = (request, response, next) => {
    response.send(array)
}

exports.create = (request, response, next) => {
    const { body } = request;
    if(body == undefined || body == null || body == {} ) {
        return response.status(406).json({
            message: 'Please send valid details'
        })
    }
    body.id = array.length + 1;
    array.push(body)
    response.send(array)
}

exports.update = (request, response, next) => {
    const { id } = request.params;
    const { name } = request.body;
    if(!id) {
        return response.status(406).send({
            message: "Please enter valid id"
        })
    }
    if(!name) {
        return response.status(406).send({
            message: "Please enter valid name"
        })
    }
    const index = array.findIndex(element => element.id === parseInt(id));
    array[index].name = name;
    return response.send({
        message: 'User is updated successfully.',
        user: array[index]
    })
}

exports.delete = (request, response, next) => {
    const { id } = request.params;
    if(!id) {
        return response.status(406).send({
            message: 'Please send valid Id'
        })
    }
    const index = array.findIndex(element => element.id === parseInt(id))
    if(index) {
        array.slice(index, 1)
        return response.status(200).send({
            message: 'User is deleted.'
        })
    } else {
        return response.status(404).send({
            message: 'User is not found.'
        })
    }
}