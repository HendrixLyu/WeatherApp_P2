const openweathermapServiceAPI = require('../services/openweathermapServiceAPI')
//GET ALL
exports.index666 = async(req, res) => {
    const result = await openweathermapServiceAPI.getWeather()
    // console.log('####:',result)
    const weatherList = result.data.list
    const noonList = weatherList.filter(e=>{
        return e.dt_txt.includes('12:00:00')
    })
    // res.send(result.data)
    res.send(noonList)
}
// POST
exports.store = (req,res) => {

}
// PUT
exports.update = (req,res) => {

}
// get one
exports.show = (req,res) => {

}
// Delete
exports.delete = (req,res) => {
    
}