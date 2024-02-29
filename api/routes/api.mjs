import { Router } from "express";
import { all_notes, get_note, create_note, update_note, delete_note, testconnection } from "../controllers/crud.mjs"

const router = Router()

router.get("/", testconnection)
router.get("/all", all_notes)
router.post("/create", create_note)
router.get("/note/:id", get_note)
router.put("/note/:id", update_note)
router.delete("/note/:id", delete_note)


export { router }

