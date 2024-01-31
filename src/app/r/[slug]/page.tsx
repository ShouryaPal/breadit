import { getAuthSession } from "@/lib/auth";
import { FC } from "react";

interface PageProps {
    params: {
        slug: string
    }
}
 
const page= async({params}:PageProps) => {
    const {slug} =params
    const session = await getAuthSession();
    const subreddit = await.db.subreddit
    return ( <div>page</div> );
}
 
export default page;