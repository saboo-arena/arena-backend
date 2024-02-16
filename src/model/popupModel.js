const mongoose = require('mongoose')

const popupSchema = new mongoose.Schema({
    name:{                              
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    model:{
        type:String,
        require:true
    },
    outlet:{
        type:String,
        require:true
    },
    allQuery :{
        type :Array,
        trim:true
      },
    error :{
        type :String,
        trim:true
      },
    leadFrom : {
        type: String,
        default:"popup"
       },
    date:{
        type: String,
    },
    time :{
        type:String,
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date
    },
},{timestamps:true})
module.exports = mongoose.model("popup", popupSchema);


// name: name,
//         phone: phone,
//         model: model,
//         outlet: outlet,

//  <option>Select Model</option>
//                     <option value='ALTO'>ALTO</option>
//                     <option value='ALTO K10'>ALTO K10</option>
//                     <option value='WAGON R'>WAGON R</option>
//                     <option value='CELERIO'>CELERIO</option>
//                     <option value='SWIFT'>SWIFT</option>
//                     <option value='DZIRE'>DZIRE</option>
//                     <option value='S-PRESSO'>S-PRESSO</option>
//                     <option value='ERTIGA'>ERTIGA</option>
//                     <option value='BREZZA'>BREZZA</option>
//                     <option value='EECO'>EECO</option>



//   <option>Select Outlet</option>
//                     <option value='Somajiguda'>Somajiguda</option>
//                     <option value='Malakpet'>Malakpet</option>
//                     <option value='Secunderabad'>Secunderabad</option>
//                     <option value='Kushaiguda'>Kushaiguda</option>
//                     <option value='Kompally'>Kompally</option>
//                     <option value='Shamirpet'>Shamirpet</option>
//                     <option value='Narsingi'>Narsingi</option>
//                     <option value='Kodangal'>Kodangal</option>
//                   </select>