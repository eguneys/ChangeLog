import { type ChangeLog } from "./types";

/**
 * 
 * Just a simple changelog function
 * 
 * @returns The 'changelog' string
 * 
 * @description https://<insert link here>
 */

export function changelog(): ChangeLog {
    world()
    return 'changelog'
}

export function shakeme(): string {
    hello()
    return 'shakeme3'
}

function world() {
    console.log('world')
}

function hello() {
    console.log('hello')
}