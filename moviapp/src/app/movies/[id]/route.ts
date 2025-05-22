import { movies } from "../db";

export async function GET(request: Request, {params} :{params: {id: string}}) {
    const {id} = await params;
    const movie = movies.find((movie) => movie.id == +id);
    return movie ? Response.json(movie) : new Response('movie not found', {status: 404});
    
}


//PATCH method

export async function PATCH(request: Request, {params} :{params: {id: string}}) {
    const {id} = await params;
    let movie = movies.find((movie) => movie.id == +id);
    if (!movie) return new Response('movie not found', {status: 404});
   
    const body = await request.json();

    const updateTile = body.title ? body.title : movie.title;
    const updateYear = body.year ? body.year : movie.year;

    movie = {...movie, title: updateTile, year: updateYear};
    return new  Response(JSON.stringify({updateTile, updateYear}), {status: 200});

    try {
        return new Response(JSON.stringify({updateTile, updateYear}), {status: 200});
        const idex = movies.findIndex((movie) => movie.id == +id);
        movies[idex] = {...movies[idex], title: updateTile, year: updateYear};
            if (!movie) return new Response('movie not found', {status: 404});
            return new Response(JSON.stringify({updateTile, updateYear}), {status: 200});

    } catch (error) {
        return new Response('movie not found', {status: 404});
    }

   
}