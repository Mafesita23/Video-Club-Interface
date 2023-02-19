import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Edit(item, setMovieInfo, updateMovie) {

    const [info, setInfo] = useState(item);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInfo(value => ({ ...value, [name]: value }));
    };

    /* const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [time, setTime] = useState("");
    const [language, setLanguage] = useState("");
    const [date, setDate] = useState("");
    const [country, setCountry] = useState("");
    // const [director, setDirector] = useState("");
    // const [actor, setActor] = useState("");
    const [genreTitle, setGenreTitle] = useState(""); */


    /* useEffect(() => {
        axios.get(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/videoClubDataBase?retryWrites=true&w=majority`).then((res) => {
            setTitle(res.data.title);
            setYear(res.data.year);
            setTime(res.data.time);
            setLanguage(res.data.language);
            setDate(res.data.date);
            setCountry(res.data.country)
            setGenreTitle(res.data.genretitle)
        });
    }, []); */

    const handleSubmit = () => {
        item.title = value.title;
        item.year = value.year;
        item.time = value.time;
        item.language = value.language;
        item.country = value.country;
        item.date = value.date;

        if (directorN.trim() !== "" && directorLn.trim() !== "") {
            item.director = [{ ...item.director, name: directorName, lastname: directorLname }]
        }

        //Add Actor
        item.actor = [...item.actor, { name: actorName, lastname: actorLname }]
        
        updateMovie(item._id, item);
    }

    const [title, setTitle] = useState("");

    const [year, setYear] = useState("");

    const [time, setTime] = useState("");

    const [language, setLanguage] = useState("");

    const [country, setCountry] = useState("");

    const [date, setDate] = useState("");

    const [directorName, setDirectorName] = useState("");

    const [directorLname, setDirectorLname] = useState("");

    const [actorName, setActorName] = useState("");

    const [actorLname, setActorLname] = useState("");

    const data = {
        title: title,
        year: year,
        time: time,
        language: language,
        date: date,
        country: country,
        /* director: director[
            {
                lastname: String,
                name: String
            }
        ], */
        genre_title: genreTitle,
        /* actor: actor[
                {
                    lastname: String,
                    name: String,
                    gender: String
                }
            ] */
    }

    function Update(e) {
        e.preventDefault();
        axios.put(`mongodb+srv://Administrador:Admin1342**@videoclubdatabase.ry0toej.mongodb.net/videoClubDataBase?retryWrites=true&w=majority`, data).then(navigate("/"));
    }
    return (
        <div className="w-screen h-full flex flex-col justify-center items-center mt-16" >
            <h2 className="text-2xl font-bold">User Details</h2>
            <form className="w-[50%] h-full flex flex-col mt-2">
                <input
                    value={value.title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="text"
                    placeholder = {item.title}
                />
                <input
                    value={value.year}
                    onChange={(e) => setYear(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="email"
                    pattern="[0-9]"
                    placeholder = {item.year}
                />
                <input
                    value={value.time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    pattern="[0-9]"
                    placeholder = {item.time}
                />
                <input
                    value={value.language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.language}
                />
                <input
                    value={value.date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.date}
                />
                <input
                    value={value.country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.country}
                />
                <input
                    value={value.directorName}
                    onChange={(e) => setDirectorName(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.directorName}
                />
                <input
                    value={value.directorLname}
                    onChange={(e) => setDirectorLname(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.directorLname}
                />
                <input
                    value={value.actorName}
                    onChange={(e) => setActorName(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.actorName}
                />
                <input
                    value={value.actorLname}
                    onChange={(e) => setActorLname(e.target.value)}
                    className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
                    type="phone"
                    placeholder = {item.actorLname}
                />
                <button
                    className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    UPDATE MOVIE
                </button>
            </form>
        </div >
    );
}

export default Edit;
