# angular-reactivex-switchmap
Angular / ReactiveX - switchMap

# Purpose
Explain the use of RxJS - switchMap the simplest and easiest as possible.

# Why?
I've searched for some simple examples to learn about RxJS switchMap component, and I've had too much difficult to reach a simple example that could teach me how and when use it.

# Explanation
There're 3 main streams on the example given:
1) timer(0,5000)
2) interval(1000)
3) interval(100)
The first stream calls its subscribers each 5 seconds, the second stream calls each 1 second and the last one calls each 0.1 second.
Whatever stream, when it calls its subscribers and inside the PIPE there is a switchMap, this subscriber will be cancelled and create another one. That's the reason each 5 seconds the second stream restart counting and the reason each 1 second the last stream restart couting.

<b>Attention</b>: `tap` operator is just to do something inside the pipe ( the same as the old operator `do`).

# Live example
https://stackblitz.com/edit/angular-reactivex-switchmap
