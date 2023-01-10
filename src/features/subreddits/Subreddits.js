import React, { useEffect } from "react";

import { 
    useDispatch,
} from "react-redux";

import { getSubreddits } from "../../utils/Reddit";
import { 
    addSubreddit,
} from "./subredditsSlice";
import { SubredditsDropdown } from "./SubredditsDropdown";


export default function Subreddits(props) {
    
 
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const json = await getSubreddits();
            
            json.forEach(item => dispatch(
                addSubreddit({
                    name: item.display_name,
                    url: item.url,
                    id: item.id,
                    icon: item.community_icon.split("?")[0],
                })));
        }
        fetchData();
    }, [dispatch]);

    return (
        <section className='subreddits'>
            <SubredditsDropdown />
        </section>
    );


}