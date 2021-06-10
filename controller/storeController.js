const fs = require('fs');
const store = JSON.parse(fs.readFileSync('data.json'));

exports.getStore = (req, res) => {
    res.status(200).json({
        status: 'success',
        results: store.length,
        data: {
            store: store
        }
    })
}

exports.deleteStore = (req, res) => {
    res.status(204).json({
      status: 'success',
      data: null
    })
  }