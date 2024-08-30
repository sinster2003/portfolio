"use client"

import { Button } from "../ui/button";

const CVButton = () => {
    return(
        <div className="flex flex-col gap-4 mx-5 my-4">
            <Button className="bg-primary hover:bg-purple-600 w-40 text-white text-base p-6">View CV</Button>
            <Button className="bg-white hover:bg-gray-200 w-[200px] text-primary text-base p-6">Download CV</Button>
        </div>
    );
}

export default CVButton;