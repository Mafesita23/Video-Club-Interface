import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

const movieList = ({item, infoMovie, setMovieInfo, deleteMovies}) =>{

  const fetchData = async () => {
    const response = await fetch("",);
    const data = await response.json();
  }
  fetchData();
  setMovieInfo((moviesOn) => moviesOn.filter((deleteReq) =>{
    return deleteReq._id !== id;
  }))


  const handleDeleteMovie = () => {
    swal({
      title: "Estás seguro de borrar esta película? ",
      buttons: true,
      dangerMode: true, 
    })
    .then((deleteMovie) => {
      if (deleteMovie){
        swal("Película borrada exitosamente")
        deleteMovies()
      }else{
        swal("Cancelaste la eliminación")
      }
    });
  }

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/?retryWrites=true&w=majority${id}`).then((res) => {
            setMovieInfo(res.data);
        });
    }, []);

console.log(movie);
return (
  <>
    <div className="h-full w-full flex flex-col mt-32 justify-center items-center">
      <Link>
        to={`/`}
        className="hover:bg-teal-600 bg-white hover:shadow-md  outline-none rounded-xl font-bold border mt-8 hover:text-teal-200 text-teal-600 border-zinc-400 py-4 px-4 pl-4"
        Back To Home
      </Link>
    </div>
      {/* {movie && ( */}
        {/* <div className="w-[700px] h-[200] px-6 py-4 flex shadow-xl rounded-xl justify-center items-center bg-teal-600 mt-16 border-teal-800 border-2">
          <div className="w-5/12 flex flex-col space-y-4">
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
            Titulo
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Año
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
              Tiempo
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
            Lenguaje
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
            Fecha
            </h2>
            <h2 className="text-white font-bold text-3xl border-black border-b-2">
            Ciudad
            </h2>
          </div>
          <div className="w-7/12 flex flex-col space-y-4  ">
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.title}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.year}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.time}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.language}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.date}
            </h2>
            <h2 className="text-teal-200 font-bold text-3xl border-black border-b-2">
              {item.country}
            </h2>

          </div>
        </div> */}
        
  <Table responsive="xl" bordered hover id="table">
    <thead id="table-header">
      <tr>
        <th>Titulo pelicula</th>
        <th>Año lanzamiento</th>
        <th>Duracion en min</th>
        <th>Lenguage</th>
        <th>Fecha</th>
        <th>País</th>
        <th>Genero</th>
      </tr>
    </thead>
    <tbody>
      {
        infoMovie.map((item) =>{
          return(
            <MovieList item={item} key={item._id} setMovieInfo={setMovie}/>
          )
        })
      }
    </tbody>
  </Table>
    </>
  )
}

export default movieList;
