"use client"

import Link from "next/link";
import { Button } from "../ui/button";

const CVButton = () => {
    return(
        <div className="flex flex-col gap-4 mx-5 my-4 items-center md:items-start">
            <Link href="https://drive.google.com/file/d/1o4xi591m1RbD0H2dX4QqGRC8-Qi9Sjj_/view?usp=sharing" target="_blank"><Button className="bg-primary hover:bg-purple-600 w-40 text-white text-base p-6">View CV</Button></Link>
            <Link href="https://drive.google.com/uc?export=download&id=1o4xi591m1RbD0H2dX4QqGRC8-Qi9Sjj_" download><Button className="bg-white hover:bg-gray-200 w-[200px] text-primary text-base p-6">Download CV</Button></Link>
        </div>
    );
}

export default CVButton;