import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { prisma } from "@/prisma/client";
import { createIssueSchema } from "../../validationSchema";

export async function POST(request:NextRequest) {
    const body=await request.json();
    const validation=createIssueSchema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }

    //Api for creating new issue
    const newIssue=await prisma.issue.create({
        data:{title:body.title, decription:body.description}
    })

    return NextResponse.json(newIssue,{status:201})
}