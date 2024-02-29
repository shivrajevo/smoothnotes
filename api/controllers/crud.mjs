

import asyncHandler from "express-async-handler"

import notesmodel from "../models/notesdata.mjs"

const testconnection = asyncHandler(

    async (req, res) => {
        try {

            res.status(200).json({ message: "connection done" })

        } catch (err) {
            res.status(500).json({ error: err.message, status: "connection not stable" })

        }
    }


)


// to create new note
const create_note = asyncHandler(
    async (req, res) => {

        const notedata = req.body

        try {


            const note = await notesmodel(notedata)

            // user.save().then(() => {

            //     res.status(200).json({ message: user._id })

            // }).catch(err => {

            //     res.status(501).json({ error: err.message })

            // })

            const new_note = await note.save()
            res.status(201).json({ id: new_note._id, status: "done" })



        } catch (err) {
            res.status(501).json({ error: err.message, status: "data not created" })

        }
    }
)


// to get all notes

const all_notes = asyncHandler(

    async (req, res) => {

        // throw new Error("a fake error")

        try {

            const allnotes = await notesmodel.find({});

            if (!allnotes.length > 0) {
                res.status(200).json({ message: "no notes" })
            }
            else {

                res.status(200).json(allnotes)

            }


        }
        catch (err) {
            res.status(500).json({ error: err.message, status: "data not fetch" })

        }
    }
)

// for get the note by id
const get_note = asyncHandler(

    async (req, res) => {

        try {
            const { id } = req.params

            const note = await notesmodel.findById(id);

            if (!note) {

                res.status(400).json({ error: `id ${id} not found` })
            }
            else {

                res.status(200).json(note)
            }

        }
        catch (err) {
            res.status(500).json({ error: err.message, status: "data not fetch" })

        }
    }
)
// for update the note
const update_note = asyncHandler(

    async (req, res) => {



        try {
            const { id } = req.params
            const new_data = req.body

            const updated_note = await notesmodel.findByIdAndUpdate(id, new_data);


            if (!updated_note) {

                return res.status(404).json({ error: `id ${id} not found` })

            } else {
                const updated_note = await notesmodel.findById(id);
                res.status(200).json(updated_note)
            }

        }
        catch (err) {
            res.status(500).json({ error: err.message, status: "data not updated" })

        }
    }
)

// for delete the user

const delete_note = asyncHandler(
    async (req, res) => {


        try {

            const { id } = req.params

            const note = await notesmodel.findByIdAndDelete(id)

            if (!note) {
                res.status(404).json({ error: ` id ${id} not found` })
            }
            else {

                res.status(200).json({ id: `${id}`, task: "deleted" })
            }

        }
        catch (err) {
            res.status(500).json({ error: err.message, status: "task not done" })
        }
    })

export { create_note, all_notes, get_note, update_note, delete_note, testconnection }