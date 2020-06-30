import { Request, Response, Router } from 'express';
import TodoModel, { Todo } from '../database/models/todo.model';

const todoRouter = Router();

todoRouter.get('', async (req: Request, res: Response) => {
    
    try {
        const todos = await TodoModel.find();
        res.json(todos);

    } catch (error) {
        
        console.error(error);
        res.send(error.message);
    }
    
});

todoRouter.get('/:id', async (req: Request, res: Response) => {
    
    const { id } = req.params;

    try {
        const todo = await TodoModel.findOne({ _id: id });
        res.json(todo);

    } catch (error) {

        res.status(404).send(error.message);
    }

});

todoRouter.put('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const body: Todo = req.body;

    try {
        const todo = await TodoModel.updateOne({ _id: id }, body);
        res.json(todo);

    } catch (error) {

        console.error(error);
        res.send(error.message);
    }
});

todoRouter.post('', async (req: Request, res: Response) => {

    const body: Todo = req.body;

    try {
        const todo = await TodoModel.create(body);
        res.json(todo);

    } catch (error) {

        console.error(error);
        res.status(400).send(error.message);
    }

});

todoRouter.delete('/:id', async (req: Request, res: Response) => {

    const { id } = req.params;

    try {
        await TodoModel.deleteOne({ _id: id });
        res.json({ deleted: true });

    } catch (error) {

        console.error(error);
        res.send(error.message);
    }

});

export default todoRouter;

