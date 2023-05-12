const express = require('express');
const app = express()
const mongoose = require('mongoose')
const Course = require('./models/StructureModel')
const Subject = require('./models/SubjectModel')
const Student = require('./models/StudentModel')
const Faculty = require('./models/FacultyModel')
const Result  = require('./models/Result')
const Registration = require('./models/Registration')
app.use(express.json())




app.post('/Course', async(req,res)=>{
   try {
        const courseDetail = await Course.create(req.body);
        res.status(200).json(courseDetail);
   } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message});

   }
})

app.post('/Subject', async(req,res)=>{
    try {
         const subDetail = await Subject.create(req.body);
         res.status(200).json(subDetail);
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 
    }
 })

 app.post('/Student', async(req,res)=>{
    try {
         const studentDetail = await Student.create(req.body);
         res.status(200).json(studentDetail);
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 
    }
 })

 app.post('/Faculty', async(req,res)=>{
    try {
         const facDetail = await Faculty.create(req.body);
         res.status(200).json(facDetail);
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 
    }
 })

 app.post('/Result', async(req,res)=>{
    try {
         const results = await Result.create(req.body);
         res.status(200).json(results);
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 
    }
 })

 app.post('/Registration', async(req,res)=>{
    try {
         const reg = await Registration.create(req.body);
         res.status(200).json(reg);
    } catch (error) {
     console.log(error.message);
     res.status(500).json({message: error.message});
 
    }
 })
 


mongoose.connect(`mongodb+srv://6Vanguardian9:pratham_09@cluster0.o7mkvft.mongodb.net/Node-Crud?retryWrites=true&w=majority`)
    .then(() => {
        app.listen(3000, () => {
            console.log('Connected to Mongo / Running on Port 3000')
        });

    }).catch(() => {
        console.log(error);
    })