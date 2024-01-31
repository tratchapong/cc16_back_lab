const db = require('../models/db')
const tryCatch = require('../utils/tryCatch')

exports.createHomework = tryCatch(async (req, res, next) => {
  const { question,startdate,duedate,published,subject_id,teacher_id } = req.body
  // validation
  console.log(req.body)
  if(req.user.role !== 'teacher') {
      throw new Error('Unauthorized::400')
  }
  const rs = await db.homework.create({ 
      data: {
        subject_id : +subject_id,
        question,
        // startdate : new Date(startdate),
        // duedate : new Date(duedate),
        startdate,
        duedate,
        published,
        teacher_id : req.user.id
      } })
  res.json({result: rs})
})

exports.gelByTeacher = tryCatch( async (req,res,next) =>{
  const homework = await db.homework.findMany({
    where : { teacher_id : req.user.id },
    include : { 
      subject : {
        select : { title : true}
      }
    }
  })
  res.json({ homework })
} )

exports.update= tryCatch( async( req, res, next) => {
  const {id} = req.params
  const {question,startdate,duedate,published,subject_id } = req.body
  const rs = await db.homework.update( {
    where : { id : +id },
    data : {
      subject_id : +subject_id,
      question,
      startdate,
      duedate,
      published,
      teacher_id : req.user.id
    }
  })
  res.json({result : rs})
} )