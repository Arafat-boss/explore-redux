import { useSelector } from "react-redux"
import { RootSate } from "./store";


export const useAppSelector = useSelector.withTypes<RootSate>();