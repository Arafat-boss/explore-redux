import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootSate } from "./store";


export const useAppSelector = useSelector.withTypes<RootSate>();
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();