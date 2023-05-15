const fs = require('fs')

const loadNotes =()=>{
    const buffer = fs.readFileSync('notes.json');
   // console.log(buffer)
    const dataStr = buffer.toString();
    //console.log(dataStr)

    const obj = JSON.parse(dataStr);
   // console.log(obj)
    return obj
}


const addNotes =(title, author)=>{
    const notes = loadNotes();

    const duplicateNotes = notes.filter((i)=>i.title == title)

    if(duplicateNotes.length == 0){
        notes.push({
            title: title,
            author: author
        })
    }
    else {
        console.log("The title is already taken.")
    }
    saveNotes(notes);
}

const saveNotes = (notes) =>{
    const dataStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataStr);
}

const getAllNotes =()=>{
    const notes = loadNotes()
    notes.forEach((i)=>{
        console.log(i.title)
    })
}

const readNote =(title)=>{
    const notes = loadNotes();
    var note = notes.find(note =>note.title === title)
    if(note){
        console.log('title '+ title + 'Author ' + note.author)
    }
    else{
        console.log('Notes not found')
    }
}

const removeNote = (title)=>{
    const notes = loadNotes();
    const findIndex = notes.findIndex(note => note.title === title)
    if(findIndex !== -1){
        notes.splice(findIndex, 1)
    }
    else{
        console.log('No notes found')
    }
    saveNotes(notes)
}

module.exports = { addNotes, getAllNotes, readNote, removeNote}