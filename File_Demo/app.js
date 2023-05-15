const fs = require('fs')

const loadNotes =()=>{
    const buffer = fs.readFileSync('notes.json');
    console.log(buffer)
    const dataStr = buffer.toString();
    console.log(dataStr)

    const obj = JSON.parse(dataStr);
    console.log(obj)
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

module.exports = { addNotes}