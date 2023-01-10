import React, { useEffect } from "react";

import { Link } from "react-router-dom";

import { 
    useSelector,
    useDispatch,
} from "react-redux";

import { getSubreddits } from "../../utils/Reddit";
import { 
    addSubreddit,
    changeActiveSubreddit,
    selectActiveSubreddit,
    selectSubReddits,
} from "./subredditsSlice";


export default function Subreddits(props) {
    
    const activeSub = useSelector(selectActiveSubreddit);
    const subReddits = useSelector(selectSubReddits);
    const dispatch = useDispatch();

  
    useEffect(() => getSubreddits().then(json => {
        json.forEach(item => dispatch(
            addSubreddit({
                name: item.display_name,
                url: item.url,
                id: item.id,
                icon: item.community_icon.split("?")[0],
            })));
    }), [dispatch]);


}