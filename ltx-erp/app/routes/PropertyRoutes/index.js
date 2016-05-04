





module.exports = [{
  path: 'propertys',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/Propertys").default)
    })
  }
},
{
  path: 'addProperty',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/AddProperty").default)
    })
  }
},
{
  path: 'property',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/Property").default)
    })
  }
}
]
