import { useParams } from "react-router-dom";

function Recipe(){

    const { strId } = useParams();

    return (
        <>
            <h1>Welcome to Recipe {strId} Page</h1>
        </>
    )
}

export default Recipe;