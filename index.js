module.exports = function prop_bind (obj, prop, bindings) {
  if (typeof bindings === 'string') bindings = bindings.split(' ')
  var raw = []
  var parsed = Object.create(null)
  for (var i = 0; i < bindings.length; i++) {
    var binding = bindings[i]
    if (binding.slice(0, 1) === ':') {
      raw.push(binding.slice(1))
      continue
    }
    var parts = binding.split(':')
    parsed[parts[0]] = [
      parts[1] ? parts[1] : parts[2] ? '' : parts[0],
      parts[2] ? parts[2] : ''
    ]
  }
  Object.defineProperty(obj, prop, {
    enumerable: true,
    configurable: true,
    get: function () {
      var val = Object.keys(parsed).map(function (p) {
        return obj[p] ? parsed[p][0] : parsed[p][1]
      })
      val = raw.concat(val).join(' ').trim()
      return val
    },
    set: function (val) {
      raw = [val]
    }
  })
}
