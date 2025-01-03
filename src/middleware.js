import { NextResponse } from "next/server"


export function middleware(request){
  console.log(NextResponse,'NextResponse')
  
  return NextResponse.redirect(new URL('/',request.url))
  console.log(request,"middleware")
  
}

export const config={
  matcher:["/about/student"]
}
