import { Router } from "express";
import { Todo } from "../Models/todo";

const router = Router()

let todo: Todo[] = []

router.get("/", (req, res, next) => {
    res.status(200).json({ toods: todo })
})


router.post("./todo", (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }
    todo.push(newTodo)
    return res.status(201).json({ message: "saved", todo: newTodo })
})

router.put("./todo/:todoId", (req, res, next) => {
    const Id = req.params.todoId;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === Id)
    if (todoIndex >= 0) {
        todo[todoIndex] = { id: todo[todoIndex].id, text: req.body.text }
        return res.status(200).json({ message: "updated", todo: todo })
    }
    res.status(404).json({ message: "Not Found" })
})

router.delete("./todo/:todoId", (req, res, next) => {
    todo = todo.filter(item => item.id !== req.body.todoId)
    res.status(200).json({ message: "Deleted", todo: todo })
})
export default router;