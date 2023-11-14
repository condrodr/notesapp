// import Hapi from '@hapi/hapi';
import Hapi from '@hapi/hapi';
import routes from './routes.js';

const init = async () => {
    const server = Hapi.server({
      port: 5000,
      host: 'localhost',
    });
   
   server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
  };
   
   
  init();

//   const response = h.response({ error: false, message: 'Catatan berhasil ditambahkan' });
 
// response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
 
// return response;