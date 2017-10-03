/////////////////////////////////////////
    const express = require('express')
    const app = express()
    const PORT = 3000
/////////////////////////////////////////
    var moviesArray = ['T2', 'TMNT']
///////////GET//////////////////////////////
    app.get('/movies', (req, res) => { res.send(moviesArray)}) 
        // All of the movies
    app.get('/movies/:id', (req, res) => { 
        res.send("Movie Name " + moviesArray[req.params['id']] )
    })
//////////POST///////////////////////////////
    app.post('/movies/:id', (req, res) => {
        moviesArray.push(req.params['id'])
        res.send(moviesArray)
    })
/////////DELETE////////////////////////////////
    app.delete('/movies/:id', (req, res) => {
        moviesArray.splice(moviesArray.indexOf(req.params['id']),1)
        res.send(moviesArray)
    })
//////////EDIT///////////////////////////////
    app.get('/movies/:old/:new', (req, res) => {
        moviesArray.splice(moviesArray.indexOf(req.params['old']), 1, req.params['new']);
        res.send(moviesArray)
    })
/////////////////////////////////////////
    // app.get('/change_name/:old/:new', (req, res) => {
    //     console.log(req.params)
    //     res.send('old is: ' + req.params['old'] + ' new will be: ' + req.params['new'] )
    // })
/////////////////////////////////////////
    app.listen(PORT, () => {
        console.log('Server started on port', PORT)
    })
/////////////////////////////////////////