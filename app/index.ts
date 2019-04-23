import { timer, interval } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

//start now and run each 5 seconds
const source = timer(0, 5000);

const example = source.pipe(tap((b) => (console.log("every 5 seconds, how many times is it running? " + b))),
                            switchMap(() => interval(1000).pipe(
                              tap((a) => (console.log("every 1 seconds:" + a))),
                              switchMap(() => interval(100).pipe(
                                tap((c) => console.log("every 0.1 seconds:" + c))))))
);

const subscribe = example.subscribe();