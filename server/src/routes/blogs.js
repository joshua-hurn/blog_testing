import {
    Router
} from 'express';
import Table from "../table";

let router = Router();

let blogsTable = new Table('Blogs');

router.get('/:id?', (req, res) => {
    if (req.params.id) {
        blogsTable.getOne(req.params.id)
            .then(results => res.send(results))
            .catch(e => console.log(e))
    } else {
        blogsTable.getAll()
            .then(results => res.send(results))
            .catch(e => console.log(e))
    }
});

router.post('/', (req, res) => {
    blogsTable.insert(req.body)
        .then(results => res.send(results))
        .catch(e => console.log(e))
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let row = {
        title: req.body.title, 
        content: req.body.content
    }
    blogsTable.update(id, row)
        .then(results => res.send(results))
        .catch(e => console.log(e))
})

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    blogsTable.delete(id)
        .then(results => res.send(results))
        .catch(e => console.log(e))
})

export default router;