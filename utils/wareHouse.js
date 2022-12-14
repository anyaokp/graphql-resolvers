const { WareHouse } = require('../models')

async function createWareHouse(data) {
  try {
    let wareHouse = await WareHouse.findOneAndUpdate({_id: mongoose.Types.ObjectId()}, data, {
      new: true,
      upsert: true,
      runValidators: true,
      setDefaultsOnInsert: true,
    }).populate('city region').lean()
    wareHouse.id = wareHouse._id
    return wareHouse
  } catch (err) {
    console.log("ERROR UTIL CREATE WARE HOUSE - ", err)
  }
}

async function getWareHouse(id) {
  return await WareHouse.findOne({ _id: id }).populate('city region')
}

async function listWareHouses(filter) {
  try {
    const { rights, page = 1, limit = 10 } = filter

    const query = {}

    const skip = limit * (page - 1)
    const result = await WareHouse.find(query)
      .skip(skip)
      .limit(limit)
      .populate('city region')
    const totalDocs = await WareHouse.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)
    return {
      items: result,
      pagination: {
        page,
        limit,
        totalDocs,
        totalPages,
      },
    }
  } catch (err) {
    throw err
  }
}

async function updateWareHouse(data) {
  const { id, regionId, cityId } = data
  const result = await WareHouse.findById(id)
  let region, city
  if (regionId) {
    region = await Region.findById(regionId)
  }
  if (cityId) {
    city = await City.findById(cityId)
  }
  return await WareHouse.findByIdAndUpdate(
    id,
    {
      region: region ? region : result.regionId,
      city: city ? city : result.cityId,
      ...data,
    },
    {
      new: true,
      runValidators: true,
    }
  ).populate('city region')
}

async function deleteWareHouse(id) {
  return await WareHouse.findOneAndDelete({ _id: id }).populate('city region')
}

module.exports = {
  createWareHouse,
  updateWareHouse,
  deleteWareHouse,
  listWareHouses,
  getWareHouse,
}
