import { useNLPS } from "../hooks/FoodAPIHooks";


const DisplaySodiumLevels = ({query, }) => {
    const {error, isError, isSuccess, data} = useNLPS("1 hard boiled egg");
    if(isSuccess){
        console.log(data);
    }
    return (<div>
        display sodium levels
    </div>)
}

export default DisplaySodiumLevels;