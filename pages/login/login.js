module.exports = {
  get: function(request, response) {
    console.log(request.__);
    response.render({
      user: {
        name: "scott",
        pass: "pacat"
      }
        })

  },
  post: function(request, response) {
    console.log(request.body.username);
    //if(request.body.username==users)
    response.render({
      user: {
        name: request.body.username,
        pass: request.body.password
      }
    })
  }

}
