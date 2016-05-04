
module.exports = [{
  path: 'personalDetail',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/PersonalDetail").default)
    })
  }
},
{
  path: 'personalUpdate',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/PersonalUpdate").default)
    })
  }
},
{
  path: 'needToKnow',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/NeedToKnow").default)
    })
  }
},
{
  path: 'protocol',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/Protocol").default)
    })
  }
},
{
  path: 'rewardDetail',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/RewardDetail").default)
    })
  }
},
{
  path: 'pullReward',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require("./containers/PullReward").default)
    })
  },
  childRoutes:[
    {
      path:'ApplyPull',
      component:require("./containers/ApplyPull").default
    },{
      path:'PullHistory',
      component:require("./containers/PullHistory").default
    }]
  },
  {
    path: 'bindError',
    getComponent(location, cb) {
      require.ensure([], (require) => {
        cb(null, require("./containers/BindError").default)
      })
    }
  }
]
