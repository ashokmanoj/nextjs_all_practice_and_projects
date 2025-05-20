import { movies } from "../db";

export async function GET(request: Request, {params} :{params: {id: string}}) {
    const {id} = await params;
    const movie = movies.find((movie) => movie.id == +id);
    return movie ? Response.json(movie) : new Response('movie not found', {status: 404});
    
}