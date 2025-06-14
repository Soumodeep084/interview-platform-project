"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SparkleIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";

function DashBoardBtn(){

    const { isLoading , isCandidate , isInterviewer } = useUserRole();
    
    if(isCandidate || isLoading) return null;


    return (
        <Link href="/dashboard">
            <Button className="gap-2 font-bold uppercase font-mono" size={"sm"}>
                <SparkleIcon className="size-4 font-bold" />
                Dashboard
            </Button>
        </Link>
    )
}

export default DashBoardBtn;