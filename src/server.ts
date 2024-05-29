import Fastify from "fastify";
import { ErrorHandler } from "./middleware/errorHandler";

const fastify = Fastify({});

fastify.setErrorHandler(ErrorHandler);
fastify.post("/", (request, reply) =>{
    reply.send({"ya": "boss"})
} )

const PORT = 3000;
try {
  fastify.listen({ port: PORT }).then(() => {
    console.log(`Server listening on port ${PORT}`);
  });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
