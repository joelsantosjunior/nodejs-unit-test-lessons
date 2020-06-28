import { Todo } from "../database/models/todo.model";
import { Request } from 'express';

export const validateIncomeData = (data: Todo) => {

    if (! data.name) { throw new Error('Todo name is missing'); }
    if (! data.description) { throw new Error('Todo description is missing'); }

    return true;
}

export const validateIncomeParams = (req: Request | any) => {
    if (! req.params.id) { throw new Error('Id is missing'); }

    return true;
}