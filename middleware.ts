import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  // if (user != true) {
    // return NextResponse.redirect('/')
  // }
  return NextResponse.next();  
}
