
import { NextRequest } from "next/server";
import { movies } from "./db";

// export  async function GET() {
//     return  Response.json(movies);
// }

//post method

export async function POST(request: Request) {
    let movie = await request.json();
    const newmovie = {...movie}
    movies.push(newmovie);
    return new Response(JSON.stringify(newmovie));
}

//Patch method

export async function PATCH(request: Request) {
    let movie = await request.json();
    const newmovie = {...movie}
    movies.push(newmovie);
    return new Response(JSON.stringify(newmovie));
}


//get method on query

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    const filteredMovies = movies.filter((movie) => movie.title.includes(query!));
    return Response.json(filteredMovies);
}