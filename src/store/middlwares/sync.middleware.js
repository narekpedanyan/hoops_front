// import-steps ActionMapper from '../../controllers/action-mappers';

/*
const syncGet = (action, store) => {
    const Mapper = ActionMapper['get'];
    if (Mapper[action.type] && typeof Mapper[action.type] === 'function') {
        Mapper[action.type](action, store);
    }
};

const syncPost = (action, store) => {
    const Mapper = ActionMapper['post'];
    if (Mapper[action.type] && typeof Mapper[action.type] === 'function') {
        Mapper[action.type](action, store);
    }
};

const syncMiddleware = store => next => action => {
    syncGet(action, store);
    syncPost(action, store);
    next(action);
};

export default syncMiddleware;*/
