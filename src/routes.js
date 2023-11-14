import {addNoteHandler, getAllNotesHandler} from './handler.js';
import Hapi from '@hapi/hapi'

const routes = [
    {
        method : 'POST',
        path : '/notes',
        // handler: () =>{},
        handler : addNoteHandler,
        
        options: {
            cors: { //Cross-origin resource sharing (CORS)
              origin: ['*'],
            }
        },
        // atau neri di client
        // nilai header
        /*
        const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
        response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
 
        return response;
        */        
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
      },
];
const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

export default routes;